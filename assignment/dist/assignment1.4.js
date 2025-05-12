"use strict";
{
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            return `Model ${this.model}`;
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
    console.log(myCar.getModel()); // Output: "Model: Corolla"
}
