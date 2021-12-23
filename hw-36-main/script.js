// Задание: Присвоить классы с помощью JS


// Вам даны два файла HTML и CSS. Но по каким-то причинам, у вас нет доступа к редактированию данных файлов. 
// Но за то вы можете использовать язык JavaScript, чтоб присвоить все классы нужным элементам

// For example:


document.querySelector('header').classList.add('header');
document.querySelector('header > div').classList.add('container');
document.querySelector('header  menu').classList.add('header__menu');
document.querySelector('header div div').classList.add('header__content');
document.querySelector('header div div button').classList.add('header__menu-button');
document.querySelector('section').classList.add('gallery');
document.querySelectorAll("section").forEach(element => { 
    element.classList.add("gallery__item")
    element.querySelectorAll('section div img').classList.add('gallery__item__image')
    element.querySelectorAll('section div h3').classList.add('')
    element.querySelectorAll('p').classList.add('gallery__item__text')
     
});;




// and etc. 