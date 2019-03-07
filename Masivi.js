let sp="____________________";
let arr=["Volvo", "BMW", "VW", "Opel", "Audi", "Lada", "VAZ"];
let arr1=arr.shift();
let arr2=arr.slice(1)
console.log(arr)
console.log(arr2)
let arr3=arr.slice(0,arr.length-1)
console.log(arr3)
console.log(sp)
//4uzd
arr.splice(2, 0, "Mercedes", "Honda")
let arr4=arr
console.log(arr)
console.log(arr.sort().reverse())
console.log(sp)
// 5.uzd
arr.forEach((el,index) => console.log("Masiva",index, "elements: ", el))
arr.map((el,index) => console.log("Masiva",index, "elements: ", el))
console.log(sp)

// 6.uzd Noteikt, vai dotais mainigais(ir) satur masivu (ir)
let isArray = Array.isArray(arr)
console.log(isArray)
// let isArray1=(arr instanceof Array) ? true : false
// Console.log(isArray1)
console.log(sp)

// 7.uzd Noteikt, vai masivs satur elementu "Mercedes" 
let arr6=arr.includes("Mercedes")
console.log(arr6)
if (arr.includes("BMW")){
    console.log('includes')
} else {console.log('do not includes')}
console.log(sp)

//8.uzd Noteikt elementa indeksu masina "Opel" | Parbaidit, vai tas atkarotojas
let indexofOpel=arr.indexOf("Opel")
let indexof2Opel=arr.lastIndexOf("Opel")
console.log('Index of Opel: ', indexofOpel)
if (indexofOpel==indexof2Opel){
    console.log("Element do not repeats")
} else {
    index3Opel=arr.slice(indexofOpel+1,indexof2Opel-1).indexOf("Opel")
    index4Opel=arr.slice(indexofOpel+1,indexof2Opel-1).lastIndexOf("Opel")
console.log("Element repeats")}
console.log(sp)

//9.uzd Apvienot masuvus un parveidot teksta virkne
let mass1=[1,2]
let mass2=[4,6,5]
let mas=mass1.concat(mass2).toString()
console.log(mas)
console.log(sp)

// *.uzd Pienienot masiva beigas jaunu elementu un sakartot to alfobetiska
arr.push("Skoda")
console.log(arr.sort())
console.log(sp)

// 11.uzd iveidot objektu. Human: FirstName, LastName, DateOfBirth, Gender, TripPlace | pievienot/izveidot objekta metodi kas izvada sadu info par objektu: FirstName, LastName, DateOfBirth. 2. Nomaina vardu.
var person = {
    FirstName:"John",
    LastName:"Doe",
    DateOfBirth:"10.10.2001",
    Gender:"Male",
    TripPlace:['Latvia', 'Italy', 'Spain', 'Turky'],
 fullName : function() {
     return this.FirstName + " " + this.LastName + " " + this.DateOfBirth;
 },  
 changeName : function(name) {
     this.FirstName=name;
 },
 addTrip : function(trip) {
     this.TripPlace.push(trip)
 },
 printTrips : function() {
     return this.TripPlace;
 }
};
console.log(person.fullName());
person.changeName('Walter');
console.log(person.fullName());
person.addTrip("Heaven");
console.log(person.TripPlace)
console.log(person.printTrips());
console.log(sp)

// 11.4 uzd Pievienot jaunu celojmu vietu esosaja saraksta
person.TripPlace.push("Hell");
console.log(person.TripPlace)
console.log(sp)

// 12.uzd Izveidot class
class Person{
    constructor(FirstName, LastName, DateOfBirth, Gender, TripPlace){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DateOfBirth = DateOfBirth;
        this.Gender = Gender;
        this.TripPlace = TripPlace || [];

    }
    get fullName() {
        return this.FirstName + " " + this.LastName + " " + this.DateOfBirth + " " + this.Gender + " " + this.TripPlace
    }
    set fullName(name){
        [this.FirstName,this.LastName]= name.split(' ');
    }
}
let TripPlace = ['Lithuania', 'USA', 'USSR']
let Human = new Person("Jake", "Doke", "25.12.1949", "Female", TripPlace);
console.log(Human.fullName);
Human.fullName = "Alt Mador";
console.log(Human.fullName);
console.log(sp)

class Female extends Person{
    constructor(FirstName,LastName,DateOfBirth){
        super();
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.DateOfBirth = DateOfBirth;
        this.Gender='Female';
    }
}
let girl = new Female('Elizabeth', 'Teilor', '10.10.2000');
console.log(girl.fullName);
console.log(sp)