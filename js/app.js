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
    x : document.getElementById('navbar__list'),
    // sections global var
    y : document.querySelectorAll('section'),
    NB : ()=>{
        let z = '';
        // looping over all sections
        myObject.y.forEach((secy) => {
            const sectionId = secy.id;
            const sectionDataNav = secy.dataset.nav;

            z += `<li><a class="menu__link ${sectionId}" href ="#${sectionId}">${sectionDataNav}</a></li>`;
            
        });
        // append all elements to the navigation
        myObject.x.innerHTML = z;

    },
    // getting the largest value that's less or equal to the number
    O:(secy)=>{
        // console.log(Math.floor(section.getBoundingClientRect().top));
        return Math.floor(secy.getBoundingClientRect().top);
    },
    // remove the active class
    RA:(secy) =>{
        secy.classList.remove('your-active-class');
        document.querySelector(`.${secy.id}`).style.background= "";
        secy.style.cssText = "linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
    },
    // add the active class
    AA:(ff, secy)=>{
        if(ff){
            secy.classList.add('your-active-class');
            document.querySelector(`.${secy.id}`).style.background= "#d9534f";
            secy.style.cssText = "background-color : #292c34;";
        };

    },
    //implementing the actual function
    SHA:()=>{
        myObject.y.forEach((secy) =>{
            const EO = myObject.O(secy);

            let IV = () => EO <357 && EO >=-150;

            myObject.RA(secy);
            myObject.AA(IV(),secy);
        });
    },
    // Scroll to anchor ID using scrollTo event
    yy:()=>{
        // document.querySelectorAll('a[href^="#"]').forEach(link => {
        //     link.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         document.querySelector(this.getAttribute('href')).scrollIntoView({
        //             behavior: 'smooth'
        //         });
        //     });
        // });

        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach((link) =>{
            link.addEventListener('click',(e)=>{
            e.preventDefault();
            document.querySelector(e.target.getAttribute("href")).scrollIntoView({behavior:"smooth"});
        });
        // link.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    });
},
}
myObject.NB();

window.addEventListener('scroll',myObject.SHA);

myObject.yy();

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


