document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.header__link'),
        nolinks = document.querySelectorAll('[data-notlik]');   

    function removeclassActive (element) {
        element.classList.remove("active");
    }
    function addClassActive (element){
        element.classList.add("active");
    }

    nolinks.forEach((i) => {
        i.addEventListener('click', (event) => {
            event.preventDefault()
        });
    });

    navLinks.forEach((i) => {

        i.addEventListener('click', (event) => {
            if(event.target && event.target.matches('.header__link')){
                navLinks.forEach((a) => {
                    removeclassActive(a);
                });
                addClassActive(i);
            }
        });

    });
    
    

});