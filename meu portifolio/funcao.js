
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}




document.addEventListener('DOMContentLoaded', ()=>{
        new TypeIt(".animated", {  
            speed: 200 ,
            loop: true
            
        })
     
        .type('Portifólio.' ,{delay: 900})
        .delete(10)
        .go()
    })






// Rolagem suave ao clicar nos links de navegação
document.querySelectorAll('#navegacao a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Mostrar o botão "Voltar ao Topo" ao rolar a página
window.onscroll = function() {
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Função para rolar até o topo
document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
