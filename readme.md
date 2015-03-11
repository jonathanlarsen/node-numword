Numword [![Build Status](https://secure.travis-ci.org/jonathanlarsen/node-numword.png)](http://travis-ci.org/jonathanlarsen/node-numword)
=======

Convert numbers to words!

```
$ npm install numword
```


Example
-------

```javascript
var numword = require('numword');

console.log(numword(123456789));
//one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine

console.log(numword('987654321'));
//nine hundred eighty seven million six hundred fifty four thousand three hundred twenty one

```

It also works for very very large numbers, but only when passed as a string!

```javascript
var numword = require('numword');

console.log(numword('123456789012345678901234567890'));
//one hundred twenty three octillion four hundred fifty six septillion seven hundred eighty nine sextillion twelve quintillion three hundred forty five quadrillion six hundred seventy eight trillion nine hundred one billion two hundred thirty four million five hundred sixty seven thousand eight hundred ninety



```
