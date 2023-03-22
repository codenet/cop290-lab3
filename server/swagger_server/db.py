# Connect to the database
from typing import Optional

import pymysql

from swagger_server.models import Category, Tag, Pet

connection = pymysql.connect(host='localhost',
                             user='root',
                             password='',
                             database='pets',
                             cursorclass=pymysql.cursors.DictCursor)

def setup():
  # with connection:
    with connection.cursor() as cursor:
      cursor.execute("""CREATE TABLE IF NOT EXISTS `category` (
        `id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE KEY `name` (`name`))""")

      cursor.execute("""CREATE TABLE IF NOT EXISTS `pet` (
        `id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(255) DEFAULT NULL,
        `photo_urls` varchar(1023) DEFAULT NULL,
        `category_id` int DEFAULT NULL,
        `status` varchar(15) DEFAULT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
      )""")

      cursor.execute("""CREATE TABLE IF NOT EXISTS `tag` (
        `id` int NOT NULL AUTO_INCREMENT,
        `name` varchar(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE KEY `name` (`name`)
      )""")

      cursor.execute("""CREATE TABLE IF NOT EXISTS `pet_tag` (
        `pet_id` int DEFAULT NULL,
        `tag_id` int DEFAULT NULL,
        FOREIGN KEY (`pet_id`) REFERENCES `pet` (`id`),
        FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
      )""")


def get_category_from_id(id: int) -> Optional[Category]:
  with connection.cursor() as cursor:
    sql = """SELECT * FROM `category` WHERE `id`=%d"""
    cursor.execute(sql, (id))
    r = cursor.fetchone()
    if r is None:
      return None
    return Category.from_dict(r)


def get_category_from_name(name: str) -> Optional[Category]:
  with connection.cursor() as cursor:
    sql = """SELECT * FROM `category` WHERE `name`=%s"""
    cursor.execute(sql, (name))
    r = cursor.fetchone()
    if r is None:
      return None
    return Category.from_dict(r)


def add_category(category: Category) -> None:
  assert category.id is None
  c = get_category_from_name(category.name)
  if c is not None:
    category.id = c.id
    return

  with connection.cursor() as cursor:
    sql = f"INSERT INTO category (name) VALUES (%s)"
    cursor.execute(sql, (category.name))
    connection.commit()
    category.id = cursor.lastrowid


def get_tag_from_id(id: int) -> Optional[Tag]:
  with connection.cursor() as cursor:
    sql = """SELECT * FROM `tag` WHERE `id`=%d"""
    cursor.execute(sql, (id))
    r = cursor.fetchone()
    if r is None:
      return None
    return Tag.from_dict(r)


def get_tag_from_name(name: str) -> Optional[Tag]:
  with connection.cursor() as cursor:
    sql = """SELECT * FROM `tag` WHERE `name`=%s"""
    cursor.execute(sql, (name))
    r = cursor.fetchone()
    if r is None:
      return None
    return Tag.from_dict(r)


def add_tag(tag: Tag) -> None:
  assert tag.id is None
  t = get_tag_from_name(tag.name)
  if t is not None:
    tag.id = t.id
    return

  with connection.cursor() as cursor:
    sql = f"INSERT INTO tag (name) VALUES (%s)"
    cursor.execute(sql, (tag.name))
    connection.commit()
    tag.id = cursor.lastrowid


def add_pet(pet: Pet) -> None:
  assert pet.id is None
  if pet.category.id is None:
    add_category(pet.category)
  for tag in pet.tags:
    if tag.id is None:
      add_tag(tag)

  with connection.cursor() as cursor:
    sql = f"INSERT INTO pet (name, photo_urls, category_id, status) VALUES " \
          f"(%s, %s, %s, %s)"
    cursor.execute(sql, (pet.name, pet.photo_urls, pet.category.id, pet.status))
    connection.commit()
    pet.id = cursor.lastrowid

    sql = f"INSERT INTO pet_tag (pet_id, tag_id) VALUES (%s, %s)"
    for tag in pet.tags:
      cursor.execute(sql, (pet.id, tag.id))
    connection.commit()


