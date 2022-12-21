// const form = document.getElementById('accordion-collapse');
// const expander = document.querySelector('#accordion-collapse-heading-request > p');
// const expander_body = document.getElementById('accordion-collapse-body-request');

// const button_wrapper = document.getElementById('request-form-mobile');
// const button = document.querySelector('#request-form-mobile > button');
// const original_text = button.textContent;


// let clicked = false;
// let first_shown = true;

// const black_background = document.getElementById('black_background');

// var timeoutId;

// if (window.innerWidth >= 900 && window.innerWidth < 1800) {
//     window.addEventListener('scroll', () => {

//         form.style.opacity = 0;

//         clearTimeout( timeoutId ) ;

//         timeoutId = setTimeout( function () {
//             form.style.opacity = 1;
//             form.style.visibility = "visible";
//             if (first_shown) {
//                 first_shown = !first_shown;
//             } else if (!first_shown & expander.getAttribute('aria-expanded') === "false") {
//                 expander_body.classList.add("hidden");
//             }
//         }, 1500 ) ;

//     });
// } else {

//     button.addEventListener('click', () => {

//         if (!clicked) {
//             form.style.opacity = 1;
//             form.style.visibility = "visible";

//             black_background.style.opacity = 0.6;
//             black_background.style.visibility = "visible";

//             clicked = true;
//             button.textContent = "閉じる";
//         } else {
//             new Promise((resolve) => {
//                 setTimeout(() => {
//                     form.style.opacity = 0;
//                     black_background.style.opacity = 0;
//                 }, 10);
//                 resolve();
//             }).then(() => {
//                 setTimeout(() => {
//                     form.style.visibility = "hidden";
//                     black_background.style.visibility = "hidden";
//                 }, 500);
//             })

//             clicked = false;
//             button.textContent = original_text;
//         }
//     });
// }


// // button.addEventListener('click', () => {

// //     if (!clicked) {
// //         form.style.opacity = 1;
// //         form.style.visibility = "visible";

// //         black_background.style.opacity = 0.6;
// //         black_background.style.visibility = "visible";

// //         clicked = true;
// //         button.textContent = "閉じる";
// //     } else {
// //         form.style.opacity = 0;
// //         form.style.visibility = "hidden";

// //         black_background.style.opacity = 0;
// //         black_background.style.visibility = "hidden";

// //         clicked = false;
// //         button.textContent = original_text;
// //     }
// // });
