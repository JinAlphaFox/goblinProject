function generTable(titre, db, table, ligne) {
    ligne = 
    `<caption>${titre} (${db.length})</caption>
    <tr>
        <th class="col1">Balise</th>
        <th class="col2">Arguments</th>
        <th class="col3">Description</th>
        <th class="col4">Source</th>
    </tr>`
    table.innerHTML = ligne;

    for (let i = 0; i < db.length; i++) {
        ligne = 
            `<tr>
                <td class="col1">${db[i].balise}</td>
                <td class="col2">${db[i].arguments}</td>
                <td class="col3">${db[i].description}</td>
                <td class="col4"><a href="${db[i].url}" title="${db[i].posteur}">${db[i].source}</a></td>
            </tr>
            `;
        
        table.innerHTML += ligne;
    };
};

async function generate() {

    /**
     * lignes à remettre en services pour modification en direct de la database
     *
    const reponse1 = await fetch("http://localhost:8081/html");
    const reponse2 = await fetch("http://localhost:8081/css");
    const reponse3 = await fetch("http://localhost:8081/javascript");
    const reponse4 = await fetch("http://localhost:8081/git");
    const html = await reponse1.json();
    const css = await reponse2.json();
    const js = await reponse3.json();
    const git = await reponse4.json();
    */
    /**
     * Mode hors-ligne
     */
    const reponse = await fetch("database.json");
    const database = await reponse.json();
    
    const tableau = document.querySelector(".tableau");
    const boutonHTML = document.querySelector(".btn-html");
    const boutonCSS = document.querySelector(".btn-css");
    const boutonJS = document.querySelector(".btn-js");
    const boutonGIT = document.querySelector(".btn-git");

    let typeAjout = document.querySelector("[name=tableau]");

    const formulaireAjout = document.querySelector(".ajout");

    let ligneTableau = 
        `<caption><i class="fa-regular fa-hand-point-down fa-flip-vertical"></i></caption>
        <tr>
            <th class="col1">Balise</th>
            <th class="col2">Arguments</th>
            <th class="col3">Description</th>
            <th class="col4">Source</th>
        </tr>`
    
    tableau.innerHTML = ligneTableau;

    /**
     * Mode En-ligne
     */
    boutonHTML.addEventListener("click", function() {
        generTable("HTML", database.html, tableau, ligneTableau);
    });

    boutonCSS.addEventListener("click", function() {
        generTable("CSS", database.css, tableau, ligneTableau);
    });

    boutonJS.addEventListener("click", function() {
        generTable("JavaScript", database.javascript, tableau, ligneTableau);
    });

    boutonGIT.addEventListener("click", function() {
        generTable("Git", database.git, tableau, ligneTableau);
    });
    /**
     * Monde En-ligne
     *
    boutonHTML.addEventListener("click", function() {
        generTable("HTML", html, tableau, ligneTableau);
    });

    boutonCSS.addEventListener("click", function() {
        generTable("CSS", css, tableau, ligneTableau);
    });

    boutonJS.addEventListener("click", function() {
        generTable("JavaScript", js, tableau, ligneTableau);
    });

    boutonGIT.addEventListener("click", function() {
        generTable("Git", git, tableau, ligneTableau);
    });
    *    
    formulaireAjout.addEventListener("submit", function (event) {
        event.preventDefault();
        let baliseInput = "";
        if (typeAjout.value === "HTML") {
            baliseInput = "&lt" + event.target.querySelector("[name=balise]").value + "&gt";
        }else {
            baliseInput = event.target.querySelector("[name=balise]").value;
        };
        const ajout = {
            balise: baliseInput,
            arguments: event.target.querySelector("[name=arguments]").value,
            description: event.target.querySelector("[name=description]").value,
            source: event.target.querySelector("[name=source]").value,
            url: event.target.querySelector("[name=url]").value,
            posteur: "AlphaFox",
            disponibilité: true
        };

        const chargeUtile = JSON.stringify(ajout);

        switch (typeAjout.value) {
            case "HTML" : 
                fetch("http://localhost:8081/html", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: chargeUtile
                });
            break;
            case "CSS" :
                fetch("http://localhost:8081/css", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: chargeUtile
                });
            break;
            case "JS" :
                fetch("http://localhost:8081/javascript", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: chargeUtile
                });
            break;
            case "GIT" :
                fetch("http://localhost:8081/git", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: chargeUtile
                });
            break;
            default:

        }

    });
    */

};


generate();