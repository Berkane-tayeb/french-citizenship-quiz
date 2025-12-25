// Script principal pour la page d'accueil
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site de quiz de naturalisation française chargé');
    
    // Initialiser les publicités Adsense
    if (typeof adsbygoogle !== 'undefined') {
        (adsbygoogle = window.adsbygoogle || []).push({});
    }
    
    // Gestion des liens du footer
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        if (link.getAttribute('href') === '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Cette fonctionnalité sera disponible prochainement.');
            });
        }
    });
});