import Seraph from 'seraph'
import Promise from 'bluebird'
import config from '../../../src/shared/config/config'

let DATABASE_URI = process.env.GRAPHSTORY_URL

export default Promise.promisifyAll(Seraph(DATABASE_URI))
