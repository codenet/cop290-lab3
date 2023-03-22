/*
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  _If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * OpenAPI spec version: 1.0.11
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Category} from './Category';
import {Tag} from './Tag';

/**
 * The Pet model module.
 * @module model/Pet
 * @version 1.0.11
 */
export class Pet {
  /**
   * Constructs a new <code>Pet</code>.
   * @alias module:model/Pet
   * @class
   * @param name {String} 
   * @param photoUrls {Array.<String>} 
   */
  constructor(name, photoUrls) {
    this.name = name;
    this.photoUrls = photoUrls;
  }

  /**
   * Constructs a <code>Pet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pet} obj Optional instance to populate.
   * @return {module:model/Pet} The populated <code>Pet</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Pet();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('category'))
        obj.category = Category.constructFromObject(data['category']);
      if (data.hasOwnProperty('photoUrls'))
        obj.photoUrls = ApiClient.convertToType(data['photoUrls'], ['String']);
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], [Tag]);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
Pet.prototype.id = undefined;

/**
 * @member {String} name
 */
Pet.prototype.name = undefined;

/**
 * @member {module:model/Category} category
 */
Pet.prototype.category = undefined;

/**
 * @member {Array.<String>} photoUrls
 */
Pet.prototype.photoUrls = undefined;

/**
 * @member {Array.<module:model/Tag>} tags
 */
Pet.prototype.tags = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Pet.StatusEnum = {
  /**
   * value: "available"
   * @const
   */
  available: "available",

  /**
   * value: "pending"
   * @const
   */
  pending: "pending",

  /**
   * value: "sold"
   * @const
   */
  sold: "sold"
};
/**
 * pet status in the store
 * @member {module:model/Pet.StatusEnum} status
 */
Pet.prototype.status = undefined;
