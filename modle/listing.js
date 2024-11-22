const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=2048x2048&w=is&k=20&c=fTWeu7OGRhaG6yFf2yv0ZyWADOgdp2x8hgiZd5M-hPs=",
        set:(v)=>v===""?"https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=2048x2048&w=is&k=20&c=fTWeu7OGRhaG6yFf2yv0ZyWADOgdp2x8hgiZd5M-hPs=":v
    },
    price:{
        type:Number,
        required:true
    },
    location:String,
    country:String
})

const Listing = mongoose.model("Listing",listingSchema);
module.exports=Listing;