var test = document.querySelector(".title-page");

var about = document.querySelector('.about');
var wrapper = document.querySelector('.wrapper');

test.addEventListener('click', ()=>{
    wrapper.classList.add('bringToView');
    console.log('test worked');
});

about.addEventListener('click', ()=>{
    wrapper.classList.remove('bringToView');
    console.log('hide worked');
});