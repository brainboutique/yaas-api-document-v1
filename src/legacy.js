var popsicle = require('popsicle')
var extend = require('deep-extend')
var setprototypeof = require('setprototypeof')

var TEMPLATE_REGEXP = /\{([^\{\}]+)\}/g

module.exports = Client

function template (string, interpolate) {
  return string.replace(TEMPLATE_REGEXP, function (match, key) {
    if (interpolate[key] != null) {
      return encodeURIComponent(interpolate[key])
    }

    return ''
  })
}

function request (client, method, path, opts) {
  var options = extend({}, client._options, opts)
  var baseUri = template(options.baseUri, options.baseUriParameters)

  var reqOpts = {
    url: baseUri.replace(/\/$/, '') + template(path, options.uriParameters),
    method: method,
    headers: options.headers,
    body: options.body,
    query: options.query,
    options: options.options
  }

  if (options.user && typeof options.user.sign === 'function') {
    reqOpts = options.user.sign(reqOpts)
  }

  return popsicle.request(reqOpts)
}

function Client (options) {
  this._path = ''
  this._options = extend({
    baseUri: 'https://api.eu.yaas.io/hybris/document/v1',
    baseUriParameters: {}
  }, options)

  function client (method, path, options) {
    return request(client, method, path, options)
  }

// ### ctr 1
// ### createProtoResources
  this.all = new All(client, '/all')
  this._client=client;
  setprototypeof(client, this)
  return client
}

Client.form = popsicle.form
Client.version = 'v0.1'
Client.Security = {
}
Client.prototype.tenant = function (uriParams) { return new Tenant(this._client, this._path + template('/{tenant}', extend({}, uriParams))) }
function All (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.statistics = new AllStatistics(this._client, this._path + '/statistics')
}
All.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function AllStatistics (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.total = new AllStatisticsTotal(this._client, this._path + '/total')
}
AllStatistics.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function AllStatisticsTotal (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
AllStatisticsTotal.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function Tenant (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
Tenant.prototype.client = function (uriParams) { return new TenantClient(this._client, this._path + template('/{client}', extend({}, uriParams))) }
Tenant.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
Tenant.prototype.head = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'head', this._path, options)
}
Tenant.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantClient (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
// ### createProtoResources
  this.data = new TenantClientData(this._client, this._path + '/data')
// ### createProtoResources
  this.aggr = new TenantClientAggr(this._client, this._path + '/aggr')
// ### createProtoResources
  this.indexes = new TenantClientIndexes(this._client, this._path + '/indexes')
// ### createProtoResources
  this.tags = new TenantClientTags(this._client, this._path + '/tags')
}
TenantClient.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantClient.prototype.head = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'head', this._path, options)
}
TenantClient.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantClientData (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientData.prototype.type = function (uriParams) { return new TenantClientDataType(this._client, this._path + template('/{type}', extend({}, uriParams))) }
function TenantClientDataType (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientDataType.prototype.dataId = function (uriParams) { return new TenantClientDataTypeDataId(this._client, this._path + template('/{dataId}', extend({}, uriParams))) }
TenantClientDataType.prototype.head = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'head', this._path, options)
}
TenantClientDataType.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantClientDataType.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantClientDataType.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
TenantClientDataType.prototype.put = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'put', this._path, options)
}
function TenantClientDataTypeDataId (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientDataTypeDataId.prototype.attributeName = function (uriParams) { return new TenantClientDataTypeDataIdAttributeName(this._client, this._path + template('/{attributeName}', extend({}, uriParams))) }
TenantClientDataTypeDataId.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantClientDataTypeDataId.prototype.head = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'head', this._path, options)
}
TenantClientDataTypeDataId.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantClientDataTypeDataId.prototype.put = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'put', this._path, options)
}
TenantClientDataTypeDataId.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantClientDataTypeDataIdAttributeName (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientDataTypeDataIdAttributeName.prototype.index = function (uriParams) { return new TenantClientDataTypeDataIdAttributeNameIndex(this._client, this._path + template('/{index}', extend({}, uriParams))) }
TenantClientDataTypeDataIdAttributeName.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantClientDataTypeDataIdAttributeName.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantClientDataTypeDataIdAttributeNameIndex (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientDataTypeDataIdAttributeNameIndex.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantClientDataTypeDataIdAttributeNameIndex.prototype.head = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'head', this._path, options)
}
TenantClientDataTypeDataIdAttributeNameIndex.prototype.put = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'put', this._path, options)
}
TenantClientDataTypeDataIdAttributeNameIndex.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantClientAggr (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientAggr.prototype.type = function (uriParams) { return new TenantClientAggrType(this._client, this._path + template('/{type}', extend({}, uriParams))) }
function TenantClientAggrType (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientAggrType.prototype.head = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'head', this._path, options)
}
TenantClientAggrType.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
function TenantClientIndexes (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientIndexes.prototype.type = function (uriParams) { return new TenantClientIndexesType(this._client, this._path + template('/{type}', extend({}, uriParams))) }
function TenantClientIndexesType (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientIndexesType.prototype.name = function (uriParams) { return new TenantClientIndexesTypeName(this._client, this._path + template('/{name}', extend({}, uriParams))) }
TenantClientIndexesType.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantClientIndexesType.prototype.head = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'head', this._path, options)
}
TenantClientIndexesType.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantClientIndexesType.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantClientIndexesTypeName (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientIndexesTypeName.prototype.get = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'get', this._path, options)
}
TenantClientIndexesTypeName.prototype.head = function (query, opts) {
  var options = extend({ query: query, headers: {} }, opts)
  return request(this._client, 'head', this._path, options)
}
TenantClientIndexesTypeName.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantClientTags (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientTags.prototype.type = function (uriParams) { return new TenantClientTagsType(this._client, this._path + template('/{type}', extend({}, uriParams))) }
function TenantClientTagsType (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientTagsType.prototype.id = function (uriParams) { return new TenantClientTagsTypeId(this._client, this._path + template('/{id}', extend({}, uriParams))) }
TenantClientTagsType.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantClientTagsType.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
function TenantClientTagsTypeId (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientTagsTypeId.prototype.tagName = function (uriParams) { return new TenantClientTagsTypeIdTagName(this._client, this._path + template('/{tagName}', extend({}, uriParams))) }
function TenantClientTagsTypeIdTagName (client, path) {
  this._client = client
  this._path = path
// ### ctr 2
}
TenantClientTagsTypeIdTagName.prototype.post = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'post', this._path, options)
}
TenantClientTagsTypeIdTagName.prototype.delete = function (body, opts) {
  var options = extend({ body: body, headers: {} }, opts)
  return request(this._client, 'delete', this._path, options)
}
