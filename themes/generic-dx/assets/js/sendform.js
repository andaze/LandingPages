import { Email } from './smtp.js';

sendEmail();

function sendEmail() {
    console.log('A')
    let fName = document.getElementById('full_name').value;
    let lName = document.getElementById('last_name').value;
    let cName = document.getElementById('company_name').value;
    let email = document.getElementById('email').value;
    let contact_number = document.getElementById('contact_number').value;
    var d = document.getElementById("department");
    let department = d.value;
    var p = document.getElementById("post");
    let post = p.value;
    let inquiryDetials = document.getElementById('inquiry_content').value;

    let secureToken = "7670de06-d726-44e6-af6c-96dca7e5b64f";
    let bccMail = "contact@andaze.com";
    let fromMail = "contact@andaze.com";

    let path = window.location.pathname;

    if (path.includes('/ja/')) {

        let body = `こんにちは <br> 以下は、お問い合わせフォームからのお問い合わせ内容です。:
        <hr>
        <br>
        名 := ${fName} ${lName}, <br> 
        会社名:= ${cName},<br> 
        メールアドレス := ${email},<br> 
        電話番号 := ${contact_number},<br> 
        部門:= ${department},<br> 
        役職:= ${post},<br> 
        お問い合わせ内容:= ${inquiryDetials},<br>`;

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

    } else {

        let body = `Hello,<br>Following are detail come from contact form:
        <hr> 
        <br>
        Name :=  ${fName} ${lName},<br> 
        Company Name := ${cName},<br> 
        email := ${email},<br> 
        Contact Number := ${contact_number},<br> 
        department := ${department},<br> 
        post := ${post},<br>  
        Inquiry Detials := ${inquiryDetials},<br>`
            ;

        Email.send({
            SecureToken: secureToken,
            To: email,
            From: fromMail,
            Bcc: bccMail,
            Subject: `Contact Form filled By ${fName} ${lName}`,
            Body: body
        }).then(
            message => alert("Your Contact Form has Been submitted")
        );

    }
}

export function btnEnableDisable() {
    if (document.getElementById("privacy").checked) {
        document.getElementById("downloadButton").disabled = false;
        document.getElementById("downloadButton").classList.remove("opacity-50", "cursor-not-allowed");
    } else {
        document.getElementById("downloadButton").disabled = true;
        document.getElementById("downloadButton").classList.add("opacity-50", "cursor-not-allowed");
    }
}
