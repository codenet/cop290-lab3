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
import {ApiClient} from "../ApiClient";
import {ApiResponse} from '../model/ApiResponse';
// import {Category} from '../model/Category';
import {Pet} from '../model/Pet';
// import {Tag} from '../model/Tag';

/**
* Pet service.
* @module api/PetApi
* @version 1.0.11
*/
export class PetApi {

    /**
    * Constructs a new PetApi. 
    * @alias module:api/PetApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addPet operation.
     * @callback moduleapi/PetApi~addPetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pet{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new pet to the store
     * Add a new pet to the store
     * @param {module:model/Pet} body Create a new pet in the store
     * @param {Number} id 
     * @param {String} name 
     * @param {module:model/Category} category 
     * @param {Array.<String>} photoUrls 
     * @param {Array.<module:model/Tag>} tags 
     * @param {module:model/String} status 
     * @param {module:api/PetApi~addPetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    // addPet(body, id, name, category, photoUrls, tags, status, callback) {
    addPet(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addPet");
      }
      // // verify the required parameter 'id' is set
      // if (id === undefined || id === null) {
      //   throw new Error("Missing the required parameter 'id' when calling addPet");
      // }
      // // verify the required parameter 'name' is set
      // if (name === undefined || name === null) {
      //   throw new Error("Missing the required parameter 'name' when calling addPet");
      // }
      // // verify the required parameter 'category' is set
      // if (category === undefined || category === null) {
      //   throw new Error("Missing the required parameter 'category' when calling addPet");
      // }
      // // verify the required parameter 'photoUrls' is set
      // if (photoUrls === undefined || photoUrls === null) {
      //   throw new Error("Missing the required parameter 'photoUrls' when calling addPet");
      // }
      // // verify the required parameter 'tags' is set
      // if (tags === undefined || tags === null) {
      //   throw new Error("Missing the required parameter 'tags' when calling addPet");
      // }
      // // verify the required parameter 'status' is set
      // if (status === undefined || status === null) {
      //   throw new Error("Missing the required parameter 'status' when calling addPet");
      // }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        // 'id': id,'name': name,'category': category,'photoUrls': this.apiClient.buildCollectionParam(photoUrls, 'multi'),'tags': this.apiClient.buildCollectionParam(tags, 'multi'),'status': status
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/json', 'application/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Pet;

      return this.apiClient.callApi(
        '/pet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deletePet operation.
     * @callback moduleapi/PetApi~deletePetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a pet
     * delete a pet
     * @param {Number} petId Pet id to delete
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @param {module:api/PetApi~deletePetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePet(petId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling deletePet");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
        
      };
      let headerParams = {
        'api_key': opts['apiKey']
      };
      let formParams = {
        
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/pet/{petId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the findPetsByStatus operation.
     * @callback moduleapi/PetApi~findPetsByStatusCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Pet>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.status Status values that need to be considered for filter (default to <.>)
     * @param {module:api/PetApi~findPetsByStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    findPetsByStatus(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'status': opts['status']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = [Pet];

      return this.apiClient.callApi(
        '/pet/findByStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the findPetsByTags operation.
     * @callback moduleapi/PetApi~findPetsByTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Pet>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tags Tags to filter by
     * @param {module:api/PetApi~findPetsByTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    findPetsByTags(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'tags': this.apiClient.buildCollectionParam(opts['tags'], 'multi')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = [Pet];

      return this.apiClient.callApi(
        '/pet/findByTags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getPetById operation.
     * @callback moduleapi/PetApi~getPetByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pet{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find pet by ID
     * Returns a single pet
     * @param {Number} petId ID of pet to return
     * @param {module:api/PetApi~getPetByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getPetById(petId, callback) {
      
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling getPetById");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['api_key', 'petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Pet;

      return this.apiClient.callApi(
        '/pet/{petId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updatePet operation.
     * @callback moduleapi/PetApi~updatePetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pet{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing pet
     * Update an existing pet by Id
     * @param {module:model/Pet} body Update an existent pet in the store
     * @param {Number} id 
     * @param {String} name 
     * @param {module:model/Category} category 
     * @param {Array.<String>} photoUrls 
     * @param {Array.<module:model/Tag>} tags 
     * @param {module:model/String} status 
     * @param {module:api/PetApi~updatePetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updatePet(body, id, name, category, photoUrls, tags, status, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePet");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updatePet");
      }
      // verify the required parameter 'category' is set
      if (category === undefined || category === null) {
        throw new Error("Missing the required parameter 'category' when calling updatePet");
      }
      // verify the required parameter 'photoUrls' is set
      if (photoUrls === undefined || photoUrls === null) {
        throw new Error("Missing the required parameter 'photoUrls' when calling updatePet");
      }
      // verify the required parameter 'tags' is set
      if (tags === undefined || tags === null) {
        throw new Error("Missing the required parameter 'tags' when calling updatePet");
      }
      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling updatePet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'id': id,'name': name,'category': category,'photoUrls': this.apiClient.buildCollectionParam(photoUrls, 'multi'),'tags': this.apiClient.buildCollectionParam(tags, 'multi'),'status': status
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/json', 'application/xml', 'application/x-www-form-urlencoded'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = Pet;

      return this.apiClient.callApi(
        '/pet', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updatePetWithForm operation.
     * @callback moduleapi/PetApi~updatePetWithFormCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a pet in the store with form data
     * @param {Number} petId ID of pet that needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of pet that needs to be updated
     * @param {String} opts.status Status of pet that needs to be updated
     * @param {module:api/PetApi~updatePetWithFormCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updatePetWithForm(petId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling updatePetWithForm");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
        'name': opts['name'],'status': opts['status']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/pet/{petId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the uploadFile operation.
     * @callback moduleapi/PetApi~uploadFileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * uploads an image
     * @param {Number} petId ID of pet to update
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {String} opts.additionalMetadata Additional Metadata
     * @param {module:api/PetApi~uploadFileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    uploadFile(petId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling uploadFile");
      }

      let pathParams = {
        'petId': petId
      };
      let queryParams = {
        'additionalMetadata': opts['additionalMetadata']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/octet-stream'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;

      return this.apiClient.callApi(
        '/pet/{petId}/uploadImage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}