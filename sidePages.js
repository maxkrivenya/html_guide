function findPositionInArray(arr, el){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === el){
            return i;
        }
    }
    return -1;
}
function navBarSidePages(){{
    const pageNames = ["HTML Basic Template",
     "How do texts work in HTML", 
     "Colours", "Divs", "Display tag"];
    const pageAdresses = ["../htmlBase/htmlBase.html", 
    "../texts/texts.html",
    "../colors/colors.html",
    "../div/div.html",
    "../div-display/display.html"];

    let navBar = document.getElementById("navBar");
    let pageTitle = document.title;
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
}}  navBarSidePages();

function dropdownMenuSidePages(){
    const pageNames = ["Main page", "Basics", "Text", "Colors", "Divs", "Div: Display"];
    const pageAddresses = ["../index.html", "../htmlBase/htmlBase.html",
    "../text/text.html", "../colors/colors.html", "../div/div.html", "../div-display/display.html"];
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

}

function pageTopSidePages(){{
    let pageTop = document.getElementById("pageTop");

    let dropdownMenu = document.createElement("div");
    pageTop.appendChild(dropdownMenu);
        dropdownMenu.className = "dropdownMenu";
        dropdownMenu.id = "dropdownMenu";
        pageTop.appendChild(dropdownMenu);
        let UL = document.createElement("ul");
            let UL_LI = document.createElement("li");
                let img = document.createElement("img");
                    img.alt = "waltuh"; img.src = "../waltuh.jpg";
                    img.style.gridColumn = 1; img.style.justifySelf = "left"; img.style.margin = 0; img.style.height = "60px";
                let UL_LI_UL = document.createElement("ul");
                    UL_LI_UL.id = "dropdownMenuUL";
    UL_LI.appendChild(UL_LI_UL);
    UL_LI.appendChild(img);
    UL.appendChild(UL_LI);
    dropdownMenu.appendChild(UL);
    dropdownMenuSidePages();

    let midA = document.createElement("a");
    midA.href = "index.html";
    pageTop.appendChild(midA);
        let midAP = document.createElement("p");
        midAP.innerText = "Max's HTML dump";
        midAP.style.gridColumn = 2; midAP.style.textAlign = "center";
    midA.appendChild(midAP);

    let mail = document.createElement("a");
    pageTop.appendChild(mail);
    mail.href = "mailto:'maxkrivenya@gmail.com'";
        let mailP = document.createElement("p");
        mailP.innerText = "Gmail";
        mailP.style.gridColumn = 3; mailP.style.textAlign = "center";
    mail.appendChild(mailP);

    let github = document.createElement("a");
    pageTop.appendChild(github);
    github.href = "https://github.com/maxkrivenya";
        let githubP = document.createElement("p");
        githubP.innerText = "GitHub";
        githubP.style.gridColumn = 4; githubP.style.textAlign = "center";
    github.appendChild(githubP);


}} pageTopSidePages();