const woods = [
  {
    id: 1,
    name: "Teak",
    image:"https://productimages.withfloats.com/tile/610b73fda3386a000114662f.jpg",
    scientificName: "Tectona grandis",
   
    origin: "India, Myanmar",
    color: "Golden Brown",
    hardness: "Very High",
    density: "655 kg/m³",
    price: 3500,
    category: "Hardwood",
    rating: 4.9,
    stock: 28,
    uses: [
      "Luxury Furniture",
      "Doors",
      "Windows",
      "Boat Building"
    ],
    description:
      "Teak is one of the world's most durable hardwoods. It naturally resists termites, moisture, and decay, making it ideal for premium furniture and outdoor applications."
  },

  {
    id: 2,
    name: "Oak",
    scientificName: "Quercus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFvHVT-5nBIqWRFAt7SRV1DeI7dCHkVSbOczvb8svyU81YcBtMqdzbSkze&s=10",
    origin: "Europe, North America",
    color: "Light Brown",
    hardness: "High",
    density: "750 kg/m³",
    price: 2900,
    category: "Hardwood",
    rating: 4.8,
    stock: 35,
    uses: [
      "Flooring",
      "Furniture",
      "Cabinets",
      "Barrels"
    ],
    description:
      "Oak is a strong and attractive hardwood known for its beautiful grain pattern and exceptional durability."
  },

  {
    id: 3,
    name: "Walnut",
    scientificName: "Juglans nigra",
    image: "https://bfppl.com/wp-content/uploads/2026/06/Walnut-Wood.webp",
    origin: "North America",
    color: "Chocolate Brown",
    hardness: "High",
    density: "610 kg/m³",
    price: 4200,
    category: "Hardwood",
    rating: 4.9,
    stock: 18,
    uses: [
      "Luxury Furniture",
      "Wall Panels",
      "Decor",
      "Carving"
    ],
    description:
      "Walnut is prized for its rich dark color, fine grain, and premium appearance, making it a favorite for luxury interiors."
  },

  {
    id: 4,
    name: "Mahogany",
    scientificName: "Swietenia",
    image: "https://5.imimg.com/data5/IOS/Default/2023/7/323913609/KN/HQ/KU/53491682/product-jpeg.png",
    origin: "Central America",
    color: "Reddish Brown",
    hardness: "High",
    density: "590 kg/m³",
    price: 3900,
    category: "Hardwood",
    rating: 4.7,
    stock: 22,
    uses: [
      "Furniture",
      "Musical Instruments",
      "Doors",
      "Decor"
    ],
    description:
      "Mahogany is known for its deep reddish color, elegant finish, and excellent workability."
  },

  {
    id: 5,
    name: "Rosewood",
    scientificName: "Dalbergia latifolia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_r281RoUwjiloRUck6KOO_Fj15DGF_KXCLlVoT8keIlqyeyuQwZYKeQ&s=10",
    origin: "India",
    color: "Dark Brown",
    hardness: "Very High",
    density: "830 kg/m³",
    price: 5200,
    category: "Hardwood",
    rating: 5.0,
    stock: 12,
    uses: [
      "Luxury Furniture",
      "Musical Instruments",
      "Decorative Veneers"
    ],
    description:
      "Rosewood is one of the most luxurious hardwoods, admired for its striking grain and rich natural fragrance."
  },

  {
    id: 6,
    name: "Pine",
    scientificName: "Pinus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_BKTYf8kzQ-qThTkcXDEdzHCV97Z17_XAUUohkAaOFYKGibIAS3fe_5gN&s=10",
    origin: "Europe",
    color: "Cream Yellow",
    hardness: "Medium",
    density: "500 kg/m³",
    price: 1800,
    category: "Softwood",
    rating: 4.5,
    stock: 60,
    uses: [
      "Furniture",
      "Construction",
      "Shelves",
      "Doors"
    ],
    description:
      "Pine is lightweight, affordable, and easy to work with, making it popular for indoor furniture and home décor."
  },

  {
    id: 7,
    name: "Cedar",
    scientificName: "Cedrus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi9Kh49LnrqULQlzMw8K4Zw1FTX24R5KlbAqNt8LJ_IDiGjGWdOQg4z-I&s=10",
    origin: "Himalayas",
    color: "Light Reddish Brown",
    hardness: "Medium",
    density: "560 kg/m³",
    price: 2600,
    category: "Softwood",
    rating: 4.6,
    stock: 30,
    uses: [
      "Closets",
      "Outdoor Furniture",
      "Roofing",
      "Cabins"
    ],
    description:
      "Cedar naturally repels insects and resists moisture, making it perfect for outdoor and aromatic wood products."
  },

  {
    id: 8,
    name: "Maple",
    scientificName: "Acer",
    image: "https://static.vecteezy.com/system/resources/thumbnails/041/510/109/small/ai-generated-maple-wood-striped-grain-texture-free-photo.jpg",
    origin: "Canada",
    color: "Cream White",
    hardness: "High",
    density: "705 kg/m³",
    price: 3100,
    category: "Hardwood",
    rating: 4.8,
    stock: 25,
    uses: [
      "Flooring",
      "Kitchen Cabinets",
      "Sports Equipment",
      "Furniture"
    ],
    description:
      "Maple is a strong hardwood with a smooth grain and light color, widely used in modern interiors."
  }
];

export default woods;