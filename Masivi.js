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

// *.uzd Pienienot masiva beigas jaunu elementu un sakartot to alfobetiska
arr.push("Skoda")
console.log(arr.sort())
// 11.uzd 

// 12.uzd