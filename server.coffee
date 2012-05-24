express = require 'express'
express.createServer().use(express.static __dirname).listen process.env.PORT || 3000