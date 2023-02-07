if(document.getElementById('request-form-pc')) {
    
    const form = document.getElementById('download_form_wrapper');
    const form_wapper = document.getElementById('request-form-pc');
    
    let clicked = false;
    
    const black_background = document.getElementById('black_background');
    const html = document.querySelector('html');
    
    if(document.querySelector('#request-form-mobile > button')) {
        
        const button = document.querySelector('#request-form-mobile > button');
        const original_text = button.textContent;
    
        button.addEventListener('click', () => {
        
            if (!clicked) {
                form.style.opacity = 1;
                form.style.visibility = "visible";
                form_wapper.style.pointerEvents = "auto";
        
                black_background.style.opacity = 0.6;
                black_background.style.visibility = "visible";

                html.classList.add('overflow-y-hidden');
        
                clicked = true;
                button.textContent = "閉じる";
            } else {
                new Promise((resolve) => {
                    setTimeout(() => {
                        form.style.opacity = 0;
                        black_background.style.opacity = 0;
                        form_wapper.style.pointerEvents = "none";
                    }, 10);
                    resolve();
                }).then(() => {
                    setTimeout(() => {
                        form.style.visibility = "hidden";
                        black_background.style.visibility = "hidden";
                        html.classList.remove('overflow-y-hidden');
                    }, 500);
                })
        
                clicked = false;
                button.textContent = original_text;
            }
        });
    }
}

