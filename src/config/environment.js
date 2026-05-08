const dotenv = require('dotenv')

const env = process.env.ENV || 'dev'

dotenv.config({
  path: `.env.${env}`
})

module.exports = {
  baseUrl: process.env.BASE_URL
}