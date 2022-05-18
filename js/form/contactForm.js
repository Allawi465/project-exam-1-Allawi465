const form = document.querySelector("form");
const fullName = document.querySelector("#yourname");
const eMail = document.querySelector("#email");
const subject = document.querySelector("#subject");
const messageBox = document.querySelector("#message");
const message = document.querySelector("#formMessage");

const formUrl = "http://localhost/blog-travel/wp-json/contact-form-7/v1/contact-forms/103/feedback";

form.addEventListener("submit", contactForm );

async function contactForm (event) {
    event.preventDefault();

    var formInfo = new FormData(form);
    
    const body = JSON.stringify({
        "your-name": yourname.value,
        "your-email": email.value,
        "your-subject": subject.value,
        "your-message": message.value,
    });

    const contactInfo = await fetch (formUrl, {
        method: "post", 
        body: formInfo, 

    }); 
};

function formSetup(event) {
    event.preventDefault();

    if (lenghtForm(fullName.value, 1) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (lenghtForm(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (confirmEmail(eMail.value) === true) {
        eMailError.style.display = "none";
    } else {
        eMailError.style.display = "block";
    }

    if (lenghtForm(messageBox.value, 25) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (lenghtForm(fullName.value, 1) && lenghtForm(subject.value, 10) && lenghtForm(messageBox.value, 25) && confirmEmail(eMail.value)) {
        message.innerHTML = `<h3 class="h2-contact-us">Thank you for getting in touch!</h3>`;
        form.reset();
    } else {
        message.innerHTML = "";
    }
};

form.addEventListener("submit", formSetup);

function lenghtForm(value, theLen) {
    if(value.trim().length >= theLen) {
        return true;
    } else {
        return false;
    }
};

function confirmEmail(email) {
    const regExEmail = /\S+@\S+\.\S+/;
    const confirmingMatches = regExEmail.test(email);
    return confirmingMatches;
} 