src
===

Simple Redis Cache

###Usage

src takes one hash parameter with url and expiry defined. Expiry is the
number of seconds a value is non expired in Redis.

```javascript
var src = require('src');
var cache = src(
  {
    url:'redis://redistogo:fe439e7881422559889d6be3838c6418@spadefish.redistogo.com:9073/'
    ,expiry:2
  }
);
```
Callbacks for set are optional
```javascript
cache.set('key', 'value', [cb]);
```
get requires a callback
```
cache.get('key', function(err, value){
  if(typeof value !== 'undefined')
    console.log(value);
});
```
If the key has expired, err will not be used to determine this. Err will
only be a non null value when an error is thrown from Redis.
