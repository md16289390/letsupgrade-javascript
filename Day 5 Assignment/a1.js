let a = prompt("Enter the size of array :");
let b=[];
for(let i=0;i<a;i++){
    b.push(+prompt(`Enter ${i+1} element :`));
}
console.log(b);

let odd = b.filter(n=>n%2!=0);
console.log(odd);

let oddCube = odd.map(n=>n**3);
console.log(oddCube);