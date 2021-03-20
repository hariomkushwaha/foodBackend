const mongoose = require("mongoose")

const URI ="mongodb+srv://hariom:hariom123@cluster1.duuen.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    })
    console.log("Connected to database")
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = connectDB;