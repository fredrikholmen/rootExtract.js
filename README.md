# rootExtract.js
Simple package to extract the root domain from an URL

## Install

```
	npm install root-extract.js
```

## Usage

```
	const root = require('root-extract.js')

	let link = "www.example.co.uk"

	let URL = root.rootDomain(link)

	console.log(URL.rootDomain)

	//Prints out 'example.co.uk'
```

