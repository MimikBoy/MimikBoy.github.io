function navCreate(){
    fetch('reusables/nav.html')
    .then(res => res.text())
    .then(text => {
    let oldelem = document.querySelector("#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
    })
}
