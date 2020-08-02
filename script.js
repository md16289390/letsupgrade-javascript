   /** check if we already have list stored */
   if (JSON.parse(localStorage.getItem("my-list-data"))) {
       var child = JSON.parse(localStorage.getItem("my-list-data"))
       var parent = document.getElementById("my-list");
       parent.innerHTML = child.join("");
   }

   function addItem() {
       if (document.getElementById("source").value) {
           /** create list item */
           var li = document.createElement("li");
           li.innerHTML = document.getElementById("source").value;

           /** get unique id for list */
           var stamp = Date.now().toString();
           var key = `key_${stamp.substr(5, stamp.length)}`;

           li.setAttribute("id", key); // set id to delete specifc node

           /** create button to remove list item */
           var button = document.createElement("button");

           button.innerHTML = "x";
           button.setAttribute("onClick", `removeItem('${key}')`);

           /** append button  to current li */
           li.appendChild(button)

           /** add item to order list */
           var parentOl = document.getElementById("my-list");
           parentOl.appendChild(li);

           /** clear last entered value */
           document.getElementById("source").value = "";
           return
       }
       return false
   }

   function removeItem(value) {
       document.querySelector(`#${value}`).remove();
   }

   function saveList() {
       /** get all list itmes */
       var parent = document.querySelectorAll('li');

       /** convert nodelist into array form */
       var array = Array.from(parent);

       /** only save markup in storage */
       var toStore = array.map(({ outerHTML }) => outerHTML)
       if (toStore.length) {
           localStorage.setItem("my-list-data", JSON.stringify(toStore));
           alert("Data saved successfully");
           return true;
       }
       alert("You have not added any item in the list ");

   }


   /** disable add button initial state */
   document.querySelector("#add").disabled = true;

   /* enable/disable add button */
   document.querySelector("#source").onkeyup = function () {
           document.querySelector("#add").disabled = document.querySelector("#source").value.length ? false : true ;
   }