function quantityDiscount(quantity, price) {
  price *= quantity;

  if (quantity >= 10) {
    price = price - price * 0.2;
  } else if (quantity >= 5) {
    price = price - price * 0.15;
  }

  price = price + price * 0.11;

  return price; // TODO: replace this
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
