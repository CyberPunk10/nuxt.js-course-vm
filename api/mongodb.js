import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI || 'mongodb+srv://CyberPunk10:PFs7yix1Bh4lnaKz@cluster0.owfrf.mongodb.net/shop', {useUnifiedTopology: true})

export default client
