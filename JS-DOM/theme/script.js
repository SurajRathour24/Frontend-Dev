console.log('Dark Light Theme');

let osTheme = window.matchMedia('prefers-color-scheme: dark').matches;
console.log(osTheme);

if (osTheme == true){
    console.log('Theme is dark 🌑');
}
else{
    console.log('Theme is light ☀️');
}

let body = document.querySelector('body');
let btn = document.querySelector('#darkModeBtn');

console.log(body);

let ligthDarkMode = (evnt) => {
    if (osTheme == true){
        body.classList.add('dark');
        body.classList.remove('light');
        console.log('Dark mode');
    }
    else{
        body.classList.add('light');
        body.classList.remove('dark');
        console.log('Light mode');
    }
}

ligthDarkMode();


btn.addEventListener("click", ligthDarkMode);
