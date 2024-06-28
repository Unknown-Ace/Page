export const createConfetti = (container, count) => {
  for (let i = 0; i < count; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.left = '50%';
      confetti.style.top = '50%';
      confetti.style.backgroundColor = getRandomColor();
      container.appendChild(confetti);
      
      // Animation delay and random rotation for spread effect
      confetti.style.animationDelay = `${Math.random() * 2}s`;
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      confetti.style.transition = `transform 3s linear`;
      setTimeout(() => {
          confetti.style.transform = `translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh) rotate(${Math.random() * 360}deg)`;
      }, 0);
  }
};

const getRandomColor = () => {
  const colors = ['#ff0', '#ff8c00', '#ff0080', '#d4af37', '#4caf50', '#ff4444'];
  return colors[Math.floor(Math.random() * colors.length)];
};
