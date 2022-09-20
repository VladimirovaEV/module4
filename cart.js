// const Goods = function(price, title, discount) {
//     this.price = price;
//     this.title = title;
//     this.discount = discount;
// }
// Goods.prototype.foodGoods = function(calories) {
//    return this.calories = calories;
// }
// Goods.prototype.clothingGoods = function(material) {
//    return this.material = material;
// }
// Goods.prototype.technicsGoods = function(typeOftechnics) {
//    return this.typeOftechnics = typeOftechnics;
// }
// const apple = new Goods(10, 'apple', 0);
// const pineapple = new Goods(20, 'pineapple', 0);

// function Cart(array = []) {
//   (this.goods = array), (this.totalPrice = 0), (this.count = 0);
// }

// Cart.prototype.calculateGoodsPrice = function (arr) {
//   const sum = arr.reduce((acc, num) => acc + num);
//   this.totalPrice = sum;
// };

// Cart.prototype.increaseCount = function (num) {
//   this.count = num;
//   console.log('countGoods: ', this.count);
// };

// Cart.prototype.addGoods = function (obj) {
//   this.goods.push(obj);
// };

// Cart.prototype.getTotalPrice = function () {
//   return this.totalPrice;
// };

// Cart.prototype.clear = function () {
//   (this.goods = array), (this.totalPrice = 0), (this.count = 0);
// };

// Cart.prototype.print = function (items = this.goods) {
//   let sum = [];
//   let num = 0;
//   items.forEach((item) => {
//     num++;
//     sum.push(item.price * item.goodCount);
//     console.log('item: ', JSON.stringify(item));
//   });

//   this.increaseCount(num);
//   this.calculateGoodsPrice(sum);
//   console.log('TotalPrice: ', this.getTotalPrice());
// };

// const cart = new Cart();
// cart.addGoods(apple);
// cart.print();

// const Cart = function(array = []) {
//         this.totalPrice = 0;
//         this.count = 0;
//         this.goods = array;
// }
// const cart = new Cart(apple);
// cart.addGoods(pineapple);

// Cart.prototype.addGoods = function(obj) {
//             this.goods.push(obj);
//             this.increaseCount(1);
//             // cart.totalPrice;
//             return this.goods
// };

// Cart.prototype.increaseCount = function(num) {
//         this.count = this.count + num;
//         return this.count;
// };

//         this.calculateItemPrice = function() {
//         let value = 0;
//         this.goods.forEach((good) => {
//             value += good.price * good.quantity;
//         })
//         return value;
//         };
//         this.getTotalPrice = function() {
//         return this.totalPrice = this.calculateItemPrice();
//         };
//         this.clear = function() {
//         const keys = Object.values(Cart);
//         for (const key of keys) {
//             this.goods.length = 0;
//             this.totalPrice = 0;
//             this.count = 0;
//         }
//         };
//         this.print = function() {
//         console.log(JSON.stringify(this.goods));
//         console.log(Cart.totalPrice);
//         };



// const cart = {
//     items: [],
//     totalPrice: 0,
//     count: 0,
//     add(itemName, itemPrice, itemQuantity = 1) {
//         const item = {itemName: itemName, itemPrice: itemPrice, itemQuantity: itemQuantity};
//         this.items.push(item);
//         this.increaseCount(itemQuantity);
//         cart.totalPrice;
//         return this.items
        
//     },
//     increaseCount(num) {
//         this.count = this.count + num;
//         return this.count;
//     },
//     calculateItemPrice() {
//         let value = 0;
//         this.items.forEach((item) => {
//             value += item.itemPrice * item.itemQuantity;
//         })
//         return value;
//     },
//     getTotalPrice() {
//         return this.totalPrice = this.calculateItemPrice();
//     },
//     clear() {
//         const keys = Object.values(cart);
//         for (const key of keys) {
//             this.items.length = 0;
//             this.totalPrice = 0;
//             this.count = 0;
//         }
//     },
//     print() {
//         console.log(JSON.stringify(this.items));
//         console.log(cart.totalPrice);
//     }
// }

// cart.add('apple', 2, 3);
// cart.add('book', 10, 2);
// cart.add('pen', 3, 5);
// cart.print();
//cart.clear();

function Cart(array = []) {
  this.goods = array,
  this.totalPrice = 0,
  this.count = 0;
}

Cart.prototype.calculateGoodsPrice = function (arr) {
  const sum = arr.reduce((acc, num) => acc + num);
  this.totalPrice = sum;
};

Cart.prototype.increaseCount = function (num) {
  this.count = num;
};

Cart.prototype.addGoods = function (obj) {
  this.goods.push(obj);
};

Cart.prototype.getTotalPrice = function () {
  return this.totalPrice;
};

Cart.prototype.clear = function () {
  this.goods = array,
  this.totalPrice = 0,
  this.count = 0;
};

Cart.prototype.print = function (items = this.goods) {
  let sum = [];
  let num = 0;
  items.forEach((item) => {
    num++;
    sum.push(item.price * item.goodCount);
    console.log('item: ', JSON.stringify(item));
  });
  this.increaseCount(num);
  this.calculateGoodsPrice(sum);
  console.log('TotalPrice: ', this.getTotalPrice());
};

const cart = new Cart();

function Goods(price = 0, title = '', goodCount = 0, discount = 0) {
    this.price = price,
    this.title = title,
    this.goodCount = goodCount,
    this.discount = discount;
}

const goods = new Goods();

function FoodGoods(price, title, goodCount = 0, discount, calories) {
  Goods.call(this, price, title, goodCount, discount);
  this.calories = calories;
}

const foodGoods = new FoodGoods(50, 'Bread', 500, 10, 250);
cart.addGoods(foodGoods);

function СlothingGoods(price, title, goodCount = 0, discount, material) {
  Goods.call(this, price, title, goodCount, discount);
  this.material = material;
}

const clothingGoods = new СlothingGoods(100, 'Dress', 23, 10, 'silk');
cart.addGoods(clothingGoods);

function TechnicsGoods(price, title, goodCount = 0, discount, type) {
  Goods.call(this, price, title, goodCount, discount);
  this.type = type;
}

const technicsGoods = new TechnicsGoods(1000, 'TV', 8, 15, 'electro');
cart.addGoods(technicsGoods);

cart.print();