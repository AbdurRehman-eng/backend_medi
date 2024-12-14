const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // To parse JSON data

// Sample medicine data
const medicines = [
  {
    id: 1,
    name: "Pain Relief Plus",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    description: "Fast-acting pain relief formula",
    type: "Pills",
    packSize: "30 tablets",
  },
  {
    id: 2,
    name: "Daily Vitamins",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104",
    description: "Complete daily nutrition",
    type: "Capsules",
    packSize: "60 capsules",
  },
  {
    id: 3,
    name: "Omega-3 Fish Oil",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1550572017-37c5b36b2c6f",
    description: "Heart health supplement",
    type: "Softgels",
    packSize: "90 softgels",
  },
  {
    id: 4,
    name: "Allergy Relief",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    description: "24-hour allergy control",
    type: "Syrup",
    packSize: "120ml bottle",
  },
  {
    id: 5,
    name: "Probiotics",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1550572017-37c5b36b2c6f",
    description: "Digestive health support",
    type: "Capsules",
    packSize: "45 capsules",
  },
  {
    id: 6,
    name: "Sleep Aid",
    price: "$21.99",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae",
    description: "Natural sleep support",
    type: "Cream",
    packSize: "50g tube",
  },
];

// API endpoint
app.get("/api/medicines", (req, res) => {
  res.status(200).json(medicines);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
