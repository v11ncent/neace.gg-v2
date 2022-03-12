window.addEventListener('load', (event) => {
    const scrollableContainer = document.querySelector('main');
    const userPlatform = window.navigator.platform;

    if (userPlatform === 'MacIntel') {
        return;
    }

    scrollableContainer.addEventListener('wheel', (event) => {
        event.preventDefault();
        scrollableContainer.scrollLeft += event.deltaY;
    });
});

// let cardToggle = false;
// const testimonialCards = Array.from(document.querySelectorAll('section#testimonials .container--cards > .card'));
// const scrollableContainer = document.querySelector('main');

// testimonialCards.map((card, index) => {
//     card.addEventListener('click', (e) => {
//         let image = card.childNodes[1].childNodes[1]; // grabs image
//         let content = card.childNodes[1].childNodes[3]; // grabs container--content inside container--image
//         if (cardToggle === false) {
//             if (content.classList.contains('hide')) {
//                 content.classList.remove('hide');
//             }
//             cardToggle = true;
//             content.classList.add('display');
//             image.style.opacity = '0.2';
//         }
//         else { 
//             if (content.classList.contains('display')) {
//                 content.classList.remove('display');
//             }
//             cardToggle = false;
//             content.classList.add('hide');
//             image.style.opacity = '1';
//         }
//     });
// });

// const userPlatform = window.navigator.platform;

// if (userPlatform === 'MacIntel') {
//     return;
// }


// scrollableContainer.addEventListener('wheel', (event) => {
//     event.preventDefault();
//     scrollableContainer.scrollLeft += event.deltaY;
// });


// if (window.innerHeight < 1000) {
//     //window.
// }
