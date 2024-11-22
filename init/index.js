const mongoose=require("mongoose");

const initdata=require("./data.js");
const Listing = require("../modle/listing");
main().then(()=>{
    console.log('DB connected');
    
}).catch((error)=>{
    console.log(error);
    
})
async function main() {
  await  mongoose.connect('mongodb://127.0.0.1:27017/Airbnb');
}




const initDB=async (params) => {
    await Listing.deleteMany({});

    await Listing.insertMany(initdata.data);
    console.log('all data are saved');
    
}

initDB();
