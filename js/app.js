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

        const links = document.querySelectorAll('.menu__link');
        links.forEach((link) =>{

    //         document.getElementById('navbar__menu').addEventListener('click', function (link) {
    //             link.preventDefault();
    //             const target = link.target;
    //             if (target.classList.contains('menu__link')) {
    //                 const id = target.getAttribute('href').slice(1);
    //                 document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    //             }
    //         }
    //     }
    });
    //     //     link.addEventListener('click',()=>{
    //     //         // for(let i = 0;i<myObject.sections.length;i++){
    //     //         //     myObject.sections[i].document.addEventListener("click",myObject.sectionScroll(link));
    //     //         //     console.log(myObject.sections[i])
    //     //         // };
    //     //         // console.log(link.getAttribute("href"));
    //     //         document.querySelector(link.getAttribute("href")).scrollIntoView({behavior: "smooth"});

    //     //     });
    //     // });

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


