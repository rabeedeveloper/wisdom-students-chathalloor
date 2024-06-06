document.querySelector("#brand").href = det.brand;
headerLoad();
footerLoad();
mainSectionEnable();
setTitle();
nextPage();
themeSetter();
rabeeExpression();


function setTitle() {
    let title = document.querySelector("title").innerHTML
    if (title === "" || undefined || null) {
        document.querySelector("title").innerHTML = det.bname;
    } else {
        document.querySelector("title").innerHTML = document.querySelector("title").innerHTML + " - " + det.bname;
    }
}
function nextPage() {
    let topage = document.querySelectorAll("[topage]");
    for (let k = 0; k < topage.length; k++) {
        topage[k].addEventListener("click", function () {
            open(topage[k].getAttribute("topage") + ".html", "_self")
        })
    }
}
function headerLoad() {
    let headerArea = document.querySelector("place[header]");
    headerArea.innerHTML = header;
}
function footerLoad() {
    let footerArea = document.querySelector("place[footer]");
    footerArea.innerHTML = footer;
}
function mainSectionEnable() {
    document.querySelector("[status='none']").style.display = "block";
}
function themeSetter() {
    document.querySelector("[work='dark']").addEventListener("click", function (){
        document.body.setAttribute("data-bs-theme", "dark")
    })
    document.querySelector("[work='light']").addEventListener("click", function (){
        document.body.setAttribute("data-bs-theme", "light")
    })
}