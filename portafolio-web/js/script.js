let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let title = document.getElementById('title');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

//Darkmode

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

//Typewriter
let cont = 0;
const Writen = () => {

    const textToArray = title.innerHTML.split('');

    title.innerHTML = "";
        textToArray.forEach((letter, i) => {


            setTimeout(() => {
                title.innerHTML += letter;
                console.log(letter);
            }, 85 * i);
        });
    //alert(textToArray);
};

Writen();
