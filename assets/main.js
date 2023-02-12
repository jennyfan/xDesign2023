/*** Modal pop-up ***/

const body = document.getElementById("body");

// get array  of all panels on page, make it clickable
const panels = document.getElementsByClassName("panel");
Array.from(panels).forEach(function(panel) {
    panel.addEventListener('click', openModal, false);
});

// Open panel by clicking on div
function openModal(e) {
    // get closest panel's ID (hacky fix for all clickable elements within box)
    var panel = e.target.closest('div.panel').id;
    // console.log("opening " + panel);

    // get active modal
    var modal = document.getElementById("modal__" + panel);

    // first remove old classes + add new ones
    async function toggleAnimations() {
        modal.classList.remove('animate__slideOutDown');
        modal.classList.add('animate__zoomIn');
    }

    // then show it + hide body scrollbars
    toggleAnimations().then(() => {
        modal.style.display = "block";
        body.style.overflow = "hidden";
    });
}

// get array of all close buttons
const closeBtns = document.getElementsByClassName("close");
Array.from(closeBtns).forEach(function(btn) {
    btn.addEventListener('click', closeModal, false);
});

// close modals with "x" span
function closeModal(e) {
    var panel = e.target.parentNode.id;
    // console.log("closing" + panel);

    var modal = document.getElementById(panel);

    // first remove old classes + add new ones
    async function toggleAnimations() {
        modal.classList.remove('animate__zoomIn');
        modal.classList.add('animate__slideOutDown');
    }

    // then hide it + show body scrollbars
    toggleAnimations().then(() => {
        modal.style.display = "none";
        body.style.overflow = "auto";
    });
    

}




/*** intersecton observer animations */

// get all animations
const animated = document.querySelectorAll('.animate__animated');
const options = { root: null };

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // if animation intersects with the page
        if(entry.intersectionRatio > 0) {
            // get all classes on animation (object)
            var animTypes = entry.target.classList;

            // if animation comes from left, remove the fadeIn effect and add fadeOut
            if (animTypes.contains("animate__fadeInLeft")) {
                console.log(entry.target.id, " fade in from left");
                // entry.target.classList.remove('animate__fadeInLeft');
                // entry.target.classList.add('animate__fadeOutLeft');
            }

            // if animation comes from right, remove the fadeIn effect and add fadeOut
            else if (animTypes.contains("animate__fadeInRight")) {
                console.log(entry.target.id, " fade in from right");
                // entry.target.classList.remove('animate__fadeInRight');
                // entry.target.classList.add('animate__fadeOutRight');
            }
        }
    });
}, options);

animated.forEach(element => {
    observer.observe(element);
});



// var myIndex = [0,0,0];
// var myIndex1 = 0;
// var myIndex2 = 0;
// var myIndex3 = 0;
// carousel();


// function carousel() {
//     for (let k = 0; k < 3; k++) {


//   var i;
//   var x = document.getElementsByClassName(`slideshow${k+1}`);
//   console.log(x)
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex[k]++;
//   if (myIndex[k] > x.length) {myIndex[k] = 1}    
//   x[myIndex[k]-1].style.display = "block";  
//    // Change image every 2 seconds
// }
// setTimeout(carousel, 4000);
// }





