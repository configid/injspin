let rotating = false;

function spinWheel() {
  if (!rotating) {
    rotating = true;
    const wheel = document.getElementById('wheel');
    const randomRotation = Math.floor(Math.random() * 360) + 360 * 5;
    
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${randomRotation}deg)`;
    
    setTimeout(() => {
      wheel.style.transition = 'none';
      rotating = false;
    }, 3000);
  }
}
