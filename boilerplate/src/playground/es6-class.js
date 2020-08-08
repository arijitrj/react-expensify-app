class Person {
    constructor(name , age = 0){
        this.name = name ;
        this .age = age;
    }
    getGrettings(){
        if (this.age>10){
        return `${this.name} is ${this.age} years old `;
    }else {
        return `${this.name} is ${this.age} year old `;
    }
}
}

class Student extends Person {

    constructor(name , age , major){
        super(name ,age);
        this.major = major;
        
}
hasMajor(){
    return !!this.major;
}

}

class Traveler extends Person{
    constructor (name , age , homelocation){
        super(name , age );
        this.homelocation = homelocation ; 
    }
homeLocation(){
    return !!this.homelocattion;
}
getGrettings(){
    let description=super.getGrettings();
    
    if (this.homelocation){
        description +=`is comming from ${this.homelocation}`;
        
    }
   return description ;
}

}
const me = new Traveler("arijit" , 23 ,"india" ); 
console.log(me.getGrettings());
