<a
  href="https://travis-ci.org/Xotic750/delay-promise-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/delay-promise-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/delay-promise-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/delay-promise-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/delay-promise-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/delay-promise-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/delay-promise-x"
  title="npm version">
<img src="https://badge.fury.io/js/delay-promise-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/delay-promise-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/delay-promise-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/delay-promise-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/delay-promise-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/delay-promise-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/delay-promise-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="delay-promise-x"></a>

delay-promise-x
===============

Returns a promise that will be resolved with value (or undefined) after given ms milliseconds.
If value is a promise, the delay will start counting down when it is fulfilled and the returned
promise will be fulfilled with the fulfillment value of the value promise.

```
delayPromise(
    int ms,
    [any|Promise<any> value=undefined]
) -> Promise
```

Basic examples
--------------
```
delayPromise(500).then(function() {
    console.log('500 ms passed');
    return delayPromise(500, 'Hello world');
}).then(function(helloWorldString) {
    console.log(helloWorldString);
    console.log('another 500 ms passed') ;
});
``
