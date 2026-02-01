// Glowing Cursor Effect
const cursorGlow = document.getElementById('cursorGlow');

if (cursorGlow && window.innerWidth > 768) {
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  document.addEventListener('mousedown', () => {
    cursorGlow.classList.add('clicking');
  });
  
  document.addEventListener('mouseup', () => {
    cursorGlow.classList.remove('clicking');
  });
  
  document.addEventListener('mouseenter', () => {
    cursorGlow.classList.remove('hidden');
  });
  
  document.addEventListener('mouseleave', () => {
    cursorGlow.classList.add('hidden');
  });
  
  // Smooth cursor animation
  function animateCursor() {
    const speed = 0.15;
    
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    
    cursorGlow.style.left = cursorX + 'px';
    cursorGlow.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
}

// 3D Hologram Mouse Tracking Effect
const hologramContainer = document.getElementById('hologramContainer');
const hologramWrapper = document.getElementById('hologramWrapper');

if (hologramContainer && hologramWrapper) {
  let isMouseOver = false;
  
  hologramContainer.addEventListener('mouseenter', () => {
    isMouseOver = true;
  });
  
  hologramContainer.addEventListener('mouseleave', () => {
    isMouseOver = false;
    hologramWrapper.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
  
  hologramContainer.addEventListener('mousemove', (e) => {
    if (!isMouseOver) return;
    
    const rect = hologramContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 25;
    const rotateX = ((centerY - y) / centerY) * 25;
    
    hologramWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  hologramContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = hologramContainer.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 25;
    const rotateX = ((centerY - y) / centerY) * 25;
    
    hologramWrapper.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
  
  hologramContainer.addEventListener('touchend', () => {
    hologramWrapper.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// Create particles
const particlesContainer = document.getElementById('particles');
if (particlesContainer) {
  for(let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 3 + 1 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDuration = Math.random() * 10 + 10 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particlesContainer.appendChild(particle);
  }
}

// Intersection Observer for animations
const els = document.querySelectorAll('[data-animate]');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.16 });
els.forEach(el => io.observe(el));

// Year
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Email form
function openMail(ev){
  ev.preventDefault();
  const subjectElement = document.getElementById('subject');
  const messageElement = document.getElementById('message');
  
  if (subjectElement && messageElement) {
    const subject = encodeURIComponent(subjectElement.value.trim());
    const body = encodeURIComponent(messageElement.value.trim());
    window.location.href = `mailto:aryanchodnekar2021@gmail.com?subject=${subject}&body=${body}`;
  }
  return false;
}

// Avatar fallback
const avatar = document.getElementById('avatar');
if (avatar) {
  avatar.addEventListener('error', () => {
    const canvas = document.createElement('canvas');
    const size = 320; 
    canvas.width = size; 
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const g = ctx.createLinearGradient(0,0,size,size);
    g.addColorStop(0,'#dc2626'); 
    g.addColorStop(1,'#ef4444');
    ctx.fillStyle = g; 
    ctx.fillRect(0,0,size,size);
    ctx.fillStyle = 'rgba(255,255,255,.9)';
    ctx.font = 'bold 140px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center'; 
    ctx.textBaseline = 'middle';
    ctx.fillText('AC', size/2, size/2+8);
    avatar.src = canvas.toDataURL();
  });
}

// Typing animation
const typingText = "👋 Hi! I'm Aryan Chodnekar, a Computer Engineering student passionate about data analytics, project management, and technology. Certified in Google Analytics and experienced with industry simulations from Siemens and Deloitte! ✨";
let i = 0;
const typingElement = document.querySelector(".typing");

if (typingElement) {
  function type() {
    if(i < typingText.length){
      typingElement.innerHTML += typingText.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();
}
