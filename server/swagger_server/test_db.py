import unittest

from swagger_server import db
from swagger_server.models import Category, Pet, Tag


class TestDB(unittest.TestCase):
  def test_add_category(self):
    db.setup()
    db.add_category(Category(name="Dos"))
    x = 1

  def test_add_pet(self):
    db.setup()
    db.add_pet(Pet(name="tikku",
                   category=Category(name="cat"),
                   tags=[Tag(name="cute")]))
    x = 1

if __name__ == '__main__':
  unittest.main()