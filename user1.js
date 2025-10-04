// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Toggle menu mobile
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }
  
  // Fermer le menu au clic sur un lien
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
  
  // Détection de la page active
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  navLinks.forEach(link => {
    if (link.getAttribute('data-page') === currentPage) {
      link.classList.add('active');
    }
  });
});

// Curseur personnalisé
document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.custom-cursor-dot');
  
  if (cursor && cursorDot) {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    function animateCursor() {
      // Curseur principal avec délai
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;
      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      
      // Point central plus rapide
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;
      cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
      
      requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Effets sur les éléments interactifs
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-item');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform += ' scale(1.5)';
        cursor.style.borderColor = '#6366f1';
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
        cursor.style.borderColor = '#c37bc3';
      });
    });
  }
});

// Animations au scroll
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observer les éléments à animer
  const animatedElements = document.querySelectorAll('.project-card, .skill-item, .about-content');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Parallaxe pour les formes géométriques
document.addEventListener('DOMContentLoaded', function() {
  const shapes = document.querySelectorAll('.shape');
  
  if (shapes.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        shape.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    });
  }
});

// Effet de typing amélioré
document.addEventListener('DOMContentLoaded', function() {
  const typingText = document.querySelector('.typing-text');
  if (typingText) {
    const text = 'je suis';
    let index = 0;
    
    function typeWriter() {
      if (index < text.length) {
        typingText.textContent = text.slice(0, index + 1);
        index++;
        setTimeout(typeWriter, 150);
      }
    }
    
    setTimeout(typeWriter, 1000);
  }
});

// Smooth scroll pour les ancres
document.addEventListener('DOMContentLoaded', function() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const contactLinks = document.querySelectorAll('a[href="#contact"], a[data-page="contact"]');
  
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const aboutSection = document.querySelector('.about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
  
  // Gestion du scroll vers la section contact
  contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Particules animées (version légère)
document.addEventListener('DOMContentLoaded', function() {
  const particlesContainer = document.getElementById('particles-background');
  
  if (particlesContainer) {
    function createParticle() {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 4 + 1 + 'px';
      particle.style.height = particle.style.width;
      particle.style.background = '#c37bc3';
      particle.style.borderRadius = '50%';
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = '100%';
      particle.style.pointerEvents = 'none';
      
      particlesContainer.appendChild(particle);
      
      const duration = Math.random() * 10000 + 5000;
      const drift = (Math.random() - 0.5) * 200;
      
      particle.animate([
        { transform: 'translateY(0px) translateX(0px)', opacity: particle.style.opacity },
        { transform: `translateY(-${window.innerHeight + 100}px) translateX(${drift}px)`, opacity: 0 }
      ], {
        duration: duration,
        easing: 'linear'
      }).onfinish = () => {
        particle.remove();
      };
    }
    
    // Créer des particules périodiquement
    setInterval(createParticle, 2000);
  }
});

// Amélioration de la navigation avec indicateur de scroll
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar-enhanced');
  
  if (navbar) {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Changer l'apparence de la navbar au scroll
      if (scrollTop > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.borderBottom = '1px solid rgba(195, 123, 195, 0.3)';
      } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
      }
      
      // Masquer/afficher la navbar
      if (scrollTop > lastScrollTop && scrollTop > 200) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop;
    });
  }
});

// Gestion des erreurs d'images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('error', function() {
      // Remplacer par une image de placeholder ou masquer
      this.style.display = 'none';
      
      // Ou remplacer par un placeholder
      const placeholder = document.createElement('div');
      placeholder.style.width = this.offsetWidth + 'px';
      placeholder.style.height = this.offsetHeight + 'px';
      placeholder.style.background = 'linear-gradient(135deg, #c37bc3, #6366f1)';
      placeholder.style.borderRadius = '10px';
      placeholder.style.display = 'flex';
      placeholder.style.alignItems = 'center';
      placeholder.style.justifyContent = 'center';
      placeholder.style.color = 'white';
      placeholder.style.fontSize = '2rem';
      placeholder.innerHTML = '🎨';
      
      this.parentNode.insertBefore(placeholder, this);
    });
  });
});

// Performance: Lazy loading pour les animations coûteuses
document.addEventListener('DOMContentLoaded', function() {
  // Réduire les animations si l'utilisateur préfère moins de mouvement
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-smooth', 'none');
    document.documentElement.style.setProperty('--transition-bounce', 'none');
  }
  
  // Optimisation pour les appareils moins performants
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
    // Réduire les effets sur les appareils moins puissants
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
      shape.style.display = 'none';
    });
  }
});