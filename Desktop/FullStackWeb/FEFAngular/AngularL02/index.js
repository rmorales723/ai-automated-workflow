"use strict";
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    perimeter() {
        return this.height * 2 + this.width * 2;
    }
}
const myYard = new Rectangle(24, 32);
console.log(myYard.perimeter());
