var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

var rooter = require('./../lib/rootextract');


describe('rootExtract', function() {
  it('parse() should return the correct root domain from any url passed in', function() {
    
    expect(rooter.parse("http://www.example.com").rootDomain).to.equal("example.com");
    expect(rooter.parse("http://example.com").rootDomain).to.equal("example.com");
    expect(rooter.parse("ftp://www.example.co.uk").rootDomain).to.equal("example.co.uk");
    expect(rooter.parse("http://www.example.org.uk").rootDomain).to.equal("example.org.uk");
    expect(rooter.parse("http://www.example.mil.ac").rootDomain).to.equal("example.mil.ac");
    expect(rooter.parse("http://www.example.edu.ac").rootDomain).to.equal("example.edu.ac");
    expect(rooter.parse("http://www.example.edu.ac").rootDomain).to.equal("example.edu.ac");
    expect(rooter.parse("http://www.example.edu.ac:8000").rootDomain).to.equal("example.edu.ac");
    expect(rooter.parse("http://www.example.edu.ac").rootDomain).to.equal("example.edu.ac");
    
    //Australia
    expect(rooter.parse("http://www.example.com.au").rootDomain).to.equal("example.com.au");
    expect(rooter.parse("http://www.example.net.au").rootDomain).to.equal("example.net.au");
    expect(rooter.parse("http://www.example.org.au").rootDomain).to.equal("example.org.au");
    expect(rooter.parse("http://www.example.edu.au").rootDomain).to.equal("example.edu.au");
    expect(rooter.parse("http://www.example.gov.au").rootDomain).to.equal("example.gov.au");
    expect(rooter.parse("http://www.example.asn.au").rootDomain).to.equal("example.asn.au");
    expect(rooter.parse("http://www.example.id.au").rootDomain).to.equal("example.id.au");
    expect(rooter.parse("http://www.example.csiro.au").rootDomain).to.equal("example.csiro.au");
    expect(rooter.parse("http://www.example.oz.au").rootDomain).to.equal("example.oz.au");
    expect(rooter.parse("http://www.example.conf.au").rootDomain).to.equal("example.conf.au");
    expect(rooter.parse("http://www.example.info.au").rootDomain).to.equal("example.info.au");

    //Mexico    
    expect(rooter.parse("http://www.example.com.mx").rootDomain).to.equal("example.com.mx");
    expect(rooter.parse("http://www.example.net.mx").rootDomain).to.equal("example.net.mx");
    expect(rooter.parse("http://www.example.org.mx").rootDomain).to.equal("example.org.mx");
    expect(rooter.parse("http://www.example.ngo.mx").rootDomain).to.equal("example.ngo.mx");
    expect(rooter.parse("http://www.example.edu.mx").rootDomain).to.equal("example.edu.mx");
    expect(rooter.parse("http://www.example.gob.mx").rootDomain).to.equal("example.gob.mx");
   
});
});
