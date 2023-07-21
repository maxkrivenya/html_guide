function findPositionInArray(arr, el){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === el){
            return i;
        }
    }
    return -1;
}
function navBarSidePages(){{
    const pageNames = ["Template", "Texts", "Colors", "Divs", "Display"];
    const pageAdresses = ["../htmlBase/htmlBase.html", 
    "../texts/texts.html",
    "../colors/colors.html",
    "../div/div.html",
    "../div-display/display.html"];

    let navBar = document.getElementById("navBar");
    let pageTitle = document.getElementById("myTitle").innerText;
    let pagePosition = findPositionInArray(pageNames, pageTitle);
    
    let leftA = document.createElement("a");
    leftA.href = pageAdresses[pagePosition-1];
    if(pagePosition === 0){
        leftA.href = "../index.html";
    }
    navBar.appendChild(leftA);
    let leftButton = document.createElement("div");
    leftButton.className = "myButton";
    leftButton.innerText = "prev";
    leftA.appendChild(leftButton);

    let midA = document.createElement("a");
    navBar.appendChild(midA);
    midA.href = "../index.html";
    let midButton = document.createElement("div");
    midButton.className = "myButton";
    midButton.innerText = "main";
    midA.appendChild(midButton);

    let rightA = document.createElement("a");
    navBar.appendChild(rightA);
    rightA.href = pageAdresses[pagePosition+1];
    if(pagePosition === pageNames.length - 1){
        rightA.href = "../index.html";
    }
    navBar.appendChild(rightA);
    let rightButton = document.createElement("div");
    rightButton.className = "myButton";
    rightButton.innerText = "next";
    rightA.appendChild(rightButton);
}}

navBarSidePages();