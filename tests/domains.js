var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

var rooter = require('./../lib/root-extract');

describe('root-extract', function() {
  it('rootDomain() should return the correct root domain from any url passed in', function() {
    
    expect(rooter.rootDomain("www.example.com")).to.equal("example.com");
    expect(rooter.rootDomain("example.com")).to.equal("example.com");
    expect(rooter.rootDomain("www.example.co.uk")).to.equal("example.co.uk");
    expect(rooter.rootDomain("www.example.org.uk")).to.equal("example.org.uk");
    expect(rooter.rootDomain("www.example.mil.ac")).to.equal("example.mil.ac");
    expect(rooter.rootDomain("www.example.edu.ac")).to.equal("example.edu.ac");
   
  });
});