

// Hämtar input och skapar en rad i listan med namn/nummer //

function addContact() {
    let name = document.getElementById("nameInput").value;
    let tele = document.getElementById("teleInput").value;
    
    

    if (name && tele) {

        let contactsList = document.getElementById("contacts");
        let listItem = document.createElement("li");

        
        let inputName = document.createElement("input");
        inputName.value = name;
        inputName.type = "text";
        inputName.disabled = true;
        inputName.className = "nameInput2";
               


        let inputTele = document.createElement("input");
        inputTele.value = tele;
        inputTele.type = "number";
        inputTele.disabled = true;
        inputTele.maxLength = "14";
        inputTele.style.marginLeft = "10px";
        inputTele.className = "teleInput2";



        let editContact = createButton("Ändra", function() {
            if (inputName.value && inputTele.value) {
              if (inputName.disabled == true) {
                inputName.disabled = false;
                inputTele.disabled = false;
                editContact.innerText = "Spara";
                inputTele.className = "teleInput3";
                inputName.className = "nameInput3";
                
        
              } else {
                 inputName.disabled = true;
                 inputTele.disabled = true;
                 editContact.innerText = "Ändra";
                 inputTele.className = "teleInput2";
                 inputName.className = "nameInput2";
              }
        }
        else {
            let emptyFields = document.getElementById("emptyFields");
            emptyFields.innerText = "----------- Fyll i alla fält -----------";
            emptyFields.style.color = "hsl(30, 45%, 50%)";
            emptyFields.style.fontSize = "20px";
            emptyFields.style.fontWeight = "bold";
            emptyFields.style.marginTop = "15px";
            
        }
        

    });

        
        let delContact = document.createElement("button");
        delContact.innerText = "Radera";
        delContact.className = "delButton";
        delContact.type = "button";
        delContact.onclick = function() {
            listItem.remove();
        }
        

        
        listItem.appendChild(inputName);
        listItem.appendChild(inputTele);
        listItem.appendChild(editContact);
        listItem.appendChild(delContact);

        contactsList.appendChild(listItem);

        
        document.getElementById("nameInput").value = "";
        document.getElementById("teleInput").value = "";
        
        let emptyFields = document.getElementById("emptyFields");
        emptyFields.innerText = "";

    } 
        else {
            let emptyFields = document.getElementById("emptyFields");
            emptyFields.innerText = "----------- Fyll i alla fält -----------";
            emptyFields.style.color = "hsl(30, 45%, 50%)";
            emptyFields.style.fontSize = "20px";
            emptyFields.style.fontWeight = "bold";
            emptyFields.style.marginTop = "15px";
        }

    }


    function createButton(text, onClick) {
        let button = document.createElement("button");
        button.innerText = text;
        button.type = "button";
        button.style.margin = "10px";
        button.onclick = onClick;
        return button;
    }




// ------------------------------------------------------------------------------//



//Raderar alla kontakter //

function delAll() {

        let contactsList = document.getElementById("contacts");
        contactsList.innerHTML = "";
    
}

// ------------------------------------------------------------------------------//