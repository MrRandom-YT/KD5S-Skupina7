const themeSwitch = document.getElementById("themeSwitch"); 

// Checks for 'theme' in storage (similar to cookie but only per session) and if it does not find it it loads user system/brawser preference
var currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'style/darkTheme.css' : 'style/lightTheme.css');


// Gets and sets Link for theme
const style = document.getElementById("theme");
style.setAttribute("href", currentTheme);

themeSwitch.checked = currentTheme == 'style/darkTheme.css';

// Info for beginners: bool ? value1 : value2;
// if(bool) return value1
// else return value2

function toggleTheme() {
    currentTheme = currentTheme == 'style/lightTheme.css' ? 'style/darkTheme.css' : 'style/lightTheme.css';
    localStorage.setItem('theme', currentTheme);
    style.setAttribute("href", currentTheme);
}

themeSwitch.addEventListener("change", function () {
    toggleTheme();
});