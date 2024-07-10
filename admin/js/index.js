/* all global variable */
let togglerBtn = document.querySelector(".toggler-btn");
let sideNav = document.querySelector(".side-nav");
let pageContent = document.querySelector(".page-content");
let page = document.querySelector(".page");
let menuItems = document.querySelectorAll(".menu-items");
/* end global variable */


/* Start Toggler Coding */
togglerBtn.addEventListener("click",()=>{
    sideNav.classList.toggle("active");
    pageContent.classList.toggle("active")
});

/* define your routes */
import dashboard from "../pages/dashboard.js";
import courses from "../pages/courses.js";
import settings from "../pages/settings.js";
import students from "../pages/students.js";
import notFound from "../pages/not-found.js";
import { dashboardFunc } from "../pages/js/dashboard.js";

/* import route from pages/js */


const routes = {
    "/" : dashboard,
    "/courses" : courses,
    "/students" : students,
    "/settings" : settings
}



/* handle route changes */

const handleRouteChange = () =>{
    /* console.log(window.location.hash); Hash propert important to know for routing from window .location */
    let path = window.location.hash.replace("#","") ||  "/";
    page.innerHTML = routes[path] || notFound;
    if(path=="/"){
        dashboardFunc();
    }
}

/* set event listener for navigation links */
menuItems.forEach((item)=>{
    item.onclick = () =>{
        menuItems.forEach((el)=>{
            el.classList.remove("active")
        })
        let path = item.getAttribute("to");
        window.location.hash = path;
        item.classList.add("active");
    }
});

/* Handle hash Change */

window.onhashchange = ()=>{
    handleRouteChange();
}

handleRouteChange();
/* load the initial Route */
