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

		let hostname = url.parse(link).hostname.split('.')
		hostname.reverse()

		let rootDomain = "";

		if (hostname.length > 2) {
			if (publicTlds[hostname[0]]) {
				if (publicTlds[hostname[0]][hostname[1]]) {
					return hostname[2] + "." + hostname[1] + "." + hostname[0]
				} 
			}	
		}		

		return hostname[1] + "." + hostname[0]

	}
}

