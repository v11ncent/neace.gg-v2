import Glide, { Autoplay, Anchors, Controls, Swipe, Breakpoints } from 'https://unpkg.com/@glidejs/glide/dist/glide.modular.esm';

const teamOptions = 
{
    type: 'carousel',
    perView: 2,
    breakpoints: {
        1000: {
            perView: 1
        }
    }
}

const testimonialOptions =
{
    type: 'carousel',
    autoplay: 4000,
    hoverpause: false,
    perView: 3,
    breakpoints: {
        1000: {
            perView: 1
        }
    }
}

const reviewOptions = {
    type: 'carousel',
    autoplay: 3000,
    hoverpause: false,
    perView: 5,
    breakpoints: {
        500: {
            perView: 1
        },
        600: {
            perView: 2
        },
        1000: {
            perView: 3
        }
    }
}

let glideTeam = new Glide('.glide#glide--team', teamOptions);
let glideTestimonials = new Glide('.glide#glide--testimonials', testimonialOptions);
let glideReviews = new Glide('.glide#glide--reviews', reviewOptions);

glideTeam.mount({ Controls, Swipe, Breakpoints });
glideTestimonials.mount({ Breakpoints, Controls, Swipe });
glideReviews.mount({ Autoplay, Controls, Swipe, Breakpoints });