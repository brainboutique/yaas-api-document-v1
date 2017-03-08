/// <reference types="@types/es6-shim" />
//========================================================================
// RAML-defined Typed REST Client for 'YaasApiDocumentV1'
//========================================================================

import * as popsicle from 'popsicle';
import * as extend from 'deep-extend';
import {Observable} from '@reactivex/rxjs';


//========================================================================
// Schema 'genericResponse'
//========================================================================
export namespace GenericResponse {
   export interface GenericResponse {
     code?: string;
     status?: string;
     message?: string;
     data?: string;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'resourceLocation'
//========================================================================
export namespace ResourceLocation {
   export interface ResourceLocation {
     id?: string;
     link?: string;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'errorMessage'
//========================================================================
export namespace ErrorMessage {
   /**
    * schema for specific error cause
    */
   export interface ErrorDetail {
     /**
      * a bean notation expression specifying the element in request data causing the error, eg product.variants[3].name, this can be empty if violation was not field specific
      */
     field?: string;
     /**
      * classification of the error detail type, lower case with underscore eg missing_value, this value must be always interpreted in context of the general error type.
      */
     type: string;
     /**
      * descriptive error detail message for debugging
      */
     message?: string;
     /**
      * link to documentation to investigate further and finding support for error detail
      */
     moreInfo?: string;
     [k: string]: any;
   }
   /**
    * schema for API specified errors
    */
   export interface ErrorMessage {
     /**
      * original HTTP error code, should be consistent with the response HTTP code
      */
     status: number;
     /**
      * classification of the error type, lower case with underscore eg validation_failure
      */
     type: string;
     /**
      * descriptive error message for debugging
      */
     message?: string;
     /**
      * link to documentation to investigate further and finding support
      */
     moreInfo?: string;
     /**
      * list of problems causing this error
      */
     details?: ErrorDetail[];
     [k: string]: any;
   }
}


//========================================================================
// Schema 'tenantData'
//========================================================================
export namespace TenantData {
   export interface TenantData {
     /**
      * the name of the tenant
      */
     tenant?: string;
     /**
      * the list of all existing apps for the tenant
      */
     apps?: string[];
     [k: string]: any;
   }
}


//========================================================================
// Schema 'tenantsData'
//========================================================================
export namespace TenantsData {
   export type TenantsData = string[];
}


//========================================================================
// Schema 'tenantsStatistics'
//========================================================================
export namespace TenantsStatistics {
   export type TenantsStatistics = {
     timestamp: string;
     client: string;
     tenant: string;
     typeCount: number;
     indexCount: null;
     dataSizeBytes: null;
     [k: string]: any;
   }[];
}


//========================================================================
// Schema 'clientStatistics'
//========================================================================
export namespace ClientStatistics {
   export interface ClientStatistics {
     timestamp: string;
     client: string;
     tenantCount: number;
     typeCount: number;
     indexCount: number;
     dataSizeBytes: number;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'appData'
//========================================================================
export namespace AppData {
   export interface AppData {
     /**
      * the name of the tenant
      */
     tenant?: string;
     /**
      * the name of the app
      */
     app?: string;
     /**
      * the list of all existing types for the tenant, app comibination
      */
     types?: string[];
     [k: string]: any;
   }
}


//========================================================================
// Schema 'documentInput'
//========================================================================
export namespace DocumentInput {
   export type Id = string;
   export interface DocumentInput {
     metadata?: {
       version?: number;
       /**
        * URI to schema specified for document
        */
       schema?: string;
       /**
        * Mixins object. Keys in mixins can be constructed only from numbers, letters, hyphens and underscores.
        */
       mixins?: {
         mixinsRoot?: string;
       };
       [k: string]: any;
     };
     /**
      * Value contains object ID.
      */
     id?: Id;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'documentOutput'
//========================================================================
export namespace DocumentOutput {
   export type CreatedAt = string;
   export type ModifiedAt = string;
   export type Id = string;
   export interface DocumentOutput {
     metadata?: {
       /**
        * Value contains creation time of document.
        */
       createdAt?: CreatedAt;
       /**
        * Value contains modification time of document.
        */
       modifiedAt?: ModifiedAt;
       version?: number;
       /**
        * URI to schema specified for document
        */
       schema?: string;
       /**
        * Mixins object. Keys in mixins can be constructed only from numbers, letters, hyphens and underscores.
        */
       mixins?: {
         mixinsRoot?: string;
       };
       [k: string]: any;
     };
     /**
      * Value contains object ID.
      */
     id?: Id;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'documentsOutput'
//========================================================================
export namespace DocumentsOutput {
   export type CreatedAt = string;
   export type ModifiedAt = string;
   export type Id = string;
   export type DocumentsOutput = {
     metadata?: {
       /**
        * Value contains creation time of document.
        */
       createdAt?: CreatedAt;
       /**
        * Value contains modification time of document.
        */
       modifiedAt?: ModifiedAt;
       version?: number;
       /**
        * URI to schema specified for document
        */
       schema?: string;
       /**
        * Mixins object. Keys in mixins can be constructed only from numbers, letters, hyphens and underscores.
        */
       mixins?: {
         mixinsRoot?: string;
       };
       [k: string]: any;
     };
     /**
      * Value contains object ID.
      */
     id?: Id;
     [k: string]: any;
   }[];
}


//========================================================================
// Schema 'indexInput'
//========================================================================
export namespace IndexInput {
   /**
    * input to create index
    */
   export interface IndexInput {
     keys: {
       [k: string]: number;
     };
     options?: {
       name?: string;
       unique?: boolean;
       sparse?: boolean;
       [k: string]: any;
     };
   }
}


//========================================================================
// Schema 'indexOutput'
//========================================================================
export namespace IndexOutput {
   /**
    * index definition
    */
   export interface IndexOutput {
     key: {
       [k: string]: number;
     };
     name: string;
     unique?: boolean;
     sparse?: boolean;
     [k: string]: any;
   }
}


//========================================================================
// Schema 'indexesOutput'
//========================================================================
export namespace IndexesOutput {
   export type IndexesOutput = {
     key: {
       [k: string]: number;
     };
     name: string;
     unique?: boolean;
     sparse?: boolean;
     [k: string]: any;
   }[];
}


//========================================================================
// Actions
//========================================================================


var TEMPLATE_REGEXP = /{([^{}]+)}/g

function template(string, interpolate) {
  return string.replace(TEMPLATE_REGEXP, function (match, key) {
    if (interpolate[key] != null) {
      return encodeURIComponent(interpolate[key])
    }

    return ''
  })
}  

 export class YaasApiDocumentV1 {
  _client: any;
  _path: string;
  _options: any;
  _form: any;
  _version: any;
  _Security: any;

  // RAML resources without parameters

  all:Resources.All;

  constructor(options?:any) {
    this._path = ''
    this._options = extend({
      baseUri: 'https://api.eu.yaas.io/hybris/document/v1',
      baseUriParameters: {}
    }, options)
  
    //function client (method, path, options) {
    //  return this.request(client, method, path, options)
    //}
    
    // Initialize RAML resourcs without parameters

  this.all = new Resources.All(this, '/all')
    this._client=this;
    this._form = popsicle.form
    this._version = 'v0.1'
    this._Security = {

    }
  // RAML resources with parameters
  

}

 request (client, method, path, opts) {
  var options = extend({}, client._options, opts)
  var baseUri = template(options.baseUri, options.baseUriParameters)

  var reqOpts = {
    url: baseUri.replace(/\/$/, '') + template(path, options.uriParameters),
    method: method,
    headers: extend(options.headers, options.getHeaders ? options.getHeaders() : {}),
    body: options.body,
    query: options.query,
    options: options.options
  }

  if (options.user && typeof options.user.sign === 'function') {
    reqOpts = options.user.sign(reqOpts)
  }

  return popsicle.request(reqOpts)
}


// createProtoResources - Resource: Client
tenant(tenant:string) { return new Resources.Tenant(this._client, this._path + template('/{tenant}', extend({}, {tenant:tenant}))) }
}
export module Resources {
  // createResource - All
  export class All { 
    _client: any; _path: string;
    statistics:All.AllStatistics;
    constructor(client, path) {
      this._client = client
      this._path = path
    this.statistics = new All.AllStatistics(this._client, this._path + '/statistics')
    }
    /**
     * GET on All
     */
    GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_304":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         this._client.request(this._client, 'get', this._path, options)
           .use(popsicle.plugins.parse('json'))
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
  }
  export module All { 
    // createResource - AllStatistics
    export class AllStatistics { 
      _client: any; _path: string;
      total:All.AllStatistics.AllStatisticsTotal;
      constructor(client, path) {
        this._client = client
        this._path = path
      this.total = new All.AllStatistics.AllStatisticsTotal(this._client, this._path + '/total')
      }
      /**
       * GET on AllStatistics
       */
      GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
        return Observable.create((observer) => {
           var options = extend({query:{}, headers: {} }, opts)
           this._client.request(this._client, 'get', this._path, options)
             .use(popsicle.plugins.parse('json'))
             .then(response => {
                 var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                 r["_"+response.status]=response.body; 
                 observer.next(r);observer.complete()
          })
        })
      }
    }
    export module AllStatistics { 
      // createResource - AllStatisticsTotal
      export class AllStatisticsTotal { 
        _client: any; _path: string;
        constructor(client, path) {
          this._client = client
          this._path = path
        }
        /**
         * GET on AllStatisticsTotal
         */
        GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
          return Observable.create((observer) => {
             var options = extend({query:{}, headers: {} }, opts)
             this._client.request(this._client, 'get', this._path, options)
               .use(popsicle.plugins.parse('json'))
               .then(response => {
                   var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                   r["_"+response.status]=response.body; 
                   observer.next(r);observer.complete()
            })
          })
        }
      }
      export module AllStatisticsTotal { 
      }
    }
  }
  // createResource - Tenant
  export class Tenant { 
    _client: any; _path: string;
    constructor(client, path) {
      this._client = client
      this._path = path
    }
  // createProtoResources - Resource: Tenant
  client(client:string) { return new Tenant.TenantClient(this._client, this._path + template('/{client}', extend({}, {client:client}))) }
    /**
     * GET on Tenant
     */
    GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_304":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         this._client.request(this._client, 'get', this._path, options)
           .use(popsicle.plugins.parse('json'))
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
    /**
     * HEAD on Tenant
     */
    HEAD(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         this._client.request(this._client, 'head', this._path, options)
           .use(popsicle.plugins.parse('json'))
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
    /**
     * DELETE on Tenant
     */
    DELETE(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
      return Observable.create((observer) => {
         var options = extend({query:{}, headers: {} }, opts)
         this._client.request(this._client, 'delete', this._path, options)
           .use(popsicle.plugins.parse('json'))
           .then(response => {
               var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
               r["_"+response.status]=response.body; 
               observer.next(r);observer.complete()
        })
      })
    }
  }
  export module Tenant { 
    // createResource - TenantClient
    export class TenantClient { 
      _client: any; _path: string;
      data:Tenant.TenantClient.TenantClientData;
      aggr:Tenant.TenantClient.TenantClientAggr;
      indexes:Tenant.TenantClient.TenantClientIndexes;
      tags:Tenant.TenantClient.TenantClientTags;
      constructor(client, path) {
        this._client = client
        this._path = path
      this.data = new Tenant.TenantClient.TenantClientData(this._client, this._path + '/data')
      this.aggr = new Tenant.TenantClient.TenantClientAggr(this._client, this._path + '/aggr')
      this.indexes = new Tenant.TenantClient.TenantClientIndexes(this._client, this._path + '/indexes')
      this.tags = new Tenant.TenantClient.TenantClientTags(this._client, this._path + '/tags')
      }
      /**
       * GET on TenantClient
       */
      GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_304":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
        return Observable.create((observer) => {
           var options = extend({query:{}, headers: {} }, opts)
           this._client.request(this._client, 'get', this._path, options)
             .use(popsicle.plugins.parse('json'))
             .then(response => {
                 var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                 r["_"+response.status]=response.body; 
                 observer.next(r);observer.complete()
          })
        })
      }
      /**
       * HEAD on TenantClient
       */
      HEAD(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
        return Observable.create((observer) => {
           var options = extend({query:{}, headers: {} }, opts)
           this._client.request(this._client, 'head', this._path, options)
             .use(popsicle.plugins.parse('json'))
             .then(response => {
                 var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                 r["_"+response.status]=response.body; 
                 observer.next(r);observer.complete()
          })
        })
      }
      /**
       * DELETE on TenantClient
       */
      DELETE(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
        return Observable.create((observer) => {
           var options = extend({query:{}, headers: {} }, opts)
           this._client.request(this._client, 'delete', this._path, options)
             .use(popsicle.plugins.parse('json'))
             .then(response => {
                 var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                 r["_"+response.status]=response.body; 
                 observer.next(r);observer.complete()
          })
        })
      }
    }
    export module TenantClient { 
      // createResource - TenantClientData
      export class TenantClientData { 
        _client: any; _path: string;
        constructor(client, path) {
          this._client = client
          this._path = path
        }
      // createProtoResources - Resource: TenantClientData
      type(type:string) { return new Tenant.TenantClient.TenantClientData.TenantClientDataType(this._client, this._path + template('/{type}', extend({}, {type:type}))) }
      }
      export module TenantClientData { 
        // createResource - TenantClientDataType
        export class TenantClientDataType { 
          _client: any; _path: string;
          constructor(client, path) {
            this._client = client
            this._path = path
          }
        // createProtoResources - Resource: TenantClientDataType
        dataId(dataId:string) { return new Tenant.TenantClient.TenantClientData.TenantClientDataType.TenantClientDataTypeDataId(this._client, this._path + template('/{dataId}', extend({}, {dataId:dataId}))) }
          /**
           * HEAD on TenantClientDataType
           */
          HEAD(q?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               if (q !== undefined && q !== null) options.query['q']=q;
               this._client.request(this._client, 'head', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * GET on TenantClientDataType
           */
          GET(text?:string, scoreField?:string, language?:string, caseSensitive?:boolean, diacriticSensitive?:boolean, fetchAll?:boolean, fields?:string, totalCount?:boolean, pageNumber?:number, pageSize?:number, sort?:string, q?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_304":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_408":any}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               if (text !== undefined && text !== null) options.query['text']=text;
               if (scoreField !== undefined && scoreField !== null) options.query['scoreField']=scoreField;
               if (language !== undefined && language !== null) options.query['language']=language;
               if (caseSensitive !== undefined && caseSensitive !== null) options.query['caseSensitive']=caseSensitive;
               if (diacriticSensitive !== undefined && diacriticSensitive !== null) options.query['diacriticSensitive']=diacriticSensitive;
               if (fetchAll !== undefined && fetchAll !== null) options.query['fetchAll']=fetchAll;
               if (fields !== undefined && fields !== null) options.query['fields']=fields;
               if (totalCount !== undefined && totalCount !== null) options.query['totalCount']=totalCount;
               if (pageNumber !== undefined && pageNumber < 1) { observer.error('Parameter \'pageNumber\' outside specified range!'); return;}
               if (pageNumber !== undefined && pageNumber !== null) options.query['pageNumber']=pageNumber;
               if (pageSize !== undefined && pageSize < 1) { observer.error('Parameter \'pageSize\' outside specified range!'); return;}
               if (pageSize !== undefined && pageSize !== null) options.query['pageSize']=pageSize;
               if (sort !== undefined && sort !== null) options.query['sort']=sort;
               if (q !== undefined && q !== null) options.query['q']=q;
               this._client.request(this._client, 'get', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * POST on TenantClientDataType
           */
          POST(body:any /* Implicitly defined schemas not yet supported */, rawwrite?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_201":any  /* Implicitly defined schemas not yet supported */,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               if (rawwrite !== undefined && rawwrite !== null) options.query['rawwrite']=rawwrite;
               options.body=body;
               this._client.request(this._client, 'post', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * DELETE on TenantClientDataType
           */
          DELETE(q?:string, drop?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               if (q !== undefined && q !== null) options.query['q']=q;
               if (drop !== undefined && drop !== null) options.query['drop']=drop;
               this._client.request(this._client, 'delete', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * PUT on TenantClientDataType
           */
          PUT(body:any /* Implicitly defined schemas not yet supported */, q?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               if (q !== undefined && q !== null) options.query['q']=q;
               options.body=body;
               this._client.request(this._client, 'put', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
        }
        export module TenantClientDataType { 
          // createResource - TenantClientDataTypeDataId
          export class TenantClientDataTypeDataId { 
            _client: any; _path: string;
            constructor(client, path) {
              this._client = client
              this._path = path
            }
          // createProtoResources - Resource: TenantClientDataTypeDataId
          attributeName(attributeName:string) { return new Tenant.TenantClient.TenantClientData.TenantClientDataType.TenantClientDataTypeDataId.TenantClientDataTypeDataIdAttributeName(this._client, this._path + template('/{attributeName}', extend({}, {attributeName:attributeName}))) }
            /**
             * GET on TenantClientDataTypeDataId
             */
            GET(fields?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_304":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 if (fields !== undefined && fields !== null) options.query['fields']=fields;
                 this._client.request(this._client, 'get', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
            /**
             * HEAD on TenantClientDataTypeDataId
             */
            HEAD(fields?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 if (fields !== undefined && fields !== null) options.query['fields']=fields;
                 this._client.request(this._client, 'head', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
            /**
             * POST on TenantClientDataTypeDataId
             */
            POST(body:any /* Implicitly defined schemas not yet supported */, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_201":any  /* Implicitly defined schemas not yet supported */,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 options.body=body;
                 this._client.request(this._client, 'post', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
            /**
             * PUT on TenantClientDataTypeDataId
             */
            PUT(body:any /* Implicitly defined schemas not yet supported */, upsert?:boolean, patch?:boolean, partial?:boolean, version?:number, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_201":any  /* Implicitly defined schemas not yet supported */,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 if (upsert !== undefined && upsert !== null) options.query['upsert']=upsert;
                 if (patch !== undefined && patch !== null) options.query['patch']=patch;
                 if (partial !== undefined && partial !== null) options.query['partial']=partial;
                 if (version !== undefined && version !== null) options.query['version']=version;
                 options.body=body;
                 this._client.request(this._client, 'put', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
            /**
             * DELETE on TenantClientDataTypeDataId
             */
            DELETE(version?:number, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 if (version !== undefined && version !== null) options.query['version']=version;
                 this._client.request(this._client, 'delete', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
          }
          export module TenantClientDataTypeDataId { 
            // createResource - TenantClientDataTypeDataIdAttributeName
            export class TenantClientDataTypeDataIdAttributeName { 
              _client: any; _path: string;
              constructor(client, path) {
                this._client = client
                this._path = path
              }
            // createProtoResources - Resource: TenantClientDataTypeDataIdAttributeName
            index(index:string) { return new Tenant.TenantClient.TenantClientData.TenantClientDataType.TenantClientDataTypeDataId.TenantClientDataTypeDataIdAttributeName.TenantClientDataTypeDataIdAttributeNameIndex(this._client, this._path + template('/{index}', extend({}, {index:index}))) }
              /**
               * POST on TenantClientDataTypeDataIdAttributeName
               */
              POST(body:any, version?:number, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
                return Observable.create((observer) => {
                   var options = extend({query:{}, headers: {} }, opts)
                   if (version !== undefined && version !== null) options.query['version']=version;
                   options.body=body;
                   this._client.request(this._client, 'post', this._path, options)
                     .use(popsicle.plugins.parse('json'))
                     .then(response => {
                         var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                         r["_"+response.status]=response.body; 
                         observer.next(r);observer.complete()
                  })
                })
              }
              /**
               * DELETE on TenantClientDataTypeDataIdAttributeName
               */
              DELETE(version?:number, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
                return Observable.create((observer) => {
                   var options = extend({query:{}, headers: {} }, opts)
                   if (version !== undefined && version !== null) options.query['version']=version;
                   this._client.request(this._client, 'delete', this._path, options)
                     .use(popsicle.plugins.parse('json'))
                     .then(response => {
                         var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                         r["_"+response.status]=response.body; 
                         observer.next(r);observer.complete()
                  })
                })
              }
            }
            export module TenantClientDataTypeDataIdAttributeName { 
              // createResource - TenantClientDataTypeDataIdAttributeNameIndex
              export class TenantClientDataTypeDataIdAttributeNameIndex { 
                _client: any; _path: string;
                constructor(client, path) {
                  this._client = client
                  this._path = path
                }
                /**
                 * GET on TenantClientDataTypeDataIdAttributeNameIndex
                 */
                GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_304":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
                  return Observable.create((observer) => {
                     var options = extend({query:{}, headers: {} }, opts)
                     this._client.request(this._client, 'get', this._path, options)
                       .use(popsicle.plugins.parse('json'))
                       .then(response => {
                           var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                           r["_"+response.status]=response.body; 
                           observer.next(r);observer.complete()
                    })
                  })
                }
                /**
                 * HEAD on TenantClientDataTypeDataIdAttributeNameIndex
                 */
                HEAD(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
                  return Observable.create((observer) => {
                     var options = extend({query:{}, headers: {} }, opts)
                     this._client.request(this._client, 'head', this._path, options)
                       .use(popsicle.plugins.parse('json'))
                       .then(response => {
                           var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                           r["_"+response.status]=response.body; 
                           observer.next(r);observer.complete()
                    })
                  })
                }
                /**
                 * PUT on TenantClientDataTypeDataIdAttributeNameIndex
                 */
                PUT(body:any, compact?:boolean, version?:number, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
                  return Observable.create((observer) => {
                     var options = extend({query:{}, headers: {} }, opts)
                     if (compact !== undefined && compact !== null) options.query['compact']=compact;
                     if (version !== undefined && version !== null) options.query['version']=version;
                     options.body=body;
                     this._client.request(this._client, 'put', this._path, options)
                       .use(popsicle.plugins.parse('json'))
                       .then(response => {
                           var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                           r["_"+response.status]=response.body; 
                           observer.next(r);observer.complete()
                    })
                  })
                }
                /**
                 * DELETE on TenantClientDataTypeDataIdAttributeNameIndex
                 */
                DELETE(compact?:boolean, version?:number, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
                  return Observable.create((observer) => {
                     var options = extend({query:{}, headers: {} }, opts)
                     if (compact !== undefined && compact !== null) options.query['compact']=compact;
                     if (version !== undefined && version !== null) options.query['version']=version;
                     this._client.request(this._client, 'delete', this._path, options)
                       .use(popsicle.plugins.parse('json'))
                       .then(response => {
                           var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                           r["_"+response.status]=response.body; 
                           observer.next(r);observer.complete()
                    })
                  })
                }
              }
              export module TenantClientDataTypeDataIdAttributeNameIndex { 
              }
            }
          }
        }
      }
      // createResource - TenantClientAggr
      export class TenantClientAggr { 
        _client: any; _path: string;
        constructor(client, path) {
          this._client = client
          this._path = path
        }
      // createProtoResources - Resource: TenantClientAggr
      type(type:string) { return new Tenant.TenantClient.TenantClientAggr.TenantClientAggrType(this._client, this._path + template('/{type}', extend({}, {type:type}))) }
      }
      export module TenantClientAggr { 
        // createResource - TenantClientAggrType
        export class TenantClientAggrType { 
          _client: any; _path: string;
          constructor(client, path) {
            this._client = client
            this._path = path
          }
          /**
           * HEAD on TenantClientAggrType
           */
          HEAD(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               this._client.request(this._client, 'head', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * GET on TenantClientAggrType
           */
          GET(sum?:string, avg?:string, count?:boolean, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_304":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               if (sum !== undefined && sum !== null) options.query['sum']=sum;
               if (avg !== undefined && avg !== null) options.query['avg']=avg;
               if (count !== undefined && count !== null) options.query['count']=count;
               this._client.request(this._client, 'get', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
        }
        export module TenantClientAggrType { 
        }
      }
      // createResource - TenantClientIndexes
      export class TenantClientIndexes { 
        _client: any; _path: string;
        constructor(client, path) {
          this._client = client
          this._path = path
        }
      // createProtoResources - Resource: TenantClientIndexes
      type(type:string) { return new Tenant.TenantClient.TenantClientIndexes.TenantClientIndexesType(this._client, this._path + template('/{type}', extend({}, {type:type}))) }
      }
      export module TenantClientIndexes { 
        // createResource - TenantClientIndexesType
        export class TenantClientIndexesType { 
          _client: any; _path: string;
          constructor(client, path) {
            this._client = client
            this._path = path
          }
        // createProtoResources - Resource: TenantClientIndexesType
        name(name:string) { return new Tenant.TenantClient.TenantClientIndexes.TenantClientIndexesType.TenantClientIndexesTypeName(this._client, this._path + template('/{name}', extend({}, {name:name}))) }
          /**
           * GET on TenantClientIndexesType
           */
          GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_304":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               this._client.request(this._client, 'get', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * HEAD on TenantClientIndexesType
           */
          HEAD(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               this._client.request(this._client, 'head', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * POST on TenantClientIndexesType
           */
          POST(body:any /* Implicitly defined schemas not yet supported */, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_201":any  /* Implicitly defined schemas not yet supported */,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               options.body=body;
               this._client.request(this._client, 'post', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * DELETE on TenantClientIndexesType
           */
          DELETE(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               this._client.request(this._client, 'delete', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
        }
        export module TenantClientIndexesType { 
          // createResource - TenantClientIndexesTypeName
          export class TenantClientIndexesTypeName { 
            _client: any; _path: string;
            constructor(client, path) {
              this._client = client
              this._path = path
            }
            /**
             * GET on TenantClientIndexesTypeName
             */
            GET(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any  /* Implicitly defined schemas not yet supported */,"_304":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 this._client.request(this._client, 'get', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
            /**
             * HEAD on TenantClientIndexesTypeName
             */
            HEAD(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_304":any,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 this._client.request(this._client, 'head', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
            /**
             * DELETE on TenantClientIndexesTypeName
             */
            DELETE(opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
              return Observable.create((observer) => {
                 var options = extend({query:{}, headers: {} }, opts)
                 this._client.request(this._client, 'delete', this._path, options)
                   .use(popsicle.plugins.parse('json'))
                   .then(response => {
                       var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                       r["_"+response.status]=response.body; 
                       observer.next(r);observer.complete()
                })
              })
            }
          }
          export module TenantClientIndexesTypeName { 
          }
        }
      }
      // createResource - TenantClientTags
      export class TenantClientTags { 
        _client: any; _path: string;
        constructor(client, path) {
          this._client = client
          this._path = path
        }
      // createProtoResources - Resource: TenantClientTags
      type(type:string) { return new Tenant.TenantClient.TenantClientTags.TenantClientTagsType(this._client, this._path + template('/{type}', extend({}, {type:type}))) }
      }
      export module TenantClientTags { 
        // createResource - TenantClientTagsType
        export class TenantClientTagsType { 
          _client: any; _path: string;
          constructor(client, path) {
            this._client = client
            this._path = path
          }
        // createProtoResources - Resource: TenantClientTagsType
        id(id:string) { return new Tenant.TenantClient.TenantClientTags.TenantClientTagsType.TenantClientTagsTypeId(this._client, this._path + template('/{id}', extend({}, {id:id}))) }
          /**
           * POST on TenantClientTagsType
           */
          POST(tags:string, q?:string, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               if (q !== undefined && q !== null) options.query['q']=q;
               if (tags !== undefined && tags !== null) options.query['tags']=tags;
               this._client.request(this._client, 'post', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
          /**
           * DELETE on TenantClientTagsType
           */
          DELETE(tags:string, q?:string, removeEmpty?:boolean, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */}> {
            return Observable.create((observer) => {
               var options = extend({query:{}, headers: {} }, opts)
               if (q !== undefined && q !== null) options.query['q']=q;
               if (tags !== undefined && tags !== null) options.query['tags']=tags;
               if (removeEmpty !== undefined && removeEmpty !== null) options.query['removeEmpty']=removeEmpty;
               this._client.request(this._client, 'delete', this._path, options)
                 .use(popsicle.plugins.parse('json'))
                 .then(response => {
                     var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                     r["_"+response.status]=response.body; 
                     observer.next(r);observer.complete()
              })
            })
          }
        }
        export module TenantClientTagsType { 
          // createResource - TenantClientTagsTypeId
          export class TenantClientTagsTypeId { 
            _client: any; _path: string;
            constructor(client, path) {
              this._client = client
              this._path = path
            }
          // createProtoResources - Resource: TenantClientTagsTypeId
          tagName(tagName:string) { return new Tenant.TenantClient.TenantClientTags.TenantClientTagsType.TenantClientTagsTypeId.TenantClientTagsTypeIdTagName(this._client, this._path + template('/{tagName}', extend({}, {tagName:tagName}))) }
          }
          export module TenantClientTagsTypeId { 
            // createResource - TenantClientTagsTypeIdTagName
            export class TenantClientTagsTypeIdTagName { 
              _client: any; _path: string;
              constructor(client, path) {
                this._client = client
                this._path = path
              }
              /**
               * POST on TenantClientTagsTypeIdTagName
               */
              POST(tags:string, version?:number, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_200":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
                return Observable.create((observer) => {
                   var options = extend({query:{}, headers: {} }, opts)
                   if (version !== undefined && version !== null) options.query['version']=version;
                   if (tags !== undefined && tags !== null) options.query['tags']=tags;
                   this._client.request(this._client, 'post', this._path, options)
                     .use(popsicle.plugins.parse('json'))
                     .then(response => {
                         var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                         r["_"+response.status]=response.body; 
                         observer.next(r);observer.complete()
                  })
                })
              }
              /**
               * DELETE on TenantClientTagsTypeIdTagName
               */
              DELETE(tags:string, version?:number, removeEmpty?:boolean, opts?:any):Observable<{headers:any,responseCode:number, bodyRaw:any,"_204":any,"_400":any  /* Implicitly defined schemas not yet supported */,"_401":any  /* Implicitly defined schemas not yet supported */,"_403":any  /* Implicitly defined schemas not yet supported */,"_404":any  /* Implicitly defined schemas not yet supported */,"_409":any  /* Implicitly defined schemas not yet supported */}> {
                return Observable.create((observer) => {
                   var options = extend({query:{}, headers: {} }, opts)
                   if (version !== undefined && version !== null) options.query['version']=version;
                   if (tags !== undefined && tags !== null) options.query['tags']=tags;
                   if (removeEmpty !== undefined && removeEmpty !== null) options.query['removeEmpty']=removeEmpty;
                   this._client.request(this._client, 'delete', this._path, options)
                     .use(popsicle.plugins.parse('json'))
                     .then(response => {
                         var r={headers:response.headers,responseCode:response.status,bodyRaw:response.body};
                         r["_"+response.status]=response.body; 
                         observer.next(r);observer.complete()
                  })
                })
              }
            }
            export module TenantClientTagsTypeIdTagName { 
            }
          }
        }
      }
    }
  }
}
