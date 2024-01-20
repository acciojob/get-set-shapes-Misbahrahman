class Rectangle {
	constructor(width , height){
        this.width = width;
        this.height = height;
    }

    get Width(){
        return this.width;
    }

    get Heigth(){
        return this.height;
    }

    getArea(){
        return this.height * this.width;
    }
}


class Square extends Rectangle{
    constructor(width){
        super(width);
    }

    getPerimeter(){
        return 4 * this.width;
    }
}


// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
