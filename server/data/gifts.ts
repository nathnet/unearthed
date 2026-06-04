type Gift = {
  id: number;
  name: string;
  pricePoint: string;
  audience: string;
  image: string;
  description: string;
  submittedBy: string;
  submittedOn: Date;
};

const giftData: Gift[] = [
  {
    id: 1,
    name: "Disco Ball Candle",
    pricePoint: "$",
    audience: "Candle Lovers",
    image: "https://tinyurl.com/39xc9h6y",
    description: "A party in a candle",
    submittedBy: "Sasha",
    submittedOn: new Date("2022-09-04T14:48:00"),
  },
  {
    id: 2,
    name: "Lego Flower Bouquet Kit",
    pricePoint: "$",
    audience: "Green Thumbs",
    image: "https://tinyurl.com/ydpv2bt9",
    description: "A gift and fun activity to do together",
    submittedBy: "Isabel",
    submittedOn: new Date("2023-02-14T12:32:00"),
  },
  {
    id: 3,
    name: "Nintendo Switch Lite",
    pricePoint: "$$",
    audience: "Gamers",
    image: "https://tinyurl.com/2cdfe59x",
    description: "A gift for gamers on-the-go",
    submittedBy: "Mario",
    submittedOn: new Date("2022-09-13T11:01:00"),
  },
  {
    id: 4,
    name: "Nike Panda Dunks",
    pricePoint: "$$",
    audience: "Sneakerheads",
    image: "https://tinyurl.com/y9bzv8xd",
    description: "A fan-favorite black and white color-blocking sneaker",
    submittedBy: "Jason",
    submittedOn: new Date("2023-03-10T05:23:00"),
  },
  {
    id: 5,
    name: "Razer Kitty Headset",
    pricePoint: "$$",
    audience: "Gamers",
    image: "https://tinyurl.com/4pt84wry",
    description:
      "Create the purrfect gaming look with your own killer kitty style",
    submittedBy: "Pixie",
    submittedOn: new Date("2011-10-10T14:48:00"),
  },
  {
    id: 6,
    name: "Nellsi Sunset Lamp Projection",
    pricePoint: "$",
    audience: "Sungazers",
    image: "https://tinyurl.com/y76zsc37",
    description: "Sunshine any time, any place",
    submittedBy: "Melody",
    submittedOn: new Date("2011-10-10T14:48:00"),
  },
  {
    id: 7,
    name: "Frigidaire Retro Mini Fridge",
    pricePoint: "$",
    audience: "Foodies",
    image: "https://tinyurl.com/dzyhec8a",
    description: "A retro way of keeping things cool",
    submittedBy: "Grover",
    submittedOn: new Date("2023-01-01T14:48:00"),
  },
  {
    id: 8,
    name: "Crosley Discover Turntable",
    pricePoint: "$",
    audience: "Music Lovers",
    image: "https://tinyurl.com/4vycxmkm",
    description:
      "A portable turntable that is ready to play right out of the box",
    submittedBy: "Marvin",
    submittedOn: new Date("2023-04-01T07:02:00"),
  },
  {
    id: 9,
    name: "Brandon Blackwood Parker Bag",
    pricePoint: "$$",
    audience: "Fashionistas",
    image: "https://tinyurl.com/2n6pszw7",
    description: "A perfect pop of color",
    submittedBy: "Brandon",
    submittedOn: new Date("2023-01-10T14:48:00"),
  },
  {
    id: 10,
    name: "Gift Card",
    pricePoint: "$",
    audience: "Everyone",
    image: "gift-card.jpg",
    description: "A versatile gift card that can be used at various stores.",
    submittedBy: "Alice",
    submittedOn: new Date("2024-01-15"),
  },
];

export default giftData;