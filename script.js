// Bubble Generator
const container = document.getElementById('bubble-container');

function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Randomize size and position
    const size = Math.random() * 60 + 20 + 'px';
    bubble.style.width = size;
    bubble.style.height = size;
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.top = '110vh';
    
    container.appendChild(bubble);

    // Animate Upward
    gsap.to(bubble, {
        y: '-120vh',
        x: 'random(-100, 100)',
        duration: Math.random() * 5 + 5,
        ease: "none",
        onComplete: () => bubble.remove()
    });
}

// Create initial bubbles
for(let i=0; i<15; i++) {
    setTimeout(createBubble, i * 300);
}
setInterval(createBubble, 1000);

// "Celebrate" Burst Function
function spawnBubbles() {
    for(let i=0; i<30; i++) {
        setTimeout(createBubble, i * 50);
    }
}

// Aero Tilt Effect on Mouse Move
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    
    gsap.to(".aero-card", {
        rotationY: x,
        rotationX: -y,
        duration: 0.5,
        ease: "power2.out"
    });
});
