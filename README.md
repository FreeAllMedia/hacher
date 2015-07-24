# Hacher.js [![npm version](https://img.shields.io/npm/v/hacher.svg)](https://www.npmjs.com/package/hacher) [![license type](https://img.shields.io/npm/l/hacher.svg)](https://github.com/FreeAllMedia/hacher.git/blob/master/LICENSE) [![npm downloads](https://img.shields.io/npm/dm/hacher.svg)](https://www.npmjs.com/package/hacher) ![ECMAScript 6 & 5](https://img.shields.io/badge/ECMAScript-6%20/%205-red.svg)

Quality-controlled cryptographic library for ES6 and ES5.

```javascript
import Hacher from "hacher";

Hacher.getUUID();//returns some uuid according to the RFC
Hacher.hash("somestringvalue");//generates a hash using the sha1 algorithm
```

# Quality and Compatibility

[![Build Status](https://travis-ci.org/FreeAllMedia/hacher.png?branch=master)](https://travis-ci.org/FreeAllMedia/hacher) [![Coverage Status](https://coveralls.io/repos/FreeAllMedia/hacher/badge.svg)](https://coveralls.io/r/FreeAllMedia/hacher) [![bitHound Score](https://www.bithound.io/github/FreeAllMedia/hacher/badges/score.svg)](https://www.bithound.io/github/FreeAllMedia/hacher)  [![Dependency Status](https://david-dm.org/FreeAllMedia/hacher.png?theme=shields.io)](https://david-dm.org/FreeAllMedia/hacher?theme=shields.io) [![Dev Dependency Status](https://david-dm.org/FreeAllMedia/hacher/dev-status.svg)](https://david-dm.org/FreeAllMedia/hacher?theme=shields.io#info=devDependencies)

*Every build and release is automatically tested on the following platforms:*

![node 0.12.x](https://img.shields.io/badge/node-0.12.x-brightgreen.svg) ![node 0.11.x](https://img.shields.io/badge/node-0.11.x-brightgreen.svg) ![node 0.10.x](https://img.shields.io/badge/node-0.10.x-brightgreen.svg)
![iojs 2.x.x](https://img.shields.io/badge/iojs-2.x.x-brightgreen.svg) ![iojs 1.x.x](https://img.shields.io/badge/iojs-1.x.x-brightgreen.svg)


[![Sauce Test Status](https://saucelabs.com/browser-matrix/hacher.svg)](https://saucelabs.com/u/hacher)


*If your platform is not listed above, you can test your local environment for compatibility by copying and pasting the following commands into your terminal:*

```
npm install hacher
cd node_modules/hacher
gulp test-local
```

# Installation

Copy and paste the following command into your terminal to install Hacher:

```
npm install hacher --save
```

## Import / Require

```
// ES6
import hacher from "hacher";
```

```
// ES5
var hacher = require("hacher");
```

```
// Require.js
define(["require"] , function (require) {
    var hacher = require("hacher");
});
```

# Getting Started
Hacher provides a set of static methods under the main class useful for crypto-related use cases.

## getUUID()
Returns a UUID according to the RFC.

## hash()
Receives the string to hash and returns a hash using the sha1 algorithm.

# How to Contribute

See something that could use improvement? Have a great feature idea? We listen!

You can submit your ideas through our [issues system](https://github.com/FreeAllMedia/hacher/issues), or make the modifications yourself and submit them to us in the form of a [GitHub pull request](https://help.github.com/articles/using-pull-requests/).

We always aim to be friendly and helpful.

## Running Tests

It's easy to run the test suite locally, and *highly recommended* if you're using Hacher.js on a platform we aren't automatically testing for.

```
npm test
```
