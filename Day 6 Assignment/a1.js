bgc=['aqua','blue','blueviolet','cyan','darkgreen','wheat','red','black'];

let i=0;
function bgchange(){
    document.body.style.backgroundColor = bgc[i];
    document.body.style.color = 'white';
    i+=1;
    if (i ==(bgc.length))
    i=0;
    else
    i=i;
}
setInterval(bgchange,5000);