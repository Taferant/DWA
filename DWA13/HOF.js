const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Exercise 1: Names using forEach
console.log("Exercise 1: Names using forEach:");
names.forEach(name => {
  console.log(name);
});


// Exercise 2: Names with Matching Provinces using forEach
console.log("Exercise 2: Names with Matching Provinces using forEach:");
names.forEach((name, res) => {
  console.log(`${name} (${provinces[res]})`);
});

// Exercise 3: Uppercase Province Names using map
console.log("Exercise 3: Uppercase Province Names using map:");
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Exercise 4: Number of Characters in Each Name using map
console.log("Exercise 4: Number of Characters in Each Name using map:");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Exercise 5: Sorted Provinces using sort
console.log("Exercise 5: Sorted Provinces using sort:");
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// Exercise 6: Filtered Provinces without 'Cape' using filter
console.log("Exercise 6: Filtered Provinces without 'Cape' using filter:");
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
const provincesLeft = filteredProvinces.length;
console.log(provincesLeft);

// Exercise 7: Boolean Array for 'S' Character in Names using map and some
console.log("Exercise 7: Boolean Array for 'S' Character in Names using map and some:");
const containsS = names.map(name => name.includes("S"));
console.log(containsS);

// Exercise 8: Object Mapping Names to Provinces using reduce
console.log("Exercise 8: Object Mapping Names to Provinces using reduce:");
const nameProvinceMap = names.reduce((result, name, index) => {
  result[name] = provinces[index];
  return result;
}, {});
console.log(nameProvinceMap);

// Additional Exercise: Calculate Total Price of Products with Valid Prices
console.log("Additional Exercise: Calculate Total Price of Products with Valid Prices");
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

const validPrices = products.filter(product => !isNaN(parseFloat(product.price)));
const totalPrice = validPrices.reduce((sum, product) => sum + parseFloat(product.price), 0);
console.log(totalPrice);