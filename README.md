# Simple package to extract the root domain from an URL

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/fredrikholmen/rootExtract.js.svg?branch=master)](https://travis-ci.org/fredrikholmen/rootExtract.js)
[![Coverage Status](https://coveralls.io/repos/github/fredrikholmen/rootExtract.js/badge.svg?branch=master)](https://coveralls.io/github/fredrikholmen/rootExtract.js?branch=master)
[![Dependency Status](https://img.shields.io/david/fredrikholmen/rootExtract.js.svg?style=flat)](https://david-dm.org/fredrikholmen/rootExtract.js)
[![devDependencies Status](https://david-dm.org/fredrikholmen/rootExtract.js/dev-status.svg)](https://david-dm.org/fredrikholmen/rootExtract.js?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/fredrikholmen/rootExtract.js.svg)](https://greenkeeper.io/)
[![](https://img.shields.io/github/release/fredrikholmen/rootExtract.js.svg)](https://github.com/fredrikholmen/rootExtract.js/releases)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/npm/v/random-http-useragent.svg)](https://www.npmjs.com/package/random-http-useragent)
[![Downloads](https://img.shields.io/npm/dt/random-http-useragent.svg)](https://www.npmjs.com/package/random-http-useragent) 

rootExtract.js takes a URL string parses it and returns a URL object with a rootDomain field.

### Features
* Supports Mexican and Australian web links :white_check_mark:

### How to install
```
npm install rootextract.js
```

### How to use

#### Use it in your app
```javascript
const rooter = require('rootextract.js')

const url = rooter.parse('http://www.example.co.uk')

//We return the normal URL object with an appended rootDomain field.
console.log(url.rootDomain)

//Prints out 'example.co.uk'
```

