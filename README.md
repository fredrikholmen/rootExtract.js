# rootExtract.js
Simple package to extract the root domain from an URL

rootExtract.js takes a URL string parses it and returns a URL object with a rootDomain field.

## Install

```
	npm install rootExtract.js
```

## Usage

```
	const rooter = require('rootExtract.js')

	let link = "http://www.example.co.uk"

	let URL = rooter.parse(link)

	//We return the normal URL object with an appended rootDomain field.
	console.log(URL.rootDomain)

	//Prints out 'example.co.uk'
```

