function handleFeaturesAnimation() {
    const features = document.querySelectorAll('#features .animate-on-scroll');
    const triggerPoint = window.innerHeight * 0.85;

    features.forEach((feature) => {
        const elementTop = feature.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            feature.classList.add('scrolled-in');
        } else {
            feature.classList.remove('scrolled-in');
        }
    });
}

function handleMissionAnimation() {
    const mission = document.querySelector('#mission');
    const triggerPoint = window.innerHeight * 0.75;

    if (mission) {
        const elementTop = mission.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            mission.classList.add('scrolled-in');
        } else {
            mission.classList.remove('scrolled-in');
        }
    }
}

function handleStacersAnimation() {
    const stacers = document.querySelector('.stacers-intro');
    const triggerPoint = window.innerHeight * 0.75;

    if (stacers) {
        const elementTop = stacers.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            stacers.classList.add('scrolled-in');
        } else {
            stacers.classList.remove('scrolled-in');
        }
    }
}

function handleScrollAnimations() {
    handleFeaturesAnimation();
    handleMissionAnimation();
    handleStacersAnimation();
}

window.addEventListener('scroll', handleScrollAnimations);
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

let autoScrollEnabled = false; 
let scrollSpeed = 2; 

function autoScroll() {
    if (autoScrollEnabled) {
        window.scrollBy(0, scrollSpeed); 
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            autoScrollEnabled = false; 
            document.getElementById("autoScrollButton").innerText = "Start Auto Scroll";
        }
    }
    requestAnimationFrame(autoScroll);
}

document.getElementById("autoScrollButton").addEventListener("click", () => {
    autoScrollEnabled = !autoScrollEnabled; 
    const button = document.getElementById("autoScrollButton");
    if (autoScrollEnabled) {
        button.innerText = "Stop Auto Scroll";
    } else {
        button.innerText = "Start Auto Scroll";
    }
});

autoScroll();