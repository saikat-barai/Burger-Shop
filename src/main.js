const hamburger = document.getElementById('hamburger');
const navmenu = document.getElementById('navmenu');
const closemenu = document.getElementById('closemenu');
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => 
    link.addEventListener('click', ()=>{
        navmenu.classList.add('hidden');
    })
)

closemenu.addEventListener('click', ()=>{
    navmenu.classList.add('hidden');
});
hamburger.addEventListener("click", ()=> {
    navmenu.classList.remove('hidden');
});


// -----------menu tab------------
const tabs = document.querySelectorAll('.tabs_wrap ul li');
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage');
tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active');

        const tabval = tab.getAttribute('data-tabs');
        
        all.forEach(item =>{
            item.style.display = 'none';
        })

        if (tabval == 'food') {
            foods.forEach(item =>{
                item.style.display = 'block';
            })
        }
        else if (tabval == 'snack') {
            snacks.forEach(item =>{
                item.style.display = 'block';
            })
        }
        else if (tabval == 'beverage') {
            beverages.forEach(item =>{
                item.style.display = 'block';
            })
        }
        else{
            all.forEach(item =>{
                item.style.display = 'block';
            })
        }
    }) 

})


// ----------scroup btn script-----------
const scrollup = () =>{
    const scrollupbtn = document.getElementById('scroll-up');
    if (this.scrollY >= 250) {
        scrollupbtn.classList.remove('-bottom-1/2');
        scrollupbtn.classList.add('bottom-4');
    }
    else{
        scrollupbtn.classList.add('-bottom-1/2');
        scrollupbtn.classList.remove('bottom-4');
    }
}
window.addEventListener('scroll', scrollup)


// ---------------header scroll script------------
const headerScroll = () => {
    const header = document.getElementById('header');
    if (this.scrollY >50) {
        header.classList.add('border-b', 'border-secendaryColor');
    }
    else{
        header.classList.remove('border-b', 'border-secendaryColor');
    }
}
window.addEventListener('scroll', headerScroll);