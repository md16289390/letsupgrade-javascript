console.log("Hi");
let a = +prompt("Enter a number to display the multiplication table : ");
document.write(`<h2>${a} tables${String.fromCodePoint(0x1F447)}<br></h2>`);
document.write("<ul>");
for(let i=1;i<=10;i++){
    document.write(`${a} x ${i} = ${a*i}<br>`);
}