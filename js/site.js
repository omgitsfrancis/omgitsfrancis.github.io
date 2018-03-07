
var wrapper = document.querySelector('.wrapper');
var closeButton = document.querySelector('#close-button');
var headline = document.getElementById('headline');

var headliners = [
    "an SDSU alumni.",
    "a programmer.",
    "a geek.",
    "a tinker...er.",
    "a technologist.",
    "a web developer.",
    "a lover of coffee.",
    "a foodie.",
    "a musician.",
    "a San Diegan.",
    "a 3D printing noob.",
    "a car enthusiast.",
];

headline.onclick = function() {
    (this.innerHTML === "Francis Enriquez.") ? this.innerHTML = headliners[Math.floor(Math.random()*headliners.length)] 
        : this.innerHTML = "Francis Enriquez.";
    
    this.classList.add('flipInX', 'animated');
    window.setTimeout(()=>{
        headline.classList.remove('flipInX', 'animated');
    },500);


};

var page = function(page) {
    this.page = page;
    this.isActive = false;
    this.navElement = document.querySelector('#nav-' + page);
    this.pageElement = document.querySelector('.' + page);
};
page.prototype.show = function() {
    console.log(this.isActive);
};

var about = new page('about');
var projects = new page('projects');
var contact = new page('contact');




/* Assign click events */
about.navElement.onclick = (clicked) => {
    wrapper.classList.add('bringToView');
    about.pageElement.classList.add('active');
    //changeParticles(clicked.target.innerHTML);
};
projects.navElement.onclick = (clicked)=>{
    wrapper.classList.add('bringToView');
    projects.pageElement.classList.add('active');
    //changeParticles(clicked.target.innerHTML);
};
contact.navElement.onclick = (clicked) => {
    wrapper.classList.add('bringToView');
    contact.pageElement.classList.add('active');
    //changeParticles(clicked.target.innerHTML);
};


/* click wrapper to exit */
closeButton.addEventListener('click', ()=>{
    wrapper.classList.remove('bringToView');
    document.querySelectorAll('.active').forEach((value)=>{
        value.classList.remove('active');
    });
    //pJSDom[0].pJS.particles.size.value = 5;
    //pJSDom[0].pJS.particles.shape.type = "polygon";
    //pJSDom[0].pJS.fn.particlesRefresh();
});

/* Changes particles of to the Selected menu */
function changeParticles(page) {
    page = page.toLowerCase();

    pJSDom[0].pJS.particles.shape.type = "image";
    pJSDom[0].pJS.particles.shape.image.src = "img/" + page +".png";
    pJSDom[0].pJS.fn.particlesRefresh();
}