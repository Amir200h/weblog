const humbergerbtn = document.querySelector('.humberger-btn');
const humbergerMenu = document.querySelector('.humberger');
const humbergerCloseBtn = document.querySelector('#humberger-close-btn');
humbergerbtn.addEventListener('click', ()=>{
    humbergerMenu.style.display = 'block';
})

humbergerCloseBtn.addEventListener('click' , ()=>{
    humbergerMenu.style.display = 'none';
})