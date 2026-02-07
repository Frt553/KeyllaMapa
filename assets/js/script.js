document.addEventListener("DOMContentLoaded", () => {
    // Revelação suave dos elementos ao carregar ou dar scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.service-card, .stat-card, .hero-text');
    
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s ease-out";
        observer.observe(el);
    });
});