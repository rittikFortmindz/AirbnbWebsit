const express = require("express");
const app = express();
const Listning = require("./modle/listing.js")
const ejsMate = require("ejs-mate")


const mongoose = require("mongoose");
const methodOverride = require('method-override');
const Listing = require("./modle/listing.js");
const path = require("path");
const { error } = require("console");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "/public")));

app.engine("ejs", ejsMate);

main().then(() => {
    console.log('DB connected');

}).catch((error) => {
    console.log(error);

})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Airbnb');
}


app.get("/", (req, res) => {
    res.send('this is root');
})


// app.get("/getListing",async(req,res)=>{
//    let sampleList=new Listning({
//     title:"Villa",
//     image:"https://media.istockphoto.com/id/903417402/photo/luxury-construction-hotel-with-swimming-pool-at-sunset.jpg?s=2048x2048&w=is&k=20&c=fTWeu7OGRhaG6yFf2yv0ZyWADOgdp2x8hgiZd5M-hPs=",
//     description:"New villa",
//     price:1200,
//     location:"Calangute, Goa",
//     country:"India"
//    })
// await sampleList.save()
//  await  Listing.find().then((val)=>{


//     res.json(val);
//  })

// console.log("data is saved");


//  })

app.get("/Listings", async (req, res) => {
    const allListing = await Listing.find({});
    // console.log(allListing);


    // res.json(allListing);
    if (req.headers.accept && req.headers.accept.includes('application/json')) {
        // If the client is expecting JSON (e.g., a mobile app), send a JSON response
        res.json(allListing);
    } else {
        // Otherwise, render an EJS template (e.g., a browser)
        res.render("listings/index.ejs", { allListing });
    }



});

app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    console.log(listing.title);

    res.render("listings/edit.ejs", { listing });
})

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");

})
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing })
});


app.post("/listings", async (req, res) => {
    const { title, description, img, price, location, country } = req.body;
    const newListing = new Listing({
        title: title,
        description: description,
        image: img,
        price: price,
        location: location,
        country: country
    });
    await newListing.save();
    res.redirect("/listings")
})

app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listing/edit.ejs", { listing });
})


app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndUpdate(id, { ...req.body.listing })

    // if (req.headers.accept && req.headers.accept.includes('application/json')) {
    //     // If the client is expecting JSON (e.g., a mobile app), send a JSON response
    //     res.json({
    //         update: "successfull",
    //         error: "false",
    //     });
    // } else {
    //     // Otherwise, render an EJS template (e.g., a browser)
    //     res.redirect(`/listings/${id}`);
    // }


});

app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})
app.listen(8080, () => {
    console.log('server is running on port 8080');

})