/*
 * Copyright (C) 2017, FREDRIK HOLMÉN. All rights reserved.
 */

const url = require('url')
const publicTlds = require('./publicTlds-list')

module.exports = self = {

	rootDomain (link) {

		if (link.indexOf('http') < 0) {
			link = "http://" + link
		}

		let URL = url.parse(link) 
		let hostname = URL.hostname.split('.')
		hostname.reverse()

		let rootDomain = "";

		if (hostname.length > 2) {
			if (publicTlds[hostname[0]]) {
				if (publicTlds[hostname[0]][hostname[1]]) {
					URL.rootDomain = hostname[2] + "." + hostname[1] + "." + hostname[0]
					return URL
				} 
			}	
		}		

		URL.rootDomain = hostname[1] + "." + hostname[0]
		return URL

	}
}

