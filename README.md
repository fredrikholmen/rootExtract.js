# rootExtract.js
Simple package to extract the root domain from an URL

## Install

```
	npm install root-extract
```

## Usage

```
	const root = require('root.extract')

	let link = "www.example.co.uk"

	let URL = root.rootDomain(link)

	console.log(URL.rootDomain)

	//Prints out 'example.co.uk'
```

