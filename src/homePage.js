import togiImage from "./togi.jpeg";

function createHomePage(){
        const divContent = document.querySelector("#content"); // why not allowing to use #content? or div #content;

        const h1 = document.createElement("h1");
        h1.textContent = "Togi Terriyaki";

        const h3 = document.createElement("h3");
        h3.textContent = "Welcome to the fancy millionaire restaurant of Togi and enjoy original chinese cuisine";

        const image = document.createElement("img");
        image.src = togiImage;
        image.alt = "this is to test the alt does it works or not?";

        const p = document.createElement("p");
        // p.textContent = "Hey! i am glad that you cam here in Togi's Terriyaki. <br> let me tell you about togi somethign togi is a very philanthropic guy one day i am going to be as happy and as rich as that young boy named togi yoo hoo!";
        p.innerHTML = "Hey! i am glad that you cam here in Togi's Terriyaki. <br><br> let me tell you about togi somethign togi is a very philanthropic guy one day i am going to be as happy and as rich as that young boy named togi yoo hoo!";

        divContent.append(h1,h3,image,p);
}

export {createHomePage} ;