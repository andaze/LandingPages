const button_wrapper = document.getElementById('request-form-mobile');
const button = document.querySelector('#request-form-mobile > button');
const original_text = button.textContent;

const form = document.getElementById('accordion-collapse');

let clicked = false;

const black_background = document.getElementById('black_background');

button.addEventListener('click', () => {

    if (!clicked) {
        form.style.opacity = 1;
        form.style.visibility = "visible";

        black_background.style.opacity = 0.6;
        black_background.style.visibility = "visible";

        clicked = true;
        button.textContent = "閉じる";
    } else {
        form.style.opacity = 0;
        form.style.visibility = "hidden";

        black_background.style.opacity = 0;
        black_background.style.visibility = "hidden";

        clicked = false;
        button.textContent = original_text;
    }
});
