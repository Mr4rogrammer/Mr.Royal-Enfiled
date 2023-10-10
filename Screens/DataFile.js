import React, { useState } from "react";

export const initialData = [
  {
    key: "1",
    text: "Interceptor 650",
    selected: true,
    hint: "Easy Got Back",
    message:
      "The quintessential modern classic roadster - that's a blast to ride on twisty back roads, highways, or the urban jungle, with equal ease and grace, for novices and experienced riders alike.",
    imageSrc: require("../assets/inter.png"),
    mileage: "45 kmpl",
    maxPower: "29.5 bhp",
    Displacement: "499 cc",
    colors: ["#FF0000", "#000000", "#C0C0C0", "#FFA500"],
    price: "₹3,50,000",
    maxSpeed: "170 km/h",
    numberOfGears: "6",
    wheelType: "Spoke",
    link: "https://www.royalenfield.com/in/en/motorcycles/interceptor/",
    about:
      "The Interceptor 650 is a modern classic roadster known for its timeless design and powerful performance. It's a perfect choice for riders looking for an exhilarating experience on various terrains.",
  },
  {
    key: "2",
    text: "Classic 350",
    selected: false,
    hint: "Timeless Elegance",
    message:
      "A true classic with its vintage design and thumping heart. Perfect for riders who appreciate nostalgia and style.",
    imageSrc: require("../assets/re.png"),
    mileage: "35 kmpl",
    maxPower: "19.8 bhp",
    Displacement: "346 cc",
    colors: ["#000000", "#008000", "#0000FF", "#D3D3D3"],
    price: "₹2,50,000",
    maxSpeed: "120 km/h",
    numberOfGears: "5",
    wheelType: "Alloy",
    link: "https://www.royalenfield.com/in/en/motorcycles/classic-350/",
    about:
      "The Classic 350 is a timeless icon that combines vintage elegance with modern performance. It's a bike that appeals to those who value classic aesthetics.",
  },
  {
    key: "3",
    text: "Himalayan",
    selected: false,
    hint: "Adventure Beckons",
    message:
      "Built for rugged terrains, the Himalayan is your go-to companion for adventure, whether on or off the beaten path.",
    imageSrc: require("../assets/him.png"),
    mileage: "30 kmpl",
    maxPower: "24.3 bhp",
    Displacement: "411 cc",
    colors: ["#FFFFFF", "#000000", "#C0C0C0", "#008000"],
    price: "₹2,15,000",
    maxSpeed: "145 km/h",
    numberOfGears: "5",
    wheelType: "Spoke",
    link: "https://www.royalenfield.com/in/en/motorcycles/himalayan/",
    about:
      "The Himalayan is designed for adventurous riders who seek thrilling journeys on challenging terrains. Its robust build and powerful engine make it the ultimate adventure companion.",
  },
  {
    key: "4",
    text: "Bullet 500",
    selected: false,
    hint: "Iconic Thump",
    message:
      "Experience the legendary thump of the Bullet 500 as you cruise down the open road. Timeless style meets enduring performance.",
    imageSrc: require("../assets/bullet.png"),
    mileage: "35 kmpl",
    maxPower: "27.2 bhp",
    Displacement: "499 cc",
    colors: ["#000000", "#008000", "#800000"],
    price: "₹1,89,000",
    maxSpeed: "140 km/h",
    numberOfGears: "5",
    wheelType: "Spoke",
    link: "https://www.royalenfield.com/in/en/motorcycles/bullet-350/",
    about:
      "The Bullet 500 is an iconic motorcycle known for its distinctive thumping sound and classic design. It's a symbol of timeless style and enduring performance.",
  },
  {
    key: "5",
    text: "Meteor 350",
    selected: false,
    hint: "Smooth Sailing",
    message:
      "The Meteor 350 combines classic cruiser styling with modern technology for a comfortable and enjoyable ride.",
    imageSrc: require("../assets/metr.png"),
    mileage: "36 kmpl",
    maxPower: "20.2 bhp",
    Displacement: "349 cc",
    colors: ["#FF0000", "#000000", "#0000FF", "#8B4513"],
    price: "₹2,25,000",
    maxSpeed: "120 km/h",
    numberOfGears: "5",
    wheelType: "Alloy",
    link: "https://www.royalenfield.com/in/en/motorcycles/meteor/",
    about:
      "The Meteor 350 is a cruiser motorcycle that offers a perfect blend of classic styling and modern technology. It's designed for a smooth and enjoyable riding experience.",
  },
  {
    key: "6",
    text: "Continental GT 650",
    selected: false,
    hint: "Cafe Racer Icon",
    message:
      "With a sporty cafe racer design and a powerful twin-cylinder engine, the Continental GT 650 delivers style and performance.",
    imageSrc: require("../assets/gt.png"),
    mileage: "25 kmpl",
    maxPower: "47.6 bhp",
    Displacement: "648 cc",
    colors: ["#000000", "#FF0000", "#D3D3D3"],
    price: "₹3,45,000",
    maxSpeed: "160 km/h",
    numberOfGears: "6",
    wheelType: "Alloy",
    link: "https://www.royalenfield.com/in/en/motorcycles/continental-gt/",
    about:
      "The Continental GT 650 is a cafe racer motorcycle that combines sporty design with powerful performance. It's built for riders who crave style and speed.",
  },
  {
    key: "7",
    text: "Thunderbird X",
    selected: false,
    hint: "Urban Cruiser",
    message:
      "The Thunderbird X series offers a modern twist on the classic cruiser, making it perfect for city riding.",
    imageSrc: require("../assets/thun.png"),
    mileage: "35 kmpl",
    maxPower: "19.8 bhp",
    Displacement: "346 cc",
    colors: ["#000000", "#0000FF", "#808080", "#A52A2A"],
    price: "₹1,56,000",
    maxSpeed: "120 km/h",
    numberOfGears: "5",
    wheelType: "Alloy",
    link: "https://www.royalenfield.com/in/en/motorcycles/thunderbird-models/tbx-350/",
    about:
      "The Thunderbird X is an urban cruiser designed for city riders. It offers a modern twist on the classic cruiser style, making it an ideal choice for urban adventures.",
  },
  {
    key: "8",
    text: "Hunter 350",
    selected: false,
    hint: "Rugged Explorer",
    message:
      "The Hunter 350 is built for those who seek rugged adventures and exploration. With its robust design and powerful engine, it's ready to conquer any terrain.",
    imageSrc: require("../assets/hunter.png"),
    mileage: "35 kmpl",
    maxPower: "25.5 bhp",
    Displacement: "349 cc",
    colors: ["#000000", "#8B4513", "#D3D3D3"],
    price: "₹1,75,000",
    maxSpeed: "135 km/h",
    numberOfGears: "5",
    wheelType: "Alloy",
    link: "https://www.royalenfield.com/in/en/motorcycles/hunter-350/",
    about:
      "The Hunter 350 is a versatile adventure motorcycle designed to take on challenging terrains. It's the perfect companion for riders who crave exploration and adrenaline.",
  },
  {
    key: "9",
    text: "Scram 411",
    selected: false,
    hint: "Off-Road Adventure",
    message:
      "The Scram 411 is designed for off-road enthusiasts and adventurers. It's ready to tackle rough terrains and provide an exhilarating off-road riding experience.",
    imageSrc: require("../assets/scram.png"),
    mileage: "38 kmpl",
    maxPower: "24.3 bhp",
    Displacement: "411 cc",
    colors: ["#000000", "#006400", "#8B4513", "#D3D3D3"],
    price: "₹2,08,000",
    maxSpeed: "140 km/h",
    numberOfGears: "5",
    wheelType: "Spoke",
    link: "https://www.royalenfield.com/in/en/motorcycles/scram411/",
    about:
      "The Scram 411 is a versatile off-road motorcycle built for adventure seekers. Its powerful engine and durable construction make it an ideal choice for off-road exploration.",
  },
];

export const DataProvider = () => {
  const [data, setData] = useState(initialData);

  const updateData = (newData) => {
    setData(newData);
  };

  const getDataForKey = (key) => {
    const foundData = data.find((item) => item.key === key);
    console.log(key);
    return foundData || null; // Return null if data is not found
  };

  return { data, updateData, getDataForKey };
};
