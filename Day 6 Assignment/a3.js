const name = prompt("Enter your name","Anonymous");

title.innerText += `Welcome to our page "${name}"`;

const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = "Time is "+time;
}

setInterval(clock,1000);

function toggle(button){
    
    if(document.getElementById("dark").value=="ON"){
        document.getElementById("dark").value="OFF";
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        button.innerText = 'Switch to Light Mode'
    }
      
    else if(document.getElementById("dark").value=="OFF"){
        document.getElementById("dark").value="ON";
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        button.innerText = 'Switch to Dark Mode'
    }
   
}