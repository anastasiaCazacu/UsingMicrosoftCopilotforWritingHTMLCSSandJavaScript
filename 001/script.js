function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('visible');
} //aici se adauga clasa visible la navbar
// Toggle face ca navbar-ul sa apara si sa dispara, in functie de clasa visible
// Adaugam un event listener pentru a asculta click-ul pe butonul de meniu
document.getElementById('menu-toggle').addEventListener('click', toggleMenu);

// aici se adauga un event listener pentru a asculta click-ul pe butonul de meniu
document.querySelectorAll('#navbar a[href^="#"]').forEach((link) => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}); // aici se adauga un event listener pentru a asculta click-ul pe butonul de meniu
