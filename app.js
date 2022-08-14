const outerMenu = document.querySelector('.menu');
const closeInside = document.querySelector('[data-menu]');
const insideMenu = document.querySelector('.inside-menu');

//to open inner menu
outerMenu.addEventListener('click',()=>{
    insideMenu.style.transform = 'translate(0)';
    closeInside.closest('li').style.backgroundColor = 'whitesmoke';
})

//to close inner menu
closeInside.addEventListener('click',()=>{
     insideMenu.style.transform = 'translate(10000px)';  
     insideMenu.style.transition = 'transform .5s ease-in-out';  
})
//to close sidebar on clicking outside it

const checkbox = document.querySelector('#check');
const nav = document.querySelector('nav');
document.addEventListener('click',(e)=>{
    if(checkbox.checked){
        window.addEventListener('scroll',()=>{
                const nav = document.querySelector('nav');
                nav.classList.toggle('sticky',window.scrollY > 0);
              
            })
    }
    if(checkbox.checked && e.target.closest('nav') == null){
       checkbox.checked = false;
    }
})
