var name =prompt("ismingiz nma")
var age = prompt ("nechi yoshsiz")
console.log( " mening ismim " + name + " mening yoshim " +age + " da " )
var misol = +prompt(" Misolni yeching 9+8=?")
if (misol === 17) {
    alert("Sizning javob tog'ri 17")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 17")
}
var misol = +prompt(" Misolni yeching 16*9=?")
if (misol === 144) {
    alert("Sizning javob tog'ri 144")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 144")
}
var misol = +prompt(" Misolni yeching 94/2=?")
if (misol === 47) {
    alert("Sizning javob tog'ri 47")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 47")
}
var misol = +prompt(" Misolni yeching 20+70=?")
if (misol === 90) {
    alert("Sizning javob tog'ri 90")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 90")
}
var misol = +prompt(" Misolni yeching 90-70=?")
if (misol === 20) {
    alert("Sizning javob tog'ri 20")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 20")
}
var misol = +prompt(" Misolni yeching 39+10=?")
if (misol === 49) {
    alert("Sizning javob tog'ri 49")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 49")
}
var misol = +prompt(" Misolni yeching 9*8=?")
if (misol === 72) {
    alert("Sizning javob tog'ri 72")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 72")
}
var misol = +prompt(" Misolni yeching 124 % 17=?")
if (misol === 21.08) {
    alert("Sizning javob tog'ri 21.08")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 21.08")
}
var misol = +prompt(" Misolni yeching 194 % 15=?")
if (misol === 29.1) {
    alert("Sizning javob tog'ri 29.1")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 29.1")
}
var misol = +prompt(" Misolni yeching 136 % 34=?")
if (misol === 46.24) {
    alert("Sizning javob tog'ri 46.24")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 46.24")
}
alert("2-uy ishi")
var age = +prompt("yoshingiz")
if (age <= 18) {
    alert("yoshsiz oqishingiz kerak")
} 
else if(age > 18 && age <= 50){
    alert("ishlashiz kerak")
}
else if(age > 50 && age <= 59){
    alert("yaqinda pensiyaga chopilib ketas")
}
else if(age > 59 && age <= 150){
    alert("pensiyaga chopilbogansiz agar tirik bosez")
}
else if(age > 59 && age <= 150){
    alert("pensiyaga chopilbogansiz agar tirik bosez")
}
else{
    alert("sizda nimadurni noto'g'ri kiritdingiz ")
}
alert("3-uy ishi")
var a = +prompt("1-son")
var b = +prompt("2-son")
var c = +prompt("3-son")
if (a > b && a < c || a < b && a > c) {
    alert("O'rta qiymat " + a)
} else if (b > a && b < c || b < a && b > c) {
    alert("O'rta qiymat " + b)
} else if(c > b && b < a || c < b && b >a) {
    alert("O'rta qiymat " + c)
}else{
        alert("sizda nimadurni noto'g'ri kiritdingiz ")
}