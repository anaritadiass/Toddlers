const babyProducts = require('./clothes import/baby-products')
const childProducts = require('./clothes import/child-products')
const newBornProducts = require('./clothes import/newborn-products')
const {getMongoCollection} = require('./db')
const COLLECTION_NAME  = "products"

const importArrayToMongo = async (arr) => {
    const collection = await getMongoCollection(COLLECTION_NAME)
    await collection.insertMany(arr)
}

importArrayToMongo(babyProducts)
.then(() => importArrayToMongo(childProducts))
.then(() => importArrayToMongo(newBornProducts))
.then(() => console.log("DONE"))