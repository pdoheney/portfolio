document.addEventListener('DOMContentLoaded', () => {
    //get all sections of the of the main element
    const aboutMe = document.getElementById('about-me');
    const projects = document.getElementById('projects');
    const skills = document.getElementById('skills');
    const contact = document.getElementById('contact');
    const footer = document.querySelector('footer');

    //get the contact link
    const contactPage = document.getElementById('contact-page');
    //add event listener to hide other parts of main section and display contact section
    contactPage.addEventListener('click', () => {
        aboutMe.style.display = 'none';
        projects.style.display = 'none';
        skills.style.display = 'none';
        footer.style.display = 'none';
        contact.style.display = 'block';
    });

    //get all other anchor links
    const homePage = Array.from(document.getElementsByClassName('home-page'));
    //add event listener to each anchor to return user to home page and hide contact information
    homePage.forEach(element => {
        element.addEventListener('click', () => {
            aboutMe.style.display = 'flex';
            projects.style.display = 'block';
            skills.style.display = 'block';
            footer.style.display = 'block';
            contact.style.display = 'none';
        });
    });
});