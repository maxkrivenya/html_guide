function indexUL(){{
    let indexList = document.getElementById("indexList");
    const pageNames = ["Template", "Texts", "Colors", "Divs" ];
    const pageAdresses = ["htmlBase/htmlBase.html", 
    "texts/texts.html",
    "colors/colors.html",
    "div/div.html",
    "div-display/display.html"];

    for(let i = 0; i < pageNames.length; i++){
        let newLI = document.createElement("li");
        indexList.appendChild(newLI);
        let newA = document.createElement("a");
        newLI.appendChild(newA);
        newA.href = pageAdresses[i];
        let newButton = document.createElement("div");
        newButton.className = "myButton";
        newA.appendChild(newButton);
        newButton.innerText = pageNames[i];
    }
    console.log(2);
}}  indexUL();

function dropdownMenuIndex(){{
    const pageNames = ["Main page", "Basics", "Text", "Colors", "Divs", "Div: Display"];
    const pageAddresses = ["index.html", "htmlBase/htmlBase.html",
    "text/text.html", "colors/colors.html", 
    "div/div.html", "div-display/display.html"];
    let dropdownMenuUL = document.getElementById("dropdownMenuUL");

    for (let i = 0; i < pageNames.length; i++){
        let newLI = document.createElement("li");
        let newA = document.createElement("a");
        newA.href = pageAddresses[i];
        newLI.appendChild(newA);
        let newButton = document.createElement("div");
        newButton.className = "myButton";
        newButton.innerText = pageNames[i];
        newA.appendChild(newButton);
        dropdownMenuUL.appendChild(newLI);
    }

}} dropdownMenuIndex();