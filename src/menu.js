function createMenu() {
        const divContent = document.querySelector("#content");

        const h3_1 = document.createElement("h3");
        h3_1.textContent = "Chinese Cuisine";
        const listChinese = document.createElement("ul");
        const listContentChinese = ['Noodles','Pasta','Momoas','Soup'];
        for(let i=0; i<4; i++) {
                let li = document.createElement('li');
                li.textContent = listContentChinese[i];
                listChinese.append(li);
        }

        const h3_2 = document.createElement("h3");
        h3_2.textContent = "Japenese Cuisine";
        const listJapense = document.createElement("ul");
        const listContentJapense = ['Noodles','Pasta','Momoas','Soup'];
        for(let i=0; i<4; i++) {
                let li = document.createElement('li');
                li.textContent = listContentJapense[i];
                listJapense.append(li);
        }

        divContent.append(h3_1, listChinese, h3_2, listJapense);
}

export {createMenu};