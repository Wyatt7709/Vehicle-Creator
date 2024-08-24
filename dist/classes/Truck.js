// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // Declare properties of the Truck class
    // The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
    // The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        // The constructor should call the constructor of the parent class, Vehicle
        super();
        this.wheels = [];
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        // The constructor should initialize the properties of the Truck class
        this.towingCapacity = towingCapacity;
        // The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(20, "Default"), new Wheel(20, "Default"), new Wheel(20, "Default"), new Wheel(20, "Default")];
        }
    }
    // Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        // Get the make and model of the vehicle if it exists
        // Check if the vehicle's weight is less than or equal to the truck's towing capacity
        if (vehicle.weight <= this.towingCapacity) {
            // If it is, log that the vehicle is being towed
            console.log(`Towing ${vehicle.make} ${vehicle.model} with a towing capacity of ${this.towingCapacity} lbs.`);
        }
        else {
            // If it is not, log that the vehicle is too heavy to be towed
            console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed by this truck.`);
        }
    }
    // Override the printDetails method from the Vehicle class
    printDetails() {
        // The method should call the printDetails method of the parent class
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Color: ${this.color}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        // The method should log the details of the Truck
        // The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
        console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
        console.log(`Wheels: ${this.wheels.map(wheel => `${wheel.getDiameter}" ${wheel.getTireBrand}`).join(", ")}`);
    }
}
// Export the Truck class as the default export
export default Truck;
