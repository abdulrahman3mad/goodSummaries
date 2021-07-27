//DOM elements
/*
let textArea = document.querySelector("textarea");
let contentBox = document.querySelector(".contentBox");
let previewButton = document.querySelector(".preview");

let space_regex = /\w{1,}\s+\w{1,}/g;
let regexHeader = /#+[a-zA-Z0-9]{1,}\n/;

previewButton.addEventListener("click", () => {
    if(textArea.value.split(regexHeader)){
        createH1Header(textArea.value.split(regexHeader).toString(), textArea.value.replace(regexHeader, " "))
    } 
})

const createH1Header = (headerContent, allContent) => {
    let finalContent =  `<h1>${headerContent.replace("#", "")}</h1><p>${allContent}</p>`
    contentBox.innerHTML = finalContent
}
*/