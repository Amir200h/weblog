const humbergerbtn = document.querySelector('.humberger-btn');
const humbergerMenu = document.querySelector('.humberger');
const humbergerCloseBtn = document.querySelector('#humberger-close-btn');
const nightBtn = document.querySelector('#night-btn');
// const nightIcon = document.querySelector('#night-btn');
const sunBtn = document.querySelector('#sun-btn');

console.log(nightBtn);
humbergerbtn.addEventListener('click', ()=>{
    humbergerMenu.style.display = 'block';
})

humbergerCloseBtn.addEventListener('click' , ()=>{
    humbergerMenu.style.display = 'none';
})

nightBtn.addEventListener('click', ()=>{
    nightBtn.style.display='none';
    sunBtn.style.display='block';
    sunBtn.style.color='black'
    document.body.classList.toggle('night-body');
})
sunBtn.addEventListener('click', ()=>{
    sunBtn.style.display='none';
    nightBtn.style.display='block';
    // sunBtn.style.color='black'
    document.body.classList.toggle('night-body');
    
})