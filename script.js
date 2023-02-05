`use strict`;

const Car = function(wheelDrive) {
    this.wheelDrive = wheelDrive;
};

Car.prototype.mainWheels = function() {
    console.log(`This ${this.model} is ${this.wheelDrive} wheel drive!`);
};

const VolkswagenGroup = function(carBase, wheelDrive) {
    Car.call(this, wheelDrive);
    this.carBase = carBase;
};
VolkswagenGroup.prototype = Object.create(Car.prototype);
VolkswagenGroup.prototype.baseOfCar = function() {
    console.log(`This car based on ${this.carBase}`);
};

const Audi = function(model, engine, quoterMileTime, carBase, wheelDrive) {
    VolkswagenGroup.call(this, carBase, wheelDrive);
    this.model = model;
    this.engine = engine;
    this.quoterMileTime = quoterMileTime;
};
Audi.prototype = Object.create(VolkswagenGroup.prototype);
Audi.prototype.whatCar = function() {
    console.log(`This is good car model, because this is Audi ${this.model}`);
};
Audi.prototype.engineVersion = function() {
    console.log(`This Audi ${this.model} has engine - ${this.engine}`);
};

const Skoda = function(model, engine, maxSpeed, carBase, wheelDrive) {
    VolkswagenGroup.call(this, carBase, wheelDrive);
    this.model = model;
    this.engine = engine;
    this.maxSpeed = maxSpeed;
};
Skoda.prototype = Object.create(VolkswagenGroup.prototype);
Skoda.prototype.whatCar = function() {
    console.log(`This is good car model, because this is Skoda ${this.model}`);
};
Skoda.prototype.engineVersion = function() {
    console.log(`This Skoda ${this.model} has engine - ${this.engine}`);
};
Skoda.prototype.howFast = function() {
    console.log(`You think ${this.model} fast? The maximum speed is just ${this.maxSpeed}km/h`);
};

const Bmw = function(model, engine, weight, wheelDrive) {
    Car.call(this, wheelDrive);
    this.model = model;
    this.engine = engine;
    this.weight = weight;
};
Bmw.prototype = Object.create(Car.prototype);
Bmw.prototype.whatCar = function() {
    console.log(`This is good car model, because this is BMW ${this.model}`);
};
Bmw.prototype.engineVersion = function() {
    console.log(`This BMW ${this.model} has engine - ${this.engine}`);
};
Bmw.prototype.heavyCar = function() {
    console.log(`Really heavy car. The weight is - ${this.weight}kg`);
};
    
function Mercedes(model, engine, ac, price) {
    Car.call(this, "Rear");
    this.model = model;
    this.engine = engine;
    this.ac = ac;
    this.price = price;
};
Mercedes.prototype = Object.create(Car.prototype);
Mercedes.prototype.whatCar = function() {
    console.log(`This is good car model, because this is Mercedes ${this.model}`);
};
Mercedes.prototype.engineVersion = function() {
    console.log(`This Mercedes ${this.model} has engine - ${this.engine}`);
};
Mercedes.prototype.airConditioning = function() {
    console.log(`You worried about AC? This Mercedes ${this.model} ${this.ac}`);
};
Mercedes.prototype.carPrice = function() {
    console.log(`At this time, price for Mercedes ${this.model} is ${this.price}$`);
};

const A3 = new Audi("A3", "2.5 V4", 10.4, "Golf base", "All");
const Octavia = new Skoda("Octavia RS", "2.0 V6", 230, "Golf base", "Forward");
const Seven = new Bmw("745i", "4.4 V8", 1845);
const C280 = new Mercedes("C280", "3.0 V6", "has no AC", 7000);

A3.whatCar();
A3.engineVersion();

Octavia.whatCar();
Octavia.howFast();
Octavia.mainWheels();

Seven.whatCar();
Seven.heavyCar();

C280.whatCar();
C280.airConditioning();
C280.carPrice();