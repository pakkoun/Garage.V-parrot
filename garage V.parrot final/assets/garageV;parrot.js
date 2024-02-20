// Fonction principale pour gérer le menu mobile
function setupMobileMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var body = document.querySelector('body');
    var navList = document.querySelector('.nav-list');

    // Fonction pour activer/désactiver le menu mobile
    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        body.classList.toggle('noscroll');
        navList.classList.toggle('active');
    }

    // Événement de clic pour le menu mobile
    mobileMenu.addEventListener('click', toggleMobileMenu);

    // Gérer le défilement vers la section correspondante lorsque vous cliquez sur un lien dans le menu mobile
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Si la largeur de la fenêtre est inférieure à 768 pixels (correspondant aux écrans mobiles),
            // on empêche le comportement par défaut pour permettre le défilement fluide
            if (window.innerWidth < 768) {
                event.preventDefault();
                // Fermer le menu mobile après avoir cliqué sur un lien
                toggleMobileMenu();
                // Récupérer l'identifiant de la section cible
                var targetId = link.getAttribute('href');
                // Faire défiler jusqu'à la section cible
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Appeler la fonction principale lorsque la page est chargée
window.addEventListener('DOMContentLoaded', setupMobileMenu);
