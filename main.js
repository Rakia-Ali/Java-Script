// let = Number=90;
// Number+=78;
// document.write(Number);

// let Name="Rakia";
// document.write(Name);

// let number=1;
// document.write("1" + number);

// let Name= "Rakia";
// let num= 9;
// document.write("There was once a woman called ",Name,"<br>")
// document.write("She was ",num," years old ",num,"<br>")
// document.write("She liked her name ",Name, " But <br>")
// document.write("She did not like being " ,num," years old")

// let num1= 6
// let num2= 4
// document.write(num1 + num2,"<br>")
// document.write(num1 - num2,"<br>")
// document.write(num1 * num2,"<br>")
// document.write(num1 / num2,"<br>")
// document.write(num1 % num2,"<br>")

// let num=6
// num++
// num--
// document.write(num)


// let isPassed = true

// if(isPassed == false){
//     document.write("You will have a car as gift")
// }
// else{
//     document.write("Failed!")
// }

// let Password = "pass1290"

// if( Password == "pass129"){
//     document.write("Successful Login , Welcome")
// }
// else{
//     document.write("Password is Incorrect!")
// }

// let age = 15
// if(age > 14){
//     document.write("You are adult")
// }
// else{
//     document.write("You are little child")
// }

// let age = 18
// if(age >= 18){
//     document.write("You can drive a car")
// }
// else{
//     document.write("You can not drive")
// }

// let marks = 50
// if(marks <= 49){
//     document.write("You are failed")
// }
// else{
//     document.write("You are passed")
// }

// let marks = 50
// if(marks != 50){
//     document.write("You are failed")
// }
// else{
//     document.write("You are passed")
// }

// let sub1 = 100
// let sub2 = 100
// if(sub1==100 && sub2==100){
//     document.write("You will have a Car gift")
// }
// else{
//     document.write("You failled!")
// }

// let sub3 = 100
// let sub4 = 90
// if(sub3==100 || sub4==100){
//     document.write("Passed")
// }
// else{
//     document.write("failled")
// }

// let marks = 90
// if (marks == 100) {
//     document.write("Grade A")
// }
// else if (marks == 90) {
//     document.write("Grade B")
// }
// else if (marks == 80) {
//     document.write("Grade C")
// }
// else if (marks == 70) {
//     document.write("Grade D")
// }
// else {
//     document.write("Failled")

// }

// let marks = 50
// if(marks == 100){
//     document.write("Grade A")
// }
// else if(marks >= 90 && marks<100){
//     document.write("Grade A-")
// }
// else if(marks >= 70 && marks<=80){
//     document.write("Grade B")
// }
// else if(marks >= 50 && marks<=60){
//     document.write("Grade C")
// }
// else if(marks>100){
//     document.write("Unknown grade")
// }
// else if(marks<50){
//     document.write("Failed!")
// }

// let name = prompt("Enter your Name")
// document.write("Hi ", name)

// let num1 = parseInt (prompt("Enter Num one"))
// let num2=  parseInt (prompt("Enter Num two"))
// document.write(num1 + num2)

// let password = parseInt(prompt("Enter a Password"))
// if (password == 8090) {
//     let option = ["1. Anfac Gudaha", "2. Anfac Gudaha Iyo Dibada", "3. Anfac dibada 32 dal", "4. Anfac SMS", "5. Back"]
//     const userChoice = prompt("Fadlan dooro : \n" + option.join("\n"))

//     if (userChoice == 1) {
//         let xirmo = ["1. Xirmo USD1", "2. Xirmo USD5", "3. Xirmo USD10",
//             "4. Xirmo USD20", "5. Xirmo USD50", "6. Xirmo 90 Sinti", "7. Xirmo 50 Sinti . Back Next:99"]
//         let xirmoChoice = prompt("Fadlan dooro Xirmo : \n" + xirmo.join("\n"))

//         if (xirmoChoice == 1) {
//             let xaqiijin = ["1. Maya", "2. Haa"]
//             let text = prompt("Ma hubtaa inaa ku shubatid Xirmada 1 USD ? \n " + xaqiijin.join("\n"))

//             if (text == 2) {
//                 document.write("Waxa heshay 100 daqiiqo oo Anfac")
//             }
//             else {
//                 document.write("Haraaga xisaabtada kuguma filna")
//             }
//         }


//     }


//     if (userChoice == 2) {
//         let dibadaXirmo = ["1. Xirmo USD5", "2. Xirmo USD10", "3. Xirmo USD20",
//             "4. Xirmo USD50", "0. Back"]
//         let dibadaChoice = prompt("Fadlan dooro Xirmo : \n" + dibadaXirmo.join("\n"))

//         if (dibadaChoice == 1) {
//             let xaqiijin1 = ["1. Maya", "2. Haa"]
//             let text1 = prompt("Ma hubtaa inaa ku shubatid Xirmada 5 USD ? \n " + xaqiijin1.join("\n"))

//             if (text1 == 2) {
//                 document.write("Waxa heshay 500 daqiiqo oo dibada ah")
//             }
//             else {
//                 document.write("Haraaga xisaabtada kuguma filna")
//             }
//         }
//     }


//     if (userChoice == 3) {
//         let dibadaXirmo3 = ["1. Xirmo USD5", "2. Waddamada dibada", "3. Xirmo USD10",
//             "4. Xirmo USD20", "5. Xirmo USD50", "0. Back"]
//         let dibadaChoice3 = prompt("Fadlan dooro Xirmo : \n" + dibadaXirmo3.join("\n"))

//         if (dibadaChoice3 == 1) {
//             let xaqiijin3 = ["1. Maya", "2. Haa"]
//             let text3 = prompt("Ma hubtaa inaa ku shubatid Xirmada 5 USD ? \n " + xaqiijin3.join("\n"))

//             if (text3 == 2) {
//                 document.write("Waxa heshay 500 daqiiqo oo dibada ah 32 dal.")
//             }
//             else {
//                 document.write("Haraaga xisaabtada kuguma filna")
//             }
//         }

//     }


//     if (userChoice == 4) {
//         let sms = ["1. Xirmo 50 centi Gudaha", "2. Xirmo USD1 Gudaha", "3. Xirmo USD1 Dibada"]
//         let smsChoice = prompt("Fadlan dooro Xirmo: \n" + sms.join("\n"))

//         if (smsChoice == 2) {
//             let xaqiijin4 = ["1.Maya ", "2. Haa"]
//             let text4 = prompt("Waxad heleysaa 200 SMS dibada. fadlan hubi isdiwaangalintaada: \n " + xaqiijin4.join("\n"))

//             if (text4==2) {
//                 document.write("Waxa heshay 200 SMS oo gudaha.")
//             }
//             else {
//                 document.write("Haraaga xisaabtada kuguma filna")
//             }
//         }
//     }


//     if (userChoice == 5) {
//         document.write("Back...")
//     }

//     else {
//         document.write("Unknown number")
//     }
// }
// else {
//     document.write("Incorrect password")
// }

// let num1 = parseInt(prompt("Enter the first Number"))
// let num2 = parseInt(prompt("Enter the second Number"))
// let num3 = parseInt(prompt("Enter the third Number"))
// let biggestNumber;
// if(num1 >= num2 && num1 >= num3){
//     biggestNumber = num1;
// }
// else if(num2 >= num1 && num2 >= num3){
//     biggestNumber = num2;
// }
// else{
//     biggestNumber = num3;
// }
// document.write("The Biggest Number is :" , + biggestNumber)

// let num = 1
// while(num <= 6){
//     document.write(num , "<br>")
//     num++
// }

// let n=prompt("Enter Your Name:")
// let num=1
// while(num <=10){
//     document.write(n, "<br>")
//     num++
// }

// let number = 20
// while(number >=2){
//     document.write(number, "<br>")
//     number-=2
// }

// let number1=1
// while(number1<= 19){
//     document.write(number1, "<br>")
//     number1+=2
// }

// let number=1
// do{
//     document.write(number, "<br>")
//     number++
// } while(number <=20)

// for(let i=0; i<=26; i++){
//     document.write(i, "<br>")
// }
// for(let i = 5; i<=20; i+=5){
//     document.write(i, "<br>")
// }

// function myName(){
//     document.write("My Name is Bilan")
//     console.log("My Name is Bilan")
// }
// myName()

// function number() {
//     let num1 = parseInt(prompt("Enter Num one"))
//     let num2 = parseInt(prompt("Enter Num two"))
//     if (num1 > num2) {
//         document.write(num1)
//     }
//     else {
//         document.write(num2)
//     }
// }
// number()

// function myNames(name , address, age){
//     document.write(name,address, age, "<br>")
// }
// myNames("Rakia ","Hodan " , 34)
// myNames("Amiira ","Afgoye " , 22)
// myNames("Bilan ","Holwadaag " , 54)
// myNames("Nuur ","Waberi " , 67)

// function multi(){
//     let a = parseInt(prompt("Enter Num one"))
//     let b = parseInt(prompt("Enter Num two"))
//     let c = parseInt(prompt("Enter Num three"))

//     return a * b * c
// }
// document.write(multi())

// let my = () =>{
//     document.write("Hi")
// }
// my()


// // Prompt the user for 6 numbers
// let numbers = [];
// for (let i = 0; i < 6; i++) {
//     numbers.push(parseInt(prompt("Enter number " + (i + 1) + ":")));
// }

// // Check if all 6 numbers are the same
// let allSame = numbers.every(num => num === numbers[0]);

// if (allSame) {
//     document.write("Makala yaro");
// } else {
//     // Find the smallest number
//     let smallestNumber = Math.min(...numbers);
//     document.write("The smallest number is: " + smallestNumber);
// }

// let num1=parseInt(prompt("Enter Number One"))
// let num2=parseInt(prompt("Enter Number Two"))
// let num3=parseInt(prompt("Enter Number Three"))
// let num4=parseInt(prompt("Enter Number Four"))
// let num5=parseInt(prompt("Enter Number Five"))
// let num6=parseInt(prompt("Enter Number Six"))
// if(num1<num2 && num1<num2 && num1<num3 && num1<num4 && num1<num5 && num1<num6){
//     document.write("Smallest Number " ,  +num1)
// } 
// else if(num2<num1 && num2<num3 && num2<num4 && num2<num5 && num2<num6){
//     document.write("Smallest Number " ,  +num2)
// }
// else if(num3<num1 && num3<num2 && num3<num4 && num3<num5 && num3<num6){
//     document.write("Smallest Number " ,  +num3)
// }
// else if(num4<num1 && num4<num2 && num4<num3 && num4<num5 && num4<num6){
//     document.write("Smallest Number " ,  +num4)
// }
// else if(num5<num1 && num5<num2 && num5<num3 && num5<num4 && num5<num6){
//     document.write("Smallest Number " ,  +num5)
// }
// else if(num6<num1 && num6<num2 && num6<num3 && num6<num4 && num6<num5){
//     document.write("Smallest Number " ,  +num6)
// }
// else{
//     document.write("Equal Number")
// }

// const title =  document.querySelector("#title")
// const title2 = document.querySelector(".desc")

// title.innerHTML = "Hi my Friend...."
// title.style.color = "red"
// title.style.backgroundColor = "gray"


// title2.innerHTML = "Description JS...."

// const element = document.querySelector("#btn")

// element.addEventListener("click" , function(){
//     document.body.style.backgroundColor = "black"
// })

// element.style.color = "white"
// element.style.backgroundColor = "black"

// element.innerHTML = "Order Now"

let ligth =  document.querySelector("#light")
let Onbtn =  document.querySelector("#onbtn")
let Offbtn = document.querySelector("#offbtn")

Onbtn.addEventListener("click" , function(){
    ligth.style.backgroundColor = "#fafaca"
})
Offbtn.addEventListener("click" , function(){
    ligth.style.backgroundColor = "white"
})