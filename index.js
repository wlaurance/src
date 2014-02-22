var redis = require('redis-url');
var uuid = require('uuid');
module.exports = function(config){
  var cache = {};
  var client = redis.connect(config.url);
  var id = uuid.v1();
  cache.client = client;
  cache.set = function(key, value, cb){
    client.set(key, value, function(err){
      client.expire(key, config.expiry, function(err){
        if (typeof cb !== 'undefined')
          cb(err);
      });
    });
  }
  cache.get = function(key, cb){
    client.get(key, cb);
  }
  cache.del = function(key, cb){
    client.del(key, cb);
  }
  cache.id = function() {
    return id;
  }
  return cache;
}
