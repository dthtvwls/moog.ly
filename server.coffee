express = require 'express'
express.createServer().use(express.static __dirname).listen 3000