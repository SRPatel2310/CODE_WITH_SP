// Car Object make,model, year.  add a method to car object  to start engine

let car = {
  make: "toyta",
  model: "scropio",
  year: 2020,
};

car.startEngine = function () {
  console.log("Engine started");
};
car.startEngine();
console.log(car)