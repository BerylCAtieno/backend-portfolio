const projects = document.querySelectorAll('.main-project-wrapper');

projects.forEach((project, index) => {
  if ((index + 1) % 2 === 0) {
    project.classList.add('flipped');
  }
});
