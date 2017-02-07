/*
 * Copyright (c) 2017, Fredrik Holmén <fredrik@feedeo.io>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const chai = require('chai')
chai.use(require('chai-as-promised'))
chai.config.includeStack = true

const td = require('testdouble')
td.config({
  ignoreWarnings: true
})

global.should = chai.should()
global.td = td

