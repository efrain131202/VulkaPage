document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    }
});