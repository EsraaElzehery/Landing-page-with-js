let btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    btn.style.backgroundColor = "transparent";
    btn.style.color = "white";
    btn.style.borderColor = "white";
});


let img = document.querySelector('.img');


function phones(phone){
img.src = phone;

};

let container = document.querySelector('.container');
function colors(color){
    container.style.background = color;

};