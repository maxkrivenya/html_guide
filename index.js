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
}}

indexUL();