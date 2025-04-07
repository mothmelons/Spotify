function showusername(){
    const usernameInput = document.getElementById('username').value;
    alert("Ми вітаємо Вас, Ви увійшли! як:" + usernameInput)
     
}

const DARK_MODE = 'black';
const LIGHT_MODE = 'white';
const DARK_MODE_TEXT = 'white'
const LIGHT_MODE_TEXT = 'black'
let current_background_color = DARK_MODE;

function change_theme() {
    let body = document.querySelector('body');
    if (body) {
        if (current_background_color === DARK_MODE) {
            current_background_color = LIGHT_MODE;
            current_color = LIGHT_MODE_TEXT;
        }else {
            current_background_color = DARK_MODE;
            current_color = DARK_MODE_TEXT;
            
            }
        body.style.backgroundColor = current_background_color;
        body.style.color = current_color;
        body.style.backgroundSize = "cover";
        }
    }

    let change_theme_button = document.querySelector('.switch-theme-button');
    change_theme_button.addEventListener('click', change_theme);