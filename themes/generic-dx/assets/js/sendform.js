import { Email } from './smtp.js';

const downloadButton = document.querySelector(".downloadButton");

document.querySelector('#privacy').addEventListener("click", () => {
    btnEnableDisable();
});
document.querySelector('.downloadButton').addEventListener("click", () => {
    sendEmail();
});

function sendEmail() {

    let fName = document.getElementById('first_name').value;
    let lName = document.getElementById('last_name').value;
    let cName = document.getElementById('company_name').value;
    let email = document.getElementById('email').value;

    let secureToken = "7670de06-d726-44e6-af6c-96dca7e5b64f";
    let bccMail = "contact@andaze.com";
    let fromMail = "contact@andaze.com";


    let body = `こんにちは <br> 以下は、お問い合わせフォームからのお問い合わせ内容です。:
    <hr>
    <br>
    名 := ${fName} ${lName}, <br> 
    会社名:= ${cName},<br> 
    メールアドレス := ${email},<br> `;

    Email.send({
        SecureToken: secureToken,
        To: email,
        From: fromMail,
        Bcc: bccMail,
        Subject: `お問い合わせフォームから ${fName} ${lName}`,
        Body: body
    }).then(
        message => alert("お問い合わせフォームが送信されました")
    );

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
