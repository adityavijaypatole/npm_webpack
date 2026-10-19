import "./styles.css";
import {createHomePage} from "./homePage.js";
import {createMenu} from "./menu.js";

console.log("Webpack is running perfectly!");

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

const divContent = document.querySelector("#content");

createHomePage();

homeBtn.addEventListener('click', ()=> {
        divContent.innerHTML = "";
        createHomePage();
})

menuBtn.addEventListener('click', ()=> {
        divContent.innerHTML = "";
        createMenu();
})

aboutBtn.addEventListener('click', ()=> {
        divContent.innerHTML = "";
        // i am not gonna write all pages so yeah this is made just for the sake of learning
})