const fullName = "Arijit Bhattacharya";

/*const getName = (x)=>{

    const name = x.split(" ")[0];
    return name ;
}*/

const user = {
    name : "Arijit" ,
    cities : ["kolkata" , "mumbai" , "chennai"] ,

    printPlacesLived (){
        const cityMessage = this.cities.map((city)=>{
            return this.name +"has lived " +city ;
        })
        return cityMessage;
    }
} ;

console.log(user.printPlacesLived());

const multiplier = {
    numbers : [4 , 3 , 2] ,
    multiplyBy : 8 ,
    multiply(){
        const newAray = this.numbers.map((num)=>{
            return this.multiplyBy * num ;
        })
        return newAray ;
    }


};
console.log(multiplier.multiply());
