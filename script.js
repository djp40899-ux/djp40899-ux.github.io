// --- 1. AUDIO ENGINE ---
const music = document.getElementById('bg-music');
const progressFill = document.getElementById('track-progress');
const playBtn = document.getElementById('btn-play');

// Toggle Play/Pause
function toggleMusic() {
    if (music.paused) {
        music.play();
        playBtn.innerText = "II";
    } else {
        music.pause();
        playBtn.innerText = "▶";
    }
}

// Update Progress Bar
music.ontimeupdate = () => {
    const progress = (music.currentTime / music.duration) * 100;
    progressFill.style.width = progress + "%";
};

// --- 2. CELEBRATION TRIGGER ---
function celebrate() {
    // Start the music on button click
    music.play();
    playBtn.innerText = "II";

    // Spawn massive bubble burst
    for(let i=0; i<40; i++) {
        setTimeout(() => spawn('bubble'), i * 50);
        if(i % 5 === 0) spawn('butterfly');
    }
    
    // Screen Flash effect
    const flash = document.createElement('div');
    flash.style.cssText = "position:fixed; top:0; left:0; width:100%; height:100%; background:white; z-index:2000; opacity:0.8;";
    document.body.appendChild(flash);
    gsap.to(flash, { opacity: 0, duration: 1, onComplete: () => flash.remove() });
}

// --- 3. 3D WINDOW TILT ---
const win = document.getElementById('main-win');
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 45;
    const y = (window.innerHeight / 2 - e.pageY) / 45;
    gsap.to(win, {
        rotationY: x,
        rotationX: -y,
        duration: 0.6,
        ease: "power2.out"
    });
});

// --- 4. PARTICLE GENERATOR ---
const field = document.getElementById('particle-field');
function spawn(type) {
    const p = document.createElement('div');
    p.className = type;
    if(type === 'bubble') {
        const size = Math.random() * 50 + 10 + 'px';
        p.style.width = size; p.style.height = size;
    } else {
        p.innerHTML = '🦋';
    }
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = '110vh';
    field.appendChild(p);
    
    gsap.to(p, {
        y: '-120vh',
        x: '+=100',
        duration: Math.random() * 10 + 5,
        ease: "none",
        onComplete: () => p.remove()
    });
}

// Constant background particles
setInterval(() => spawn('bubble'), 1500);
