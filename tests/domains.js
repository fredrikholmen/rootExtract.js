var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

var rooter = require('./../lib/root-extract');

describe('root-extract', function() {
  it('rootDomain() should return the correct root domain from any url passed in', function() {
    
    expect(rooter.rootDomain("www.example.com").rootDomain).to.equal("example.com");
    expect(rooter.rootDomain("example.com").rootDomain).to.equal("example.com");
    expect(rooter.rootDomain("www.example.co.uk").rootDomain).to.equal("example.co.uk");
    expect(rooter.rootDomain("www.example.org.uk").rootDomain).to.equal("example.org.uk");
    expect(rooter.rootDomain("www.example.mil.ac").rootDomain).to.equal("example.mil.ac");
    expect(rooter.rootDomain("www.example.edu.ac").rootDomain).to.equal("example.edu.ac");
    expect(rooter.rootDomain("http://www.example.edu.ac").rootDomain).to.equal("example.edu.ac");
    expect(rooter.rootDomain("http://www.example.edu.ac:8000").rootDomain).to.equal("example.edu.ac");
    expect(rooter.rootDomain("http://www.example.edu.ac").rootDomain).to.equal("example.edu.ac");
    
    //Australia
expect(rooter.rootDomain("www.example.com.au").rootDomain).to.equal("example.com.au");
 expect(rooter.rootDomain("www.example.net.au").rootDomain).to.equal("example.net.au");
 expect(rooter.rootDomain("www.example.org.au").rootDomain).to.equal("example.org.au");
 expect(rooter.rootDomain("www.example.edu.au").rootDomain).to.equal("example.edu.au");
 expect(rooter.rootDomain("www.example.gov.au").rootDomain).to.equal("example.gov.au");
 expect(rooter.rootDomain("www.example.asn.au").rootDomain).to.equal("example.asn.au");
 expect(rooter.rootDomain("www.example.id.au").rootDomain).to.equal("example.id.au");
 expect(rooter.rootDomain("www.example.csiro.au").rootDomain).to.equal("example.csiro.au");
 expect(rooter.rootDomain("www.example.oz.au").rootDomain).to.equal("example.oz.au");
 expect(rooter.rootDomain("www.example.conf.au").rootDomain).to.equal("example.conf.au");
 expect(rooter.rootDomain("www.example.info.au").rootDomain).to.equal("example.info.au");
   
  });
});
