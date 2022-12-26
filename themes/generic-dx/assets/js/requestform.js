if(document.getElementById('request-form-pc')) {
    
    const form = document.getElementById('accordion-collapse');
    const form_wapper = document.getElementById('request-form-pc');
    
    const original_text = button.textContent;
    
    let clicked = false;
    
    const black_background = document.getElementById('black_background');
    
    if(document.querySelector('#request-form-mobile > button')) {
    
        const button = document.querySelector('#request-form-mobile > button');
    
        button.addEventListener('click', () => {
        
            if (!clicked) {
                form.style.opacity = 1;
                form.style.visibility = "visible";
                form_wapper.style.pointerEvents = "auto";
        
                black_background.style.opacity = 0.6;
                black_background.style.visibility = "visible";
        
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
                    }, 500);
                })
        
                clicked = false;
                button.textContent = original_text;
            }
        });
    }
}

