document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const hiddenMessage = document.getElementById('hidden-message');
    const happyBg = document.createElement('div');
    const sadBg = document.createElement('div');

    happyBg.id = 'happy-bg';
    sadBg.id = 'sad-bg';
    document.body.appendChild(happyBg);
    document.body.appendChild(sadBg);

    yesBtn.addEventListener('click', () => {
        hiddenMessage.style.display = 'block';
        happyBg.style.display = 'block';
        document.getElementById('proposal-question').style.display = 'none';
        createEmojis(); // burst with emojis
        setTimeout(() => {
            happyBg.style.opacity = 1;
        }, 10);
    });

    let noClickCount = 0;
    noBtn.addEventListener('click', () => {
        if (noClickCount === 0) {
            alert("You wanna say no to kachuya? 🥺");
            noClickCount++;
        } else if (noClickCount === 1) {
            alert("You reallyyyyy wanna say no??? ☹️");
            noClickCount++;
        } else if (noClickCount === 2) {
            alert("Don't say no pleaseeeee 🙁");
            noClickCount++;
        } else if (noClickCount === 3) {
            alert("Maan jaooooo kachuyiiiii 🐢");
            noClickCount++;
        } else if (noClickCount === 4) {
            alert("Kitna Bhaw khaogi hein 👊🏿");
            noClickCount++;
        } else if (noClickCount === 5) {
            alert("Nuh uh, I won't let you leave me 😤");
            noClickCount++;
        } else if (noClickCount >= 6) {
            alert("Chalo bahut nakhre ho gaye ab maan jao cutie 🤭");
            noClickCount++;
        }
    });

    // Prevent closing the window without choosing an option
    window.onbeforeunload = function() {
        return "Please answer the question before leaving!";
    };
});

const createHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
};

setInterval(createHeart, 500);

const createEmoji = (emoji) => {
    const span = document.createElement('span');
    span.textContent = emoji;
    span.className = 'emoji';
    span.style.left = `${Math.random() * 100}vw`;
    span.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 3000);
};

const createEmojis = () => {
    const emojis = ['🫶🏿', '❤️', '🥹'];
    for (let i = 0; i < 30; i++) {
        createEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    }
};
