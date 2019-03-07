// 1.uzd | Izveidot funkciju, kas apgriež doto teksta virkni apgrieztā secībā.
function reverseString(str) {
    return str.split("").reverse("").join("");
}
console.log(reverseString("Provided test cases! My name is Janis!"));

// 2.uzd | . Izveidot funkciju, kas salīdzina divus skaitļus un atgriež patiess, ja kāds no dotajiem skaitļiem vai to summa ir 5. Pretējā gadījumā atgriež nepatiess.
function compare(a, b) {
    if(a+b==5||a==5||b==5){
        return "Patiess"
    }
    else {
        return "Nepatisi"
    }
}
console.log(compare(4,5));

// 3.uzd | Izveidot funkciju, kas saskaita dotos masīva elementus un atgriež summu
const sum = [1, 2, 3].reduce(add);

function add(accumulator, a) {
    return accumulator + a;
}
console.log(sum);

// 4.uzd | Izveidot funkciju, kas saskaita masīva ar trim elementiem summu un atgriež to.Funkcijā ieviest pārbaudi, vai masīvā ir doti elementi, vai tie ir skaitļi un vai ir doti trīs elementi
let numbers1 = [45, 9, 25];
let sum2 = numbers1.reduce(myFunction);
function myFunction(total,value) {
    return total + value;
}
console.log(sum2);

//var numbers = [10,20,30]
//var sum2=0;
//for (var i=0; i < numbers.length; i++)

// 5.uzd | Izveidot funkciju, kura atgriež divu doto veselo skaitļu summu, ja tie nesakrīt vai trīskāršo skaitļu summu, ja tie sakrīt.
function summa(a,b){
    if (a!=b){
        return a+b;
    } else {
        return (a+b)*3;
    }
}
console.log(summa(5,5));

//6.uzd | Izveidot funkciju, kas saņem lietotāja vārdu un paroli. Ja kāds no mainīgajiem nav ievadīts vai paroles garums ir mazāks par 12 simboliem, izvada atbilstošo kļūdas paziņojumu.

function validate(string) {
    if(string.length < 12)
    {
        return false;
    }

    var rules = [
        /[a-z]/, //letters (lower-case)
        /[A-Z]/, //letters (upper-case)
        /\d/, //numbers (similar to /[0-9]/)
        /[!@#$&*]/ //some symbols
    ];

    return rules.filter(function(rule){
        return rule.test(string);
    }).length >= 12;
}