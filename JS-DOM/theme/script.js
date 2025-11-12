console.log('Dark Light Theme');

let osTheme = window.matchMedia('prefers-color-scheme: dark').matches;
console.log(osTheme);

if (osTheme == true){
    console.log('Theme is dark 🌑');
}
else{
    console.log('Theme is light ☀️');
}

