var change = document.querySelector('.lang-change');

function myFunction() {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl'),
        change.classList.add('arabic-lang');
}

function myFunction1() {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr'),
        change.classList.remove('arabic-lang');
}

// Free Floating Effect

console.clear();

const randomX = random(-4, 13);
const randomY = random(11, -8);
const randomDelay = random(0, 1);
const randomTime = random(2, 3);
const randomTime2 = random(1, 1);
const randomAngle = random(0, 0);

const cans = gsap.utils.toArray('.can');
cans.forEach((can) => {
    gsap.set(can, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(0),
    });

    moveX(can, 1);
    moveY(can, -1);
    rotate(can, 1);
});

function rotate(target, direction) {
    gsap.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        // delay: randomDelay(),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
    });
}

function moveX(target, direction) {
    gsap.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
    });
}

function moveY(target, direction) {
    gsap.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
    });
}

function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
}

// GSAP Animation Top Card
var topCards = gsap.timeline();

topCards.to('.animate-hero-img', {
    duration: 1,
    autoAlpha: 1,
    scale: 1.1,
    stagger: {
        grid: [7, 15],
        from: 'random',
        amount: 0.7,
    },
    ease: 'back.out(3.5)',
    delay: 0.3,
});

// GSAP Animation Bottom Card For All Device
var bottomCard = gsap.timeline({
    scrollTrigger: {
        trigger: '.card-image1',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
        markers: false,
    },
});

bottomCard.from('.main-bottom-card', {
    duration: 0.4,
    autoAlpha: 0,
    y: '20%',
}),
    bottomCard.from('.bottom-card-svg', {
        duration: 0.5,
        autoAlpha: 0,
        x: '-20%',
        stagger: 0.15,
    });

// GSAP Animation Bottom Card 1 For All Device
var bottomCard1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.card-image2',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
        markers: false,
    },
});

bottomCard1.from('.main-bottom-card2', {
    duration: 0.4,
    autoAlpha: 0,
    y: '20%',
}),
    bottomCard1.from('.credit-card-blue', {
        duration: 0.3,
        autoAlpha: 0,
        y: '20%',
    }),
    bottomCard1.from(
        '.credit-card-red',
        {
            duration: 0.3,
            autoAlpha: 0,
            x: '-20%',
        },
        '-=0.1'
    ),
    bottomCard1.from(
        '.credit-card-black',
        {
            duration: 0.3,
            autoAlpha: 0,
            x: '20%',
        },
        '-=0.1'
    );

// GSAP Animation Lottie Animation Flying
var lottieAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: '.lottie-animation',
        start: 'top 80%',
        end: 'bottom 10%',
        toggleActions: 'play reverse play reverse',
        markers: false,
    },
});

lottieAnimation.from('.lottie-animation', {
    duration: 0.3,
    autoAlpha: 0,
    scale: 0.5,
    delay: 0.1,
}),
    lottieAnimation.to('.lottie-animation', {
        duration: 0.3,
        scale: 1,
    });
