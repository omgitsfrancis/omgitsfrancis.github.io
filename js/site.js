var navAbout = document.querySelector("#nav-about");
var navProjects = document.querySelector("#nav-projects");
var navContact = document.querySelector("#nav-contact");

var aboutPage = document.querySelector('.about');
var projectsPage = document.querySelector('.projects');
var contactPage = document.querySelector('.contact');

var wrapper = document.querySelector('.wrapper');
var closeButton = document.querySelector('#close-button');



var page = function(page) {
    this.page = page;
    this.isActive = false;
    this.navElement = document.querySelector('#nav-' + page);
    this.pageElement = document.querySelector('.' + page);
};
page.prototype.show = function() {
    console.log(this.isActive);
};

var home = new page('home');
var about = new page('about');
var projects = new page('projects');
var contact = new page('contact');





home.navElement.onclick = function() {
    document.querySelector('.nav').classList.toggle('test');
}
about.navElement.onclick = () => {
    wrapper.classList.add('bringToView');
    aboutPage.classList.add('active');
    console.log('test worked');
};
navProjects.onclick = ()=>{
    wrapper.classList.add('bringToView');
    projectsPage.classList.add('active');
};
navContact.onclick = function() {
    wrapper.classList.add('bringToView');
    contactPage.classList.add('active');
};


/* click wrapper to exit */
closeButton.addEventListener('click', ()=>{
    wrapper.classList.remove('bringToView');
    removeActive();
});



// Removes all instances of class 'active'
function removeActive(){
    document.querySelectorAll('.active').forEach((value)=>{
        value.classList.remove('active');
    });
}