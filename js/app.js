/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// my all program Object
let myObject = {
    // navigation gloabal var
    navigation : document.getElementById('navbar__list'),
    // sections global var
    sections : document.querySelectorAll('section'),
    navBuilder : ()=>{
        let navUI = '';
        // looping over all sections
        myObject.sections.forEach((section) => {
            const sectionId = section.id;
            const sectionDataNav = section.dataset.nav;

            navUI += `<li><a class="menu__link ${sectionId}" href ="#${sectionId}">${sectionDataNav}</a></li>`;
            
        });
        // append all elements to the navigation
        myObject.navigation.innerHTML = navUI;

    },
    // getting the largest value that's less or equal to the number
    offset:(section)=>{
        // console.log(Math.floor(section.getBoundingClientRect().top));
        return Math.floor(section.getBoundingClientRect().top);
    },
    // remove the active class
    removeActive:(section) =>{
        section.classList.remove('your-active-class');
        document.querySelector(`.${section.id}`).style.background= "";
    },
    // add the active class
    addActive:(conditional, section)=>{
        if(conditional){
            section.classList.add('your-active-class');
            document.querySelector(`.${section.id}`).style.background= "#d9534f";
        };

    },
    //implementing the actual function
    sectionActivation:()=>{
        myObject.sections.forEach((section) =>{
            const elementOffset = myObject.offset(section);

            let inviewport = () => elementOffset <357 && elementOffset >=-150;

            myObject.removeActive(section);
            myObject.addActive(inviewport(),section);
        });
    },
    // Scroll to anchor ID using scrollTo event
    scrolling:()=>{
        // document.querySelectorAll('a[href^="#"]').forEach(link => {
        //     link.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         document.querySelector(this.getAttribute('href')).scrollIntoView({
        //             behavior: 'smooth'
        //         });
        //     });
        // });

        let links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach((link) =>{
            link.addEventListener('click',(e)=>{
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
        });
        // link.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
},
}
myObject.navBuilder();

window.addEventListener('scroll',myObject.sectionActivation);

myObject.scrolling();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


