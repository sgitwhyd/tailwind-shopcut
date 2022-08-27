import laptopImage from "../public/images/laptop.png";
import psImage from "../public/images/ps.png";
import vapeImage from "../public/images/vape.png";
import hpImage from "../public/images/hp.png";

const ratings = [
  {
    id: 1,
    title: "Ratings",
    value: 4.8,
  },
  {
    id: 2,
    title: "Opening hours",
    value: "7 AM - 8 PM",
  },
  {
    id: 3,
    title: "Distance",
    value: "< 0.2km",
  },
  {
    id: 4,
    title: "Distance",
    value: "< 0.2km",
  },
  {
    id: 5,
    title: "Distance",
    value: "< 0.2km",
  },
];

const itemList = [
  {
    id: 1,
    name: "Macbook Terbaru Murah",
    photo: laptopImage,
    price: "$ 89,99",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Playsatation 5 KW Super",
    photo: psImage,
    price: "$ 99",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Vaporizer Terbaik 2021",
    photo: vapeImage,
    price: "$ 5,99",
    isAvailable: true,
  },
  {
    id: 4,
    name: "Smartphone Singosarenan",
    photo: hpImage,
    price: "$ 89,99",
    isAvailable: false,
  },
];

const smartphone = [
  {
    id: 1,
    tilte: "iPhone 12 Pro Max Unyu",
    price: "3,50",
    photo: laptopImage,
    discount: {
      isDiscount: true,
      discountPrice: "5.00",
    },
    isAvailable: true,
  },
  {
    id: 2,
    tilte: "iPhone 12 Pro Max Unyu",
    price: "3,50",
    photo: laptopImage,
    discount: {
      isDiscount: false,
      discountPrice: "5.00",
    },
    isAvailable: true,
  },
  {
    id: 3,
    tilte: "iPhone X 64GB - Garansi 1 Tahun",
    price: "3,50",
    photo: laptopImage,
    discount: {
      isDiscount: false,
      discountPrice: "5.00",
    },
    isAvailable: false,
  },
];

export { ratings, itemList, smartphone };
