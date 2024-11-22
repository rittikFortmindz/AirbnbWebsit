const sampleList = [
    {
      title: "Luxury Beachfront Villa",
      image: "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?cs=srgb&dl=pexels-amar-saleem-15661-70441.jpg&fm=jpg",
      description: "A luxurious villa with a private pool and beach access.",
      price: 3500,
      location: "Anjuna, Goa",
      country: "India"
    },
    {
      title: "Mountain Retreat Villa",
      image: "https://media.istockphoto.com/id/488120139/photo/modern-real-estate.jpg?s=612x612&w=0&k=20&c=88jk1VLSoYboMmLUx173sHs_XrZ9pH21as8lC7WINQs=",
      description: "Escape to tranquility with this secluded villa in the hills.",
      price: 2700,
      location: "Nainital, Uttarakhand",
      country: "India"
    },
    {
      title: "Modern City Villa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcPxDGd5KVzCqtypD-510Sn_6YXuoXg2uJpw&s",
      description: "Sophisticated urban living with top-of-the-line amenities.",
      price: 4500,
      location: "Bangalore, Karnataka",
      country: "India"
    },
    {
      title: "Villa with Private Garden",
      image: "https://www.shutterstock.com/image-photo/modern-luxurious-hotel-bedroom-views-260nw-1961097103.jpg",
      description: "Spacious villa with a serene private garden and large pool.",
      price: 3200,
      location: "Udaipur, Rajasthan",
      country: "India"
    },
    {
      title: "Ocean View Villa",
      image: "https://media.istockphoto.com/id/1154108710/photo/ocean-view-villa-with-pool.jpg?s=612x612&w=0&k=20&c=1nQ5DAqfdPrDmn8kg5kD2aDkFE3r0-sqnyMhHHdZUlY=",
      description: "Wake up to breathtaking ocean views from this contemporary villa.",
      price: 4200,
      location: "Varkala, Kerala",
      country: "India"
    },
    {
      title: "Seaside Escape Villa",
      image: "https://media.istockphoto.com/id/1201184155/photo/modern-villa-with-pool-and-sea-view.jpg?s=612x612&w=0&k=20&c=PVsdRgV7w2kJ0m0tbAM64VXXRlhf59Vrdlbb5HuzJHc=",
      description: "A stylish seaside villa with amazing views and a relaxing atmosphere.",
      price: 4800,
      location: "Alibaug, Maharashtra",
      country: "India"
    },
    {
      title: "Exclusive Vineyard Villa",
      image: "https://media.istockphoto.com/id/1063403448/photo/luxury-villa-with-vineyard.jpg?s=612x612&w=0&k=20&c=6SFL2N9ZCy6Gx3yy9Jj6tME9Qdw40qXYdRmB-ymbhdI=",
      description: "Nestled among vineyards, this villa offers a perfect escape.",
      price: 5300,
      location: "Nashik, Maharashtra",
      country: "India"
    },
    {
      title: "Private Hilltop Villa",
      image: "https://media.istockphoto.com/id/1210324360/photo/hilltop-villa.jpg?s=612x612&w=0&k=20&c=frgH07sdW4EIj2R-2w8ftUjpqgQG2S9xd3IcgoOCF0E=",
      description: "A secluded villa at the top of a hill offering 360-degree views.",
      price: 4000,
      location: "Mussoorie, Uttarakhand",
      country: "India"
    },
    {
      title: "Lakeview Luxury Villa",
      image: "https://media.istockphoto.com/id/1184824471/photo/luxury-lakefront-villa.jpg?s=612x612&w=0&k=20&c=jYNjSgO_g9RABlWPHa46uMzpLFG4zkzznySvWyxvNJY=",
      description: "Overlooking a serene lake, this villa provides the perfect getaway.",
      price: 3900,
      location: "Kodaikanal, Tamil Nadu",
      country: "India"
    },
    {
      title: "Palm Grove Villa",
      image: "https://media.istockphoto.com/id/1072794076/photo/luxury-villa-in-palm-tree-grove.jpg?s=612x612&w=0&k=20&c=QwYwvBaEHzj1jwA1jxL3TTweZ3sRe5p2qQ6hD14TpRE=",
      description: "An idyllic villa surrounded by palm trees, perfect for relaxation.",
      price: 3100,
      location: "Goa, India",
      country: "India"
    },
    {
      title: "Desert Oasis Villa",
      image: "https://media.istockphoto.com/id/1029114676/photo/desert-oasis-luxury-villa.jpg?s=612x612&w=0&k=20&c=Xq7ACWwt8lsCUkqToi6hEAB6jmNrsyXlfVJmwnRmE3I=",
      description: "A villa surrounded by desert landscape offering absolute peace and quiet.",
      price: 6000,
      location: "Jaisalmer, Rajasthan",
      country: "India"
    },
    {
      title: "Forest Retreat Villa",
      image: "https://media.istockphoto.com/id/1181574243/photo/forest-luxury-villa.jpg?s=612x612&w=0&k=20&c=53Tvhv-VpSBHZYY6drsNdcfA8ysf1LgjeG7rBs6xg0s=",
      description: "Located deep within the forest, this villa offers complete serenity.",
      price: 3500,
      location: "Coorg, Karnataka",
      country: "India"
    },
    {
      title: "Riverside Villa",
      image: "https://media.istockphoto.com/id/1123471579/photo/luxury-villa-on-the-riverbank.jpg?s=612x612&w=0&k=20&c=Qz9yt-1H_o_fWUtHmVqY7-VToZTq3qC3I2qXq5CrjHs=",
      description: "Wake up to the gentle sound of flowing water from this riverside villa.",
      price: 3800,
      location: "Rishikesh, Uttarakhand",
      country: "India"
    },
    {
      title: "Hilltop Zen Villa",
      image: "https://media.istockphoto.com/id/1136890212/photo/luxury-zen-villa.jpg?s=612x612&w=0&k=20&c=vsL8xsEVGXmjyJ9-KM9Q4al9q0yn7UjpaWRgwR7oofw=",
      description: "A zen-inspired villa perched atop a hill with tranquil surroundings.",
      price: 4500,
      location: "Darjeeling, West Bengal",
      country: "India"
    }
  ];
  
  module.exports = { data: sampleList };
  