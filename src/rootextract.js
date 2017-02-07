/*
 * Copyright (c) 2017, Fredrik Holmén <fredrik@feedeo.io>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

const readFileSync = require('fs').readFileSync
const path = require('path')
const url = require('url')

class RootExtract {
  constructor (tlds) {
    this._tlds = tlds
  }

  parse (link) {
    const _url = url.parse(link)

    if (!_url.hostname) {
      return _url
    }

    const hostname = _url.hostname.split('.')

    hostname.reverse() // [ 'my-domain', 'com ] becomes [ 'com', 'my-domain' ]

    if (hostname.length > 2) {
      if (this._tlds[ hostname[ 0 ] ]) {
        if (this._tlds[ hostname[ 0 ] ][ hostname[ 1 ] ]) {
          _url.rootDomain = hostname[ 2 ] + '.' + hostname[ 1 ] + '.' + hostname[ 0 ]

          return _url
        }
      }
    }

    _url.rootDomain = hostname[ 1 ] + '.' + hostname[ 0 ]

    return _url
  }
}

const file = readFileSync(path.join(__dirname, '../share/tlds.json'))
const tlds = JSON.parse(file)

module.exports = new RootExtract(tlds)

