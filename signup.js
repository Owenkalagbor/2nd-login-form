// // let elem= documemt.body.childnodes;
// console.log(elem)

let parentelem = document.body.childNodes[1]
console.log(parentelem)

let ptelem = document.body.children[1]
console.log(ptelem)

// let elempt = document.body.lastElementChild
// console.log(elempt)

let sav = document.getElementById("gtelem")
console.log(sav)
sav.style.fontSize ="30px";

let doc = document.querySelector("div >p") 
console.log(doc)
doc.style.color = "red"

 let head = document.createElement("h1")
 head.innerText= "welcome to fast & furious"
 document.body.appendChild(head);

 let btn = document.createElement("button")
 btn.innerText= "SEE MORE"
 document.body.appendChild(btn);
 btn.style.color = "blue"