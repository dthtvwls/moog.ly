express = require 'express'
express.createServer().use(express.static 'public').listen process.env.PORT || 3000