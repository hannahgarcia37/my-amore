function CheckPassword() {
    const password = document.getElementById('password-input').value;
    const correctDate = "09212025"; // Change this to your date

    if (password === correctDate) {
        document.getElementById('lock-screen').style.display = 'none';
        document.getElementById('envelope-overlay').style.display = 'flex';
        // Start playing music as soon as password is correct
        document.getElementById('bg-music').play();
    } else {
        const error = document.getElementById('error-msg');
        error.style.display = 'block';
    }
}

function OpenEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');

    // Wait for animation, then show content
    setTimeout(() => {
        document.getElementById('envelope-overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        startHearts(); // Start the background hearts
    }, 1200);
}

// Step 1: Start the heart rain
function startHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.opacity = Math.random();
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }, 300); // Frequency of hearts
}

// Step 2: The Typewriter Effect
function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; 
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Step 3: Triggering everything when the envelope opens
function OpenEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');

    setTimeout(() => {
        document.getElementById('envelope-overlay').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        
        startHearts(); // Start the background hearts
        
        // Trigger typewriter for the final message
        const message = "Every second by your side is a memory I'll keep forever. Thank you for being my quiet peace, my loudest joy, and my entire world...";
        typeWriter("typewriter-text", message, 50); 
    }, 1200);
}

// Scroll Fade-in Logic
window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.memory-item');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            item.classList.add('visible');
        }
    });
});