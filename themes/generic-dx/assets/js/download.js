import multiDownload from 'multi-download';

document.querySelector('.downloadButton').addEventListener('click', event => {
    const files = event.target.dataset.files.split(' ');
    multiDownload(files);
});