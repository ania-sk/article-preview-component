const shereBtn = document.querySelector('.shere-btn')
const footerConteiner = document.querySelector('.footer-conteiner')

shereBtn.addEventListener('click', () =>{    
    footerConteiner.classList.toggle('active');
 });

document.addEventListener('click', (e) => {
    if(!shereBtn.contains(e.target)){
        footerConteiner.classList.remove('active');
    }
});