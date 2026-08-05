// ===========================
// TYPING ANIMATION
// ===========================


const typingText = document.getElementById("typing");


const words = [

    "System Administrator",

    "Application Support Specialist",

    "IT Operations Professional",

    "Business Systems Specialist"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    let currentWord = words[wordIndex];


    if(!deleting){


        typingText.textContent = currentWord.substring(
            0,
            charIndex++
        );


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1200);

            return;

        }


    }

    else{


        typingText.textContent = currentWord.substring(
            0,
            charIndex--
        );


        if(charIndex < 0){

            deleting=false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex=0;

            }


        }


    }



    setTimeout(typeEffect,80);


}


typeEffect();






// ===========================
// NAVBAR SHADOW ON SCROLL
// ===========================


const nav = document.querySelector("nav");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        nav.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.08)";


    }


    else{


        nav.style.boxShadow="none";


    }


});







// ===========================
// SCROLL REVEAL ANIMATION
// ===========================


const sections =
document.querySelectorAll(".section");



const observer =
new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{

    threshold:0.15

});



sections.forEach(section=>{


    section.classList.add("hidden");


    observer.observe(section);


});


// ===========================
// MOBILE MENU
// ===========================


const hamburger = document.getElementById("hamburger");

const navLinks = document.getElementById("navLinks");



hamburger.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});



// Close menu after clicking a link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});