# YaasApiDocumentV1

> TypeScript abstraction library for RAML-based REST API [YaasApiDocumentV1](https://api.eu.yaas.io/hybris/document/v1).

Auto-generated using [raml-typescript-generator](https://github.com/brainboutique/raml-typescript-generator). 

## Installation

```sh
npm install yaas-api-document-v1 --save
```

## Usage

### TypeScript
```ts
import {YaasApiDocumentV1} from 'yaas-api-document-v1';
...
constructor(..) {
  this.yaasApiDocumentV1 = new YaasApiDocumentV1({});
}
```

To support multiple versions of the API, it is recommended to alias the import so it can easily be mapped to a later API version - and, due to the nature of Typescript, 
you should be alerted on API signature changes already at compile time:

 ```ts
import {YaasApiDocumentV1 as YaasApiDocument} from 'yaas-api-document-v1';
 ```


### JS (Legacy)
API skeleton as it would be produced by MuleSoft's [raml-javascript-generator](https://github.com/mulesoft-labs/raml-javascript-generator) JS generator is shipped for reference and to ease migrations:
```js
var YaasApiDocumentV1 = require('yaas-api-document-v1/leagcy.js')

var client = new YaasApiDocumentV1()
```

### Options

You can set options when you initialize a client or at any time with the `options` property. You may also override options per request by passing an object as the last argument of request methods. For example:

```javascript
client = new YaasApiDocumentV1({ ... })

client('GET', '/', {
  baseUri: 'https://api.eu.yaas.io/hybris/document/anotherVersion',
  headers: {
    'Content-Type': 'application/json'
  }
})
```

For dynamic header injection - for example required for non-standard REST services asking for custom authentication token - a provider may be defined:

```javascript
client = new YaasApiDocumentV1({
  getHeaders: ()=>{ return(this.myToken ? {Authorization: "Bearer " + this.myToken} : {}) }
});
```

#### Base URI
By default, endpoint as defined in RAML file `https://api.eu.yaas.io/hybris/document/v1` is used.

**Note** If supported by API provider, it is recommended to use one API version definition (i.e. RAML file and corresponding API TypeScript library) and switch endpoint based on the desired environment, for example `test`, `qa` or `prod`

You can override the base URI by setting the `baseUri` property, or initializing a client with a base URI. For example:

```javascript
new YaasApiDocumentV1({
  baseUri: 'https://api.eu.yaas.io/hybris/document/anotherVersion',
});
```


### Methods

All methods return an Observable wrapping a [Popsicle](https://github.com/blakeembrey/popsicle) obtained response:

#### `all.get([query, [options]])`

Returns a list of all tenants for a given client.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.all.get([query, [options]]).then(...)
```
  
#### `all.statistics.get([query, [options]])`

Returns a list of all tenants for a given client **with usage statistics**.
 <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.all.statistics.get([query, [options]]).then(...)
```
  
#### `all.statistics.total.get([query, [options]])`

Returns a document with detailed usage statistics for a given client.
  <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.all.statistics.total.get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)

Deprecated because of security vulnerability.

```js
client.tenant({ tenant }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).head([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)

Deprecated because of security vulnerability.

```js
client.tenant({ tenant }).head([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)

Deprecated because of security vulnerability.

```js
client.tenant({ tenant }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)

Returns an internal representation of an application. Contains a list of existing types for this client and tenant.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for
<b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).head([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)

Returns the same result as GET method but without body. <br/> <br/> **Security / Access Control:** <br/>To
access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b>
scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).head([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)

Deletes data and indexes for the specified tenant and client.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token issued for
<b>client-owner</b> must have <b>hybris.document_admin</b> and <b>hybris.document_manage</b> scopes, or access
token issued for tenant must have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).head([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Returns the number of objects of this type.
The 'q' query parameter enables you to count only objects fulfilling the criteria. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).head([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Returns all objects of this type which satisfy the criteria from the 'q' query parameter.  If the 'q' query parameter is omitted, then the response contains all objects of this type.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).post([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Creates a new object of this type.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Deletes data for the specified type.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).put([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Bulk update of data which will be matched by a given query. All elements that match the query will be updated by data sent in payload.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).put([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)

Returns objects by objectId of this type.  If the request does not contain the hybris-metaData header parameter with information about the attribute's localization or type conversions, then the response contains raw data. Cannot contain the following characters: /\\ \"*<>|?
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).head([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)

Returns the same result as GET method but without body. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).head([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).post([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)

Creates a new object of this type with a given objectId.  If the request does not contain a hybris-metaData header parameter containing information about the attribute's localization, then the data is stored as raw data.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).put([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)

Updates the object for objectId and type. If you want to update partially, use **patch** query parameter instead of **partial**, because it is deprecated.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).put([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)

Deletes objects for objectId and type.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).post([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)
* **attributeName** (type: `string`)

Creates an element in the array. The attribute identified by name must be an array. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for<b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)
* **attributeName** (type: `string`)

Removes the given attribute from the document.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).index({ index }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)
* **attributeName** (type: `string`)
* **index** The index of the array element. (type: `number`)

Gets the element at this index from the array.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).index({ index }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).index({ index }).head([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)
* **attributeName** (type: `string`)
* **index** The index of the array element. (type: `number`)

Returns the same result as GET method but without body. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).index({ index }).head([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).index({ index }).put([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)
* **attributeName** (type: `string`)
* **index** The index of the array element. (type: `number`)

Updates the element at this index in the array.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).index({ index }).put([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).index({ index }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **dataId** (type: `string`)
* **attributeName** (type: `string`)
* **index** The index of the array element. (type: `number`)

Deletes the element at this index from the array.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).data.type({ type }).dataId({ dataId }).attributeName({ attributeName }).index({ index }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).aggr.type({ type }).head([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Returns the count of objects of this type. Additionally, objects can be filtered by a query. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).aggr.type({ type }).head([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).aggr.type({ type }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Returns the result of aggregations for objects of this type. At least one of sum or avg query parameters is required.
Additionally, the q parameter can be used to restrict the number of input objects.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).aggr.type({ type }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).indexes.type({ type }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Returns all indexes created for a collection. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).indexes.type({ type }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).indexes.type({ type }).head([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Returns the same result as GET method but without body. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).indexes.type({ type }).head([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).indexes.type({ type }).post([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Creates a new index. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).indexes.type({ type }).post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).indexes.type({ type }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Deletes all indexes for this type. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).indexes.type({ type }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).indexes.type({ type }).name({ name }).get([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **name** (type: `string`)

Returns the index identified by the given name. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).indexes.type({ type }).name({ name }).get([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).indexes.type({ type }).name({ name }).head([query, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **name** (type: `string`)

Returns the same result as GET method but without body. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_view</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).indexes.type({ type }).name({ name }).head([query, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).indexes.type({ type }).name({ name }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **name** (type: `string`)

Deletes an index by the given name. <br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).indexes.type({ type }).name({ name }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).tags.type({ type }).post([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Add a value to the tag for all documents of the given type and supplied restrictions (q param).
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).tags.type({ type }).post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).tags.type({ type }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)

Delete the value from the tag for all documents of the given type and supplied restrictions (q param).
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).tags.type({ type }).delete([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).tags.type({ type }).id({ id }).tagName({ tagName }).post([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **id** (type: `string`)
* **tagName** (type: `string`)

Append several values to an array at once.
Values are added only if they are not already in the array.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).tags.type({ type }).id({ id }).tagName({ tagName }).post([body, [options]]).then(...)
```
  
#### `tenant({ tenant }).client({ client }).tags.type({ type }).id({ id }).tagName({ tagName }).delete([body, [options]])`

* **tenant** The tenant string is the project's Identifier from the Builder. (type: `string`)
* **client** (type: `string`)
* **type** (type: `string`)
* **id** (type: `string`)
* **tagName** (type: `string`)

Removes values from the tags array.
<br/> <br/> **Security / Access Control:** <br/>To access this method, access token must be issued for <b>client</b> and have <b>hybris.document_manage</b> scope to manage this resource.

```js
client.tenant({ tenant }).client({ client }).tags.type({ type }).id({ id }).tagName({ tagName }).delete([body, [options]]).then(...)
```
  
## License

Apache 2.0
