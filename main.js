// flip every second project item

const projects = document.querySelectorAll('.main-project-wrapper');

projects.forEach((project, index) => {
  if ((index + 1) % 2 === 0) {
    project.classList.add('flipped');
  }
});

// Mobile Menu for responsive layout

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileSidebar = document.getElementById('mobile-sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

function openMobileMenu() {
    mobileSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

function closeMobileMenu() {
    mobileSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

mobileMenuBtn.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

// Close menu when clicking on navigation links
const mobileNavLinks = document.querySelectorAll('.mobile-nav-section a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMobileMenu();
      }
  });