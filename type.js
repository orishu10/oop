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
//תרגול א
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.Info = function () {
        return "this is a shpe";
    };
    Shape.prototype.draw = function () {
        console.log("drawing a shape");
    };
    return Shape;
}());
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.draw = function () {
        console.log("drawing a triangle");
    };
    return Triangle;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("drawing a circle");
    };
    return Circle;
}());
var shapes = [new Triangle(), new Circle()];
function renderShapes(shapes) {
    shapes.forEach(function (element) {
        element.draw();
    });
}
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(hight, width) {
        var _this = _super.call(this) || this;
        _this.hight = hight;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.hight * this.width;
    };
    Rectangle.prototype.Info = function () {
        return "This is a Recktangle";
    };
    Rectangle.prototype.scale = function (parm) {
        this.hight *= parm;
        this.width *= parm;
        return this;
    };
    Rectangle.prototype.static = function (a, b) {
        return a.area() * b.area();
    };
    return Rectangle;
}(Shape));
var ColoredRectangle = /** @class */ (function (_super) {
    __extends(ColoredRectangle, _super);
    function ColoredRectangle(color, hight, width) {
        var _this = _super.call(this, hight, width) || this;
        _this.color = "blue";
        _this.color = color;
        return _this;
    }
    ColoredRectangle.prototype.Info = function () {
        return "this is a blue Recktangle ";
    };
    return ColoredRectangle;
}(Rectangle));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        return _super.call(this, length, length) || this;
    }
    return Square;
}(Rectangle));
// תרגול ב
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(firstName, lastName, patientID) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.patientID = patientID;
        return _this;
    }
    Patient.prototype.detailsPatiant = function (Patient) {
        console.log("".concat(Patient.firstName, ",' ',").concat(Patient.lastName, ",' ',").concat(Patient.patientID));
    };
    return Patient;
}(Person));
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(firstName, lastName, doctorID, specialization) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.doctorID = doctorID;
        _this.specialization = specialization;
        return _this;
    }
    Doctor.prototype.detailsDoc = function (Doctor) {
        console.log("".concat(Doctor.firstName, ",' ',").concat(Doctor.lastName, ",' ',").concat(Doctor.doctorID, "' ' ").concat(Doctor.specialization));
    };
    return Doctor;
}(Person));
