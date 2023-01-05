import multiDownload from 'multi-download';
import { Email } from './smtp.js';

const downloadButton = document.querySelector(".downloadButton");
const files = downloadButton.dataset.files.split(' ');

document.querySelector('#privacy').addEventListener("click", () => {
    btnEnableDisable();
});
document.getElementById('download_form').addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});

function sendEmail() {

    let fName = document.getElementById('first_name').value;
    let lName = document.getElementById('last_name').value;
    let cName = document.getElementById('company_name').value;
    let email = document.getElementById('email').value;

    let secureToken = "7670de06-d726-44e6-af6c-96dca7e5b64f";
    let toMail = "contact@andaze.com";
    let bccMail = "contact@andaze.com";
    let fromMail = "contact@andaze.com";


    let body = `ダウンロードフォームからジェネリックDXの資料がダウンロードされました。:
    <hr>
    <br>
    名 := ${fName} ${lName}, <br> 
    会社名:= ${cName},<br> 
    メールアドレス := ${email},<br> `;

    Email.send({
        SecureToken: secureToken,
        To: toMail,
        From: fromMail,
        Bcc: bccMail,
        Subject: `資料がダウンロードされました。 ${fName} ${lName}`,
        Body: body
    }).then(
        message => alert("資料がダウンロードされました。")
    ).then(
        multiDownload(files)
    )
    
}

function btnEnableDisable() {
    if (document.getElementById("privacy").checked) {
        downloadButton.classList.remove("opacity-50", "bg-black", "!cursor-not-allowed", "pointer-events-none");
        downloadButton.classList.add("bg-[#E01E58]", "hover:bg-white", "border-[#E01E58]", "hover:text-[#E01E58]", "cursor-pointer");
    } else {
        downloadButton.classList.add("opacity-50", "bg-black", "!cursor-not-allowed", "pointer-events-none");
        downloadButton.classList.remove("bg-[#E01E58]", "hover:bg-white", "border-[#E01E58]", "hover:text-[#E01E58]", "cursor-pointer");
    }
}
