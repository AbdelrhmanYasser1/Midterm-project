// onmouseover

let type1 = document.getElementById("type1");
let photo1 = document.getElementById("photo1");
let price1 = document.getElementById("price1");
////////////////////////////////////////////////////
let type2 = document.getElementById("type2");
let photo2 = document.getElementById("photo2");
let price2 = document.getElementById("price2");
/////////////////////////////////////////////////////
let type3 = document.getElementById("type3");
let photo3 = document.getElementById("photo3");
let price3 = document.getElementById("price3");
///////////////////////////////////////////////////////
let type4 = document.getElementById("type4");
let photo4 = document.getElementById("photo4");
let price4 = document.getElementById("price4");
////////////////////////////////////////////////////////
let type5 = document.getElementById("type5");
let photo5 = document.getElementById("photo5");
let price5 = document.getElementById("price5");

type1.onclick = function(){
    photo1.classlist.add('hide');
    price1.classList.add('hide');

}