let theme = localStorage.getItem('theme');

if(theme == null) {
    setTheme('light');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for(var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

function setTheme(mode) {
    if(mode == 'light'){
        document.documentElement.style.setProperty('--wrapperColor', 'white');
        document.documentElement.style.setProperty('--textColor', 'black');
        document.documentElement.style.setProperty('--themeDotBorder', 'black');
    } else if(mode == 'dark') {
        document.documentElement.style.setProperty('--wrapperColor', 'black');
        document.documentElement.style.setProperty('--textColor', 'white');
        document.documentElement.style.setProperty('--themeDotBorder', 'white');
    } else if(mode == 'green') {
        document.documentElement.style.setProperty('--wrapperColor', 'lightgreen');
        document.documentElement.style.setProperty('--textColor', 'black');
        document.documentElement.style.setProperty('--themeDotBorder', 'black');
    } else {
        document.documentElement.style.setProperty('--wrapperColor', 'lightpink');
        document.documentElement.style.setProperty('--textColor', 'black');
        document.documentElement.style.setProperty('--themeDotBorder', 'black');
    }

    localStorage.setItem('theme', mode);
}