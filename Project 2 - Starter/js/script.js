const contactArray= Array.from(document.querySelectorAll("li"));
//All the contacts get saved into this contactArray by selecting 
//li element from the html 



const contactsPerPage = 10;
//This assigns number of contacts we need per page that is 10
const numPages = Math.ceil(contactArray.length / contactsPerPage);
//This is the calculation that gives the number of page we will 
//need to show 54 contacts



const btns = document.querySelector(".pagination li");
//This selects the list of buttons elements from html
for(let i = 0; i < numPages; i++){
    btns.innerHTML += "<a href = '#' class = 'nPages'>" +(i+1) + "</a>";
}
//This loop gives us the control on button's html- giving them a specific class 
//and printing the page number in buttons



let buttons = document.querySelectorAll('nPages');
 for(let i =0; i<buttons.length;i++){
    buttons[i].addEventListener('click', mainMethod, false);
}
//This adds an event listner to the class we pageBtns 
//which we made using javascript


const hidingDivs = document.getElementsByClassName("contact-item cf");
//Select the elemnts through class name
for(let i = contactsPerPage; i < hidingDivs.length; i++){
    hidingDivs[i].style.display = "none";
}
//It hides the divs of contacts other than the 10 contacts we need



function hide(){
    for(let i = 0; i < hidingDivs.length; i++){
        hidingDivs[i].style.display = "none";
    }
}

function mainMethod(){
   hide();
    const contacts = (this.innerHTML * contactsPerPage);
    for(let i = 0; i < contactsPerPage; i++){
        hidingDivs[contacts + i].style.display = "block";
    }
}