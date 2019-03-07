class Human{
    constructor(name,gender,dateOfBirth){
        this.name=name;
        this.gender=gender;
        this.dateOfBirth=dateOfBirth;
    }
set Name(name){
    this.name=name;
    }   
get Name(){
    return this.name + ' ' + this.dateOfBirth;
    }
    changeGender(gender){
        this.gender=gender;
    }
}
let person = new Human("Walter", "male", "01.01.2000");
console.log(person);
person.Name = 'Suzan';
person.changeGender('female');
console.log(person);

class Female extends Human{
    constructor(name,dateOfBirth,eyeColor){
        super(name,'female',dateOfBirth);
        this.eyeColor=eyeColor;
    }
}

let girl = new Female('Liza', '02.02.2000', 'blue');
console.log(girl);
girl.Name='Elizabeth';
console.log(girl);