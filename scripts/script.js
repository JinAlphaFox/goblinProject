function generTable(db, table, ligne) {
    ligne = 
    `<tr>
        <th>Balise</th>
        <th>Arguments</th>
        <th>Description</th>
        <th>Source</th>
    </tr>`
    table.innerHTML = ligne;

    for (let i = 0; i < db.length; i++) {
        ligne = 
            `<tr>
                <td>${db[i].balise}</td>
                <td>${db[i].arguments}</td>
                <td>${db[i].description}</td>
                <td><a href="${db[i].url}" title="${db[i].posteur}">${db[i].source}</a></td>
            </tr>
            `;
        
        table.innerHTML += ligne;
    };
};

async function generate() {

    const reponse1 = await fetch("http://localhost:8081/html");
    const reponse2 = await fetch("http://localhost:8081/css");
    const reponse3 = await fetch("http://localhost:8081/javascript");
    const reponse4 = await fetch("http://localhost:8081/git");
    const html = await reponse1.json();
    const css = await reponse2.json();
    const js = await reponse3.json();
    const git = await reponse4.json();
    
    const tableau = document.querySelector(".tableau");
    const boutonHTML = document.querySelector(".btn-html");
    const boutonCSS = document.querySelector(".btn-css");
    const boutonJS = document.querySelector(".btn-js");
    const boutonGIT = document.querySelector(".btn-git");

    let ligneTableau = 
        `<tr>
            <th>Balise</th>
            <th>Arguments</th>
            <th>Description</th>
            <th>Source</th>
        </tr>`
    
    tableau.innerHTML = ligneTableau;

    boutonHTML.addEventListener("click", function() {
        generTable(html, tableau, ligneTableau);
    });

    boutonCSS.addEventListener("click", function() {
        generTable(css, tableau, ligneTableau);
    });

    boutonJS.addEventListener("click", function() {
        generTable(js, tableau, ligneTableau);
    });

    boutonGIT.addEventListener("click", function() {
        generTable(git, tableau, ligneTableau);
    });

};


generate();