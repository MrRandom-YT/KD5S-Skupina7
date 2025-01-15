const calculator = document.getElementById('calculator');
const resultField = document.getElementById('result');
let currentExpression = '';

let currentLanguage = 'sl';

const translations = {
  sl: {
    title: "Pozdravljeni v <span>GameHaven</span>",
    description: "Poveži se z igralci po celem svetu, pridruži skupinam, in nadgradi svoje izkušnje.",
    ctaButton: "Pridruži se!",
    sectionTitle: "Zakaj izbrati GameHaven?",
    feature1Title: "Povezovanje v skupine",
    feature1Desc: "Ustvari ali pa se pridruži skupinam z igralci, ki si delijo vašo strastnost.",
    feature2Title: "Pogovor z ostalimi",
    feature2Desc: "Vstani povezan z ostalimi igralci z pomočjo pogovora v realnem času.",
    feature3Title: "Forumi & Dogodki",
    feature3Desc: "Pridruži se pogovorom, dokodkom in tekmovanjem, ki jih organizirajo člani.",
    footerText: "&copy; 2024 AllaOasis. Vse pravice zadržane.",
    privacyPolicy: "Politika Zasebnosti",
    termsOfService: "Pogoji Storitev",
    buttonText: "Preklopi na angleščino",
    
    homeLink: "Domov",
    forumsLink: "Forumi",
    aboutLink: "O Nas",
    contactLink: "Kontakti",
    loginLink: "Prijava",
    
    themeSwitchLabel: "Temna Tema"
  },
  en: {
    title: "Welcome to <span>GameHaven</span>",
    description: "Connect with players from around the world, join groups, and level up your experience.",
    ctaButton: "Join Now!",
    sectionTitle: "Why Choose GameHaven?",
    feature1Title: "Join Groups",
    feature1Desc: "Create or join groups with players who share your passion.",
    feature2Title: "Chat with Others",
    feature2Desc: "Stay connected with fellow gamers through real-time chat.",
    feature3Title: "Forums & Events",
    feature3Desc: "Join discussions, debates, and competitions hosted by members.",
    footerText: "&copy; 2024 AllaOasis. All rights reserved.",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    buttonText: "Switch to Slovenian",
    
    homeLink: "Home",
    forumsLink: "Forums",
    aboutLink: "About Us",
    contactLink: "Contact",
    loginLink: "Login",
    
    themeSwitchLabel: "Dark Theme"
  }
};


function updateContent(language) {
  document.querySelector('.home h2').innerHTML = translations[language].title;
  document.querySelector('.home p').textContent = translations[language].description;
  document.querySelector('.cta-button').textContent = translations[language].ctaButton;

  document.querySelector('.features h2').textContent = translations[language].sectionTitle;
  document.querySelectorAll('.card')[0].querySelector('h3').textContent = translations[language].feature1Title;
  document.querySelectorAll('.card')[0].querySelector('p').textContent = translations[language].feature1Desc;
  document.querySelectorAll('.card')[1].querySelector('h3').textContent = translations[language].feature2Title;
  document.querySelectorAll('.card')[1].querySelector('p').textContent = translations[language].feature2Desc;
  document.querySelectorAll('.card')[2].querySelector('h3').textContent = translations[language].feature3Title;
  document.querySelectorAll('.card')[2].querySelector('p').textContent = translations[language].feature3Desc;

  document.querySelector('footer p').innerHTML = translations[language].footerText;
  document.querySelector('footer p a[href="privacy.html"]').textContent = translations[language].privacyPolicy;
  document.querySelector('footer p a[href="terms.html"]').textContent = translations[language].termsOfService;
  
  document.getElementById('language-toggle').textContent = translations[language].buttonText;
}

updateContent(currentLanguage);

document.getElementById('language-toggle').addEventListener('click', function (event) {
  event.preventDefault();
  
  if (currentLanguage === 'sl') {
    currentLanguage = 'en';
  } else {
    currentLanguage = 'sl';
  }
  updateContent(currentLanguage);
});

document.querySelector('.trigger-area').addEventListener('mouseenter', () => {
    calculator.classList.add('active');
});

function toggleCalculator() {
    calculator.classList.remove('active');
}

function appendNumber(number) {
    currentExpression += number;
    resultField.value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += ` ${operator} `;
    resultField.value = currentExpression;
}

function clearResult() {
    currentExpression = '';
    resultField.value = '';
}

function calculate() {
    try {
        currentExpression = eval(currentExpression);
        resultField.value = currentExpression;
    } catch {
        resultField.value = 'Error :(';
        currentExpression = '';
    }
}

const themeSwitch = document.getElementById('themeSwitch');


const currentTheme = localStorage.getItem('theme');


if (currentTheme) {
  document.getElementById('theme').setAttribute('href', currentTheme);
  if (currentTheme === 'style/darkTheme.css') {
    themeSwitch.checked = true;
  }
}


themeSwitch.addEventListener('change', function () {
  if (themeSwitch.checked) {
    document.getElementById('theme').setAttribute('href', 'style/darkTheme.css');
    localStorage.setItem('theme', 'style/darkTheme.css');
  } else {
    document.getElementById('theme').setAttribute('href', 'style/lightTheme.css'); 
    localStorage.setItem('theme', 'style/lightTheme.css');
  }
});



