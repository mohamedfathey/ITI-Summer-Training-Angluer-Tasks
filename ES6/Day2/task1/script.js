class sheap {
    constructor() {
		if (this.constructor == sheap) {
			throw "can't take an object from abstract class";
		}
    
	}
    
    erea() {        
        throw "erea Method not implemented";
	}

    ocean(){
        throw "Ocean method not  implemented";
    }    
}

class square extends sheap{
    constructor(){
        super();
    }

    erea( x ){
        return x*x ;
    }
    ocean (x){
        return x*4;
    }
}
let ereaSquare  = new square() ;
console.log( ereaSquare.erea(5));

let oceanSquare = new square() ;
console.log(oceanSquare.ocean(5));
console.log("--------------------------------");

class rectangular extends sheap{
    constructor(){
        super();
    }
    erea( x , y){
        return x*y ;
    }
    ocean (x,y){
        return (x+y)*2;
    }
}

let ereaRectangular  = new rectangular() ;
console.log( ereaRectangular.erea(5,6));

let oceanRectangular = new rectangular() ;
console.log(oceanRectangular.ocean(5,6));
console.log("--------------------------------");


class circle extends sheap{
    constructor(){
        super();
    }
    erea(x){
        return 3.14*x*x ;
    }
    ocean (x){
        return 2*3.14*x;
    }
}

let ereaCircle  = new circle() ;
console.log( ereaCircle.erea(5));

let oceanCircle = new circle() ;
console.log(oceanCircle.ocean(5));
