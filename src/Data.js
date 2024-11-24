import menuImage1 from "./assets/images/menu-1.png";
import menuImage2 from "./assets/images/menu-2.png";
import menuImage3 from "./assets/images/menu-3.png";
import menuImage4 from "./assets/images/menu-4.png";
import menuImage5 from "./assets/images/menu-5.png";
import menuImage6 from "./assets/images/menu-6.png";
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import productImage1 from "./assets/images/product-1.png";
import productImage2 from "./assets/images/product-3.png";
import productImage3 from "./assets/images/product-3.png";
import reviewImage1 from "./assets/images/pic-1.png";
import reviewImage2 from "./assets/images/pic-1.png";
import reviewImage3 from "./assets/images/pic-1.png";
import blogImage1 from "./assets/images/blog-1.jpeg";
import blogImage2 from "./assets/images/blog-2.jpeg";
import blogImage3 from "./assets/images/blog-3.jpeg";
const menu = [
  {
    img: menuImage1,
  },
  {
    img: menuImage2,
  },
  {
    img: menuImage3,
  },
  {
    img: menuImage4,
  },
  {
    img: menuImage5,
  },
  {
    img: menuImage6,
  },
];

const cart = [
  {
    img: cartImage1,
  },
  {
    img: cartImage2,
  },
  {
    img: cartImage3,
  },
  {
    img: cartImage4,
  },
];

const product = [
  {
    img: productImage1,
  },
  {
    img: productImage2,
  },
  {
    img: productImage3,
  },
];
const review = [
  {
    img: reviewImage1,
  },
  {
    img: reviewImage2,
  },
  {
    img: reviewImage3,
  },
];
const blog = [
  {
    img: blogImage1,
  },
  {
    img: blogImage2,
  },
  {
    img: blogImage3,
  },
];

// const menuList = [
//   {
//     name: "Chicken Tandoori",
//     price: "Rs. 290/180",
//     category: "starter"
//   },
//   {
//     name: "Butter Tandoori",
//     price: "Rs. 400/230",
//     category: "starter"
//   },
//   {
//     name: "Afgani Tandoori",
//     price: "Rs. 400/240",
//     category: "starter"
//   },
//   {
//     name: "Chicken Tikka",
//     price: "Rs. 190",
//     category: "starter"
//   },
//   {
//     name: "Angara Tikka",
//     price: "Rs. 200",
//     category: "starter"
//   },
//   {
//     name: "Sholay Kabab",
//     price: "Rs. 210",
//     category: "starter"
//   },
//   {
//     name: "Malayi Tikka",
//     price: "Rs. 200",
//     category: "starter"
//   },
//   {
//     name: "Chicken Leg",
//     price: "Rs. 110",
//     category: "starter"
//   },
//   {
//     name: "Chicken Garlic Kebab",
//     price: "Rs. 220",
//     category: "starter"
//   },
//   {
//     name: "Roasted Kebab",
//     price: "Rs. 210",
//     category: "starter"
//   },
//   {
//     name: "Chicken Lasoni Kebab",
//     price: "Rs. 200",
//     category: "starter"
//   },
//   {
//     name: "Chicken Achari Kebab",
//     price: "Rs. 200",
//     category: "starter"
//   },
//   {
//     name: "Resmi Kebab",
//     price: "Rs. 200",
//     category: "starter"
//   },
// ];
const menuList = [
  {
    name: "Chicken Tandoori",
    price: "Rs. 290(8 piece)/180(4 piece)",
    category: "Starter"
  },
  {
    name: "Butter Tandoori",
    price: "Rs. 400(8 piece)/230(4 piece)",
    category: "Starter"
  },
  {
    name: "Afgani Tandoori",
    price: "Rs. 400(8 piece)/240(4 piece)",
    category: "Starter"
  },
  {
    name: "Chicken Tikka",
    price: "Rs. 190",
    category: "Starter"
  },
  {
    name: "Angara Tikka",
    price: "Rs. 200",
    category: "Starter"
  },
  {
    name: "Sholay Kabab",
    price: "Rs. 210",
    category: "Starter"
  },
  {
    name: "Malayi Tikka",
    price: "Rs. 200",
    category: "Starter"
  },
  {
    name: "Chicken Leg",
    price: "Rs. 110",
    category: "Starter"
  },
  {
    name: "Chicken Garlic Kebab",
    price: "Rs. 220",
    category: "Starter"
  },
  {
    name: "Roasted Kebab",
    price: "Rs. 210",
    category: "Starter"
  },
  {
    name: "Chicken Lasoni Kebab",
    price: "Rs. 200",
    category: "Starter"
  },
  {
    name: "Chicken Achari Kebab",
    price: "Rs. 200",
    category: "Starter"
  },
  {
    name: "Resmi Kebab",
    price: "Rs. 200",
    category: "Starter"
  },
  {
    name: "Beef Achar Ghosh",
    price: "Rs. 90(serve 2)",
    category: "Gulbarga specials"
  },
  {
    name: "Beef Kheema Masala",
    price: "Rs. 90(serve 1)",
    category: "Gulbarga specials"
  },
  {
    name: "Beef Kheema Fry",
    price: "Rs. 90(serve 1)",
    category: "Gulbarga specials"
  },
  {
    name: "Methi Kheema",
    price: "Rs. 100",
    category: "Gulbarga specials"
  },
  {
    name: "Bheja Fry",
    price: "Rs. 100",
    category: "Gulbarga specials"
  },
  {
    name: "Beef Seekh Kebab",
    price: "Rs. 80(2 piece)",
    category: "Gulbarga specials"
  },
  {
    name: "Tawa Ghosh",
    price: "Rs. 100(serve 2)",
    category: "Gulbarga specials"
  },
  {
    name: "Chicken Masala",
    price: "Rs. 100(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Khorma",
    price: "Rs. 100(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Sukha",
    price: "Rs. 100(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Fry",
    price: "Rs. 100(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Hyderabadi",
    price: "Rs. 110(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Haryali",
    price: "Rs. 110(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Makhni",
    price: "Rs. 120(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Moghlai",
    price: "Rs. 120(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Kolhapuri",
    price: "Rs. 120(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Banjara",
    price: "Rs. 120(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Kadhai",
    price: "Rs. 100(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Afghani",
    price: "Rs. 120(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Bhuna",
    price: "Rs. 110(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken-Do-Pyza",
    price: "Rs. 120(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Butter Chicken",
    price: "Rs. 140(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Chilly Dry",
    price: "Rs. 130(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Angara",
    price: "Rs. 130(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Murgh Musallam",
    price: "Rs. 480(serve 6)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Lazizi",
    price: "Rs. 250(serve 3)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Lajawab",
    price: "Rs. 160(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Maharaja",
    price: "Rs. 160(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Dhamaka",
    price: "Rs. 160(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Garlic Angara",
    price: "Rs. 130(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Garlic Bhuna",
    price: "Rs. 130(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Garlic Kolhapuri",
    price: "Rs. 130(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Garlic Talawa",
    price: "Rs. 130(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Shahi",
    price: "Rs. 160(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Gulbarga Special",
    price: "Rs. 120(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Kadhai Special",
    price: "Rs. 120(serve 2)",
    category: "Chicken Gravy's"
  },
  {
    name: "Chicken Handi",
    price: "Rs. 200(serve 3)/300(serve 6)",
    category: "Chicken Gravy's"
  },
  {
    name: "Beef Masala",
    price: "Rs. 100(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Khorma",
    price: "Rs. 100(serve 2)",
    category: "Beef Gravy's"
   },
  {
    name: "Beef Sukha",
    price: "Rs. 100(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Fry",
    price: "Rs. 100(serve 1)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Hyderabadi",
    price: "Rs. 110(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Haryali",
    price: "Rs. 110(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Makhni",
    price: "Rs. 120 (serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Moghlai",
    price: "Rs. 120(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Kolhapuri",
    price: "Rs. 120(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Banjara",
    price: "Rs. 120(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Kadhai",
    price: "Rs. 110(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Afghani",
    price: "Rs. 120(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Bhuna",
    price: "Rs. 110(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef-Do-Pyza",
    price: "Rs. 120(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Butter Beef",
    price: "Rs. 140(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Chilly Dry",
    price: "Rs. 130(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Angara",
    price: "Rs. 130(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Lazizi",
    price: "Rs. 250(serve 3)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Lajawab",
    price: "Rs. 160(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Maharaja",
    price: "Rs. 160(serve 2)",
    category: "Beef Gravy's"
   }, 
   {
    name: "Beef Dhamaka",
    price: "Rs. 160(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Garlic Angara",
    price: "Rs. 130(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Garlic Bhuna",
    price: "Rs. 130(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Garlic Kolhapuri",
    price: "Rs. 130(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Garlic Talawa",
    price: "Rs. 130(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Shahi",
    price: "Rs. 160(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Gulbarga Special",
    price: "Rs. 120(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Kadhai Special",
    price: "Rs. 120(serve 2)",
    category: "Beef Gravy's"
   },
   {
    name: "Beef Handi",
    price: "Rs. 200(serve 3)/300(serve 6)",
    category: "Beef Gravy's"
   },
   {
    name: "Dal Fry",
    price: "Rs. 100(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Dal Tadka",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Dal Kolhapuri",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Butter Dal Fry",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Mix Veg Masala",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Veg Makhni",
    price: "Rs. 110(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Veg Kadhai",
    price: "Rs. 110(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Veg Rost",
    price: "Rs. 110(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Veg Kolhapuri",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Veg Fry",
    price: "Rs. 100(serve 2)",
    category: "Veg Gravy's"
   },   
   {
   
    name: "Veg-Do-Pyza",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Butter Veg masala",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   
   {
    name: "Veg Angara",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Veg Lajawab",
    price: "Rs. 140(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Veg Shahi",
    price: "Rs. 130(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer Masala",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer Khorma",
    price: "Rs. 110(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer Hyderabadi",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer Haryali",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer Makhni",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer Kadhai",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer-Do-Pyza",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Butter Paneer Masala",
    price: "Rs. 140(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer Angara",
    price: "Rs. 120(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer Lazizi",
    price: "Rs. 250(serve 3)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer Lajawab",
    price: "Rs. 160(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Mutter Paneer",
    price: "Rs. 140(serve 2)",
    category: "Veg Gravy's"
   }, 
   {
    name: "Paneer Shahi",
    price: "Rs. 140(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Paneer Kaju Masala",
    price: "Rs. 140(serve 2)",
    category: "Veg Gravy's"
   }, 
   {
    name: "Green Peas Masala",
    price: "Rs. 140(serve 2)",
    category: "Veg Gravy's"
   },
   {
    name: "Egg Masala",
    price: "Rs. 100(serve 2)",
    category: "Egg Gravy's"
   },
   {
    name: "Egg Makhni",
    price: "Rs. 110(serve 2)",
    category: "Egg Gravy's"
   },
   {
    name: "Egg Curry",
    price: "Rs. 110(serve 2)",
    category: "Egg Gravy's"
   },
   {
    name: "Egg Butter Masala",
    price: "Rs. 120(serve 2)",
    category: "Egg Gravy's"
   },
   {
    name: "Tandoori Roti",
    price: "Rs. 15",
    category: "Roti"
   },
   {
    name: "Shahi Paratha",
    price: "Rs. 15",
    category: "Roti"
   },
   {
    name: "Butter Tandoori Roti",
    price: "Rs. 25",
    category: "Roti"
   },
{
    name: "Butter Shahi Paratha",
    price: "Rs. 20",
    category: "Roti"
   },{
    name: "Plain Nan",
    price: "Rs. 40",
    category: "Roti"
   },{
    name: "Butter Nan",
    price: "Rs. 50",
    category: "Roti"
   },{
    name: "Butter Garlic Nan",
    price: "Rs. 75",
    category: "Roti"
   },{
    name: "Cheese Garlic Nan",
    price: "Rs. 90",
    category: "Roti"
   },{
    name: "Chapati",
    price: "Rs. 10",
    category: "Roti"
   },
   {
    name: "Beef Tahari",
    price: "Rs. 60",
    category: "Rice"
   },
   {
    name: "Beef Biryani",
    price: "Rs. 70",
    category: "Rice"
   },
   {
    name: "Chicken Biryani",
    price: "Rs. 70",
    category: "Rice"
   },
   {
    name: "Mix Veg Pulao",
    price: "Rs. 130",
    category: "Rice"
   },
   {
    name: "Green Peas Pulao",
    price: "Rs. 130",
    category: "Rice"
   },{
    name: "Plain Rice ",
    price: "Rs. 60",
    category: "Rice"
   },
   {
    name: "Jeera Rice",
    price: "Rs. 80",
    category: "Rice"
   },
   {
    name: "Dal Khichadi",
    price: "Rs. 140",
    category: "Rice"
   },
   {
    name: "Chicken Haleem",
    price: "Rs. 80(serve 1)",
    category: "Special's"
   },
   {
    name: "Beef Dalcha Khana",
    price: "Rs. 100(serve 2)",
    category: "Special's"
   },
   {
    name: "Only Dalcha",
    price: "Rs. 80(serve 2)",
    category: "Special's"
   },
   {
    name: "Only Dalcha Rice",
    price: "Rs. 60(serve 1)",
    category: "Special's"
   },
   {
    name: "Beef Patiyala",
    price: "Rs. 350(serve 4)",
    category: "Special's"
   },
   {
    name: "Chicken Patiyala",
    price: "Rs. 350(serve 4)",
    category: "Special's"
   },
   {
    name: "Beef Kofta Masala",
    price: "Rs. 160(serve 4)",
    category: "Special's"
   },
   {
    name: "Chicken Lahori",
    price: "Rs. 160(serve 2)",
    category: "Special's"
   },
   {
    name: "Chicken Peshawari",
    price: "Rs. 380(serve 5)",
    category: "Special's"
   },
   {
    name: "Beef Peshawari",
    price: "Rs. 380(serve52)",
    category: "Special's"
   }, 
   {
    name: "Shahi Tukda",
    price: "Rs. 70(serve 2)/40(serve 1)",
    category: "Sweet"
   },
   {
    name: "Mango Rabadi",
    price: "Rs. 60",
    category: "Sweet"
   },
   {
    name: "Gulbarga Mawa Puri",
        category: "Sweet"
   },
];
export { menu, cart, product, review, blog, menuList };
