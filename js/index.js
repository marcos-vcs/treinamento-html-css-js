function clickInDepartament(){

    window.location.href = "../pages/departament/index.html";

}

function clickInEmployee(){

    window.location.href = "../pages/employee/index.html";

}


function switchMode(){
    if(returnAtualMode() == "dark"){
        lightMode();
    }else{
        darkMode();
    }
}

function verifyMode(){

    if(returnAtualMode() == "dark"){
        darkMode();
    }else{
        lightMode();
    }

}

function returnAtualMode(){
    return window.localStorage.getItem("mode");
}

function darkMode(){

    window.localStorage.setItem("mode", "dark");

    var btn = document.getElementById("light-mode-button");
    btn.innerHTML = `<i style="font-size: 20px;" 
    class="fa-solid fa-moon text-light px-2 py-2"></i>`;

    var body = document.body;   
    body.classList.add("dark-mode");

    var navbar = document.getElementById("navbar");    
    navbar.classList.remove("navbar-light-mode");
    navbar.classList.add("dark-mode");

    var githubIcon = document.getElementById("github-icon");
    githubIcon.classList.add("text-light");

    var departament = document.getElementById("card-departament");
    departament.classList.remove("btn");
    departament.classList.remove("btn-light");
    departament.classList.add("btn");
    departament.classList.add("btn-dark");

    var employee = document.getElementById("card-employee");
    employee.classList.remove("btn");
    employee.classList.remove("btn-light");
    employee.classList.add("btn");
    employee.classList.add("btn-dark");


    

}

function lightMode(){

    window.localStorage.setItem("mode", "light");

    var btn = document.getElementById("light-mode-button");
    btn.innerHTML = `<i  style="font-size: 20px; color: rgb(255, 255, 0);" class="fa-solid fa-sun px-2 py-2""></i>`;

    var body = document.body;    
    body.classList.remove("dark-mode");

    var navbar = document.getElementById("navbar");
    navbar.classList.add("navbar-light-mode");
    
    var githubIcon = document.getElementById("github-icon");
    githubIcon.classList.remove("text-light");

    
    var departament = document.getElementById("card-departament");
    departament.classList.remove("btn");
    departament.classList.remove("btn-dark");
    departament.classList.add("btn");
    departament.classList.add("btn-light");

    var employee = document.getElementById("card-employee");
    employee.classList.remove("btn");
    employee.classList.remove("btn-dark");
    employee.classList.add("btn");
    employee.classList.add("btn-light");

}