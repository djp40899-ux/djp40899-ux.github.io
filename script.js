gsap.registerPlugin(ScrollTrigger);

// Custom Cursor Movement
const cursor = document.querySelector('#cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// Text Reveal Animation
gsap.from(".reveal-text", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out"
});

// Parallax Effect for Glass Cards
gsap.utils.toArray(".glass-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top bottom",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: card.dataset.speed - 1
    });
});

// Infinite rotation for blobs
gsap.to(".blob", {
    rotate: 360,
    duration: 20,
    repeat: -1,
    ease: "none"
});

// Hover effect for image boxes
document.querySelectorAll('.img-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 4, background: "rgba(255,255,255,0.1)" });
    });
    box.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, background: "white" });
    });
});
