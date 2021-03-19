"use strict";
function Car(carModel, engineVolume, yearBirth) {
  this.carModel = carModel;
  this.engineVolume = engineVolume;
  this.yearBirth = yearBirth;
};

let car = new Car('Audi', 3, 2020);

console.log(car);