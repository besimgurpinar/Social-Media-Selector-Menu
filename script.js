const socialMenu = document.querySelector('.social-menu');
const socialLinks = socialMenu.querySelectorAll('a');

socialLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    socialMenu.classList.remove('facebook', 'twitter', 'instagram', 'linkedin');
    socialMenu.classList.add(link.classList);
  });
});