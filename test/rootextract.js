/*
 * Copyright (c) 2017, Fredrik Holmén <fredrik@feedeo.io>.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

 describe('rootExtract', () => {
  let subject

  td.reset()

  afterEach(() => {
    td.reset()

    delete require.cache[ require.resolve('../src/rootextract') ]
  })

  describe('when parsing an undefined reference', () => {
    const link = undefined

    before(() => {
      subject = require('../src/rootextract')
    })

    it('should return TypeError', () => {
      (() => subject.parse(link)).should.throw(TypeError)
    })
  })

  describe('when parsing an invalid web link', () => {
    const link = 'my-invalid-link'

    before(() => {
      subject = require('../src/rootextract')
    })

    it('should return a Node.js Url object with null properties', () => {
      const result = subject.parse(link)

      result.should.have.property('protocol', null)
      result.should.have.property('hostname', null)
      result.should.have.property('port', null)
    })
  })

  describe('when parsing a HTTPS link', () => {
    const domain = 'my-domain.my-tld'
    const link = `https://${domain}`

    before(() => {
      subject = require('../src/rootextract')
    })

    it(`should return the root domain as ${domain}`, () => {
      const result = subject.parse(link)

      result.should.have.deep.property('rootDomain', domain)
    })
  })

  describe('when parsing a FTP link', () => {
    const domain = 'my-domain.my-tld'
    const link = `ftp://${domain}`

    before(() => {
      subject = require('../src/rootextract')
    })

    it(`should return the root domain as ${domain}`, () => {
      const result = subject.parse(link)

      result.should.have.deep.property('rootDomain', domain)
    })
  })

  describe('when parsing a HTTP link with a gTLD', () => {
    const mainDomain = 'my-domain.com'

    describe('without a subdomain', () => {
      const link = `http://${mainDomain}/my-path`

      before(() => {
        subject = require('../src/rootextract')
      })

      it(`should return the root domain as ${mainDomain}`, () => {
        const result = subject.parse(link)

        result.should.have.deep.property('rootDomain', mainDomain)
      })
    })

    describe('with a subdomain', () => {
      const subDomain = 'my-subdomain'
      const link = `http://${subDomain}.${mainDomain}/my-path`

      before(() => {
        subject = require('../src/rootextract')
      })

      it(`should return the root domain as ${mainDomain}`, () => {
        const result = subject.parse(link)

        result.should.have.deep.property('rootDomain', mainDomain)
      })
    })
  })

  describe('when parsing a HTTP link with just one letter', () => {
    const domain = 't.co'
    const link = `https://${domain}/567uhib2`

    before(() => {
      subject = require('../src/rootextract')
    })

    it(`should return the root domain as ${domain}`, () => {
      const result = subject.parse(link)

      result.should.have.deep.property('rootDomain', domain)

    })
  })

  describe('when parsing a HTTP link with a ccSLD', () => {
    const domain = 'my-domain.co.uk'

    describe('without a subdomain', () => {
      const link = `http://${domain}/my-path`

      before(() => {
        subject = require('../src/rootextract')
      })

      it(`should return the root domain as ${domain}`, () => {
        const result = subject.parse(link)

        result.should.have.deep.property('rootDomain', domain)
      })
    })

    describe('with a subdomain', () => {
      const subDomain = 'my-subdomain'
      const link = `http://${subDomain}.${domain}/my-path`

      before(() => {
        subject = require('../src/rootextract')
      })

      it(`should return the root domain as ${domain}`, () => {
        const result = subject.parse(link)

        result.should.have.deep.property('rootDomain', domain)
      })
    })
  })

  describe('when parsing a HTTP link with an ccSLD from Australia', () => {
    it(`should return the root domain`, () => {
      subject.parse('http://www.example.com.au').rootDomain.should.be.equal('example.com.au')
      subject.parse('http://www.example.net.au').rootDomain.should.be.equal('example.net.au')
      subject.parse('http://www.example.org.au').rootDomain.should.be.equal('example.org.au')
      subject.parse('http://www.example.edu.au').rootDomain.should.be.equal('example.edu.au')
      subject.parse('http://www.example.gov.au').rootDomain.should.be.equal('example.gov.au')
      subject.parse('http://www.example.asn.au').rootDomain.should.be.equal('example.asn.au')
      subject.parse('http://www.example.id.au').rootDomain.should.be.equal('example.id.au')
      subject.parse('http://www.example.csiro.au').rootDomain.should.be.equal('example.csiro.au')
      subject.parse('http://www.example.oz.au').rootDomain.should.be.equal('example.oz.au')
      subject.parse('http://www.example.conf.au').rootDomain.should.be.equal('example.conf.au')
      subject.parse('http://www.example.info.au').rootDomain.should.be.equal('example.info.au')
    })
  })

  describe('when parsing a HTTP link with an ccSLD from Australia', () => {
    it(`should return the root domain`, () => {
      subject.parse('http://www.example.com.mx').rootDomain.should.be.equal('example.com.mx')
      subject.parse('http://www.example.net.mx').rootDomain.should.be.equal('example.net.mx')
      subject.parse('http://www.example.org.mx').rootDomain.should.be.equal('example.org.mx')
      subject.parse('http://www.example.ngo.mx').rootDomain.should.be.equal('example.ngo.mx')
      subject.parse('http://www.example.edu.mx').rootDomain.should.be.equal('example.edu.mx')
      subject.parse('http://www.example.gob.mx').rootDomain.should.be.equal('example.gob.mx')
    })
  })
})
