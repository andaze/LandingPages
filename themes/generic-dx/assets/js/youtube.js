const movie_thumbnails = document.querySelectorAll('.movie-thumbnail');

const movie_modal = document.getElementById('movie-modal');
const movie_close = document.getElementById('modal-close');
let isOpen = false;

const target_iframe = document.getElementById('youtube-video');

const links = document.querySelectorAll('a');


movie_thumbnails.forEach(movie_thumbnail => {

    movie_thumbnail.addEventListener('click', (e) => {

        new Promise((resolve) => {
            setTimeout(() => {

                target_iframe.src = "https://www.youtube.com/embed/" + e.target.id + "?enablejsapi=1"

            }, 10);
            resolve();
        }).then(() => {
            setTimeout(() => {

                modalOpen();

                const targetWindow = target_iframe.contentWindow;
                console.log(targetWindow)

                //APIのコマンドを送信する関数
                const videoControl = function(action,arg=null){
                    targetWindow.postMessage('{"event":"command", "func":"'+action+'", "args":'+arg+'}', '*');
                };

                movie_close.addEventListener('click', () => {
                    modalClose('stopVideo');
                    target_iframe.src = "";
                });

                links.forEach(link => {
                    link.addEventListener('click', () => {
                        modalClose('stopVideo');
                        target_iframe.src = "";
                    });
                });


                function modalOpen() {
                    if(isOpen === false) {
                        new Promise((resolve) => {
                            setTimeout(() => {
                                movie_modal.style.visibility = "visible";
                                movie_modal.style.opacity = 1;
                            }, 100);
                            resolve();
                        }).then(() => {
                            setTimeout(() => {
                                videoControl('playVideo');
                            }, 300)
                        }).then(() => {
                            setTimeout(() => {
                                isOpen = true;
                            }, 500);
                        })
                    }
                }

                function modalClose(option) {
                    if(isOpen === true) {
                        new Promise((resolve) => {
                            setTimeout(() => {
                                videoControl(option);
                            }, 100);
                            resolve();
                        }).then(() => {
                            setTimeout(() => {
                                movie_modal.style.opacity = 0;
                                movie_modal.style.visibility = "hidden";
                            }, 300);
                        }).then(() => {
                            setTimeout(() => {
                                isOpen = false;
                            }, 500);
                        })
                    }
                }
            }, 100)
        })
    })
})
