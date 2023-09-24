//------------inheritance and super() keyword------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        this.speed = speed;
        console.log("This is constructor being called");
    }
    Vehicle.prototype.accelerate = function () {
        console.log("Accelerating to ".concat(this.speed, " km/h"));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(speed, brand) {
        var _this = _super.call(this, speed) || this;
        _this.brand = brand;
        return _this;
    }
    Car.prototype.honk = function () {
        console.log("Honking the horn of my ".concat(this.brand, " car!"));
    };
    return Car;
}(Vehicle));
var Honda = new Vehicle(500).accelerate();
