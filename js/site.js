var navAbout = document.querySelector("#nav-about");
var navProjects = document.querySelector("#nav-projects");
var navContact = document.querySelector("#nav-contact");

var aboutPage = document.querySelector('.about');
var projectsPage = document.querySelector('.projects');
var contactPage = document.querySelector('.contact');

var wrapper = document.querySelector('.wrapper');

navAbout.onclick =  ()=>{
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
wrapper.addEventListener('click', ()=>{

    //aboutPage.classList.remove('active');
    //projectsPage.classList.remove('active');
    wrapper.classList.remove('bringToView');
    removeActive();
});



function removeActive(){
    document.querySelectorAll('.active').forEach((value)=>{
        value.classList.remove('active');
    });
    
}