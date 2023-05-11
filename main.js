const shareBtn = document.querySelectorAll('.share__btn');
const screenWidth = window.innerWidth;
const isMobile = screenWidth < 800;
shareBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        let authorSection = document.querySelector('.about__author');
        let shareSection = document.querySelector('.share__section');
        if(isMobile) {
            if(shareSection.classList.contains('hidden')) {
                shareSection.classList.remove('hidden');
                authorSection.classList.add('hidden');
            }else {
                shareSection.classList.add('hidden');
                authorSection.classList.remove('hidden');
            }
        }else {
            if(shareSection.classList.contains('hidden')) {
                shareSection.classList.remove('hidden');
                
            }else {
                shareSection.classList.add('hidden');
            }
        }
    })
})