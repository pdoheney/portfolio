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

    //change from light to dark mode
    const changeMode = document.getElementById('mode');
    changeMode.addEventListener('click', () => {
        const header = document.querySelector('header');
        const anchors = Array.from(document.getElementsByTagName('a'));
        if( changeMode.innerHTML === '[Dark Mode]') {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            header.style.borderBottom = "1px solid white";
            anchors.forEach(anchor => {
                anchor.style.color = 'white';
            });
            changeMode.innerHTML = '[Light Mode]';
        } else if (changeMode.innerHTML === '[Light Mode]') {
            console.log('Test!');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            header.style.borderBottom = '1px solid black';
            anchors.forEach(anchor => {
                anchor.style.color = 'black';
            });
            changeMode.innerHTML = '[Dark Mode]';
        }
    });
});