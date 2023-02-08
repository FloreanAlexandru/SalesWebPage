let form = document.getElementById('footer-form');
//validation function for name and email
function newsletterValidation(name, email) {

    let mailformat = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    let nameformat = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");

    console.log(mailformat.test(email.value));
    console.log(nameformat.test(name.value));

    if(mailformat.test(email.value) && nameformat.test(name.value)){
        return true;
    }
}

function handleForm(event) {
    form.addEventListener('submit', handleForm);
    event.preventDefault();
    newsletterMessage();
}

function newsletterMessage() {

    let nameInput = document.getElementById("newsletter-name");
    let email = document.getElementById("newsletter-email");

    console.log(newsletterValidation(nameInput, email))

    if (newsletterValidation(nameInput, email)) {
        successMessage('Good job' + nameInput.value, 'Now you are subscribed!' );
    } else {
        failMessage('Ooops...', 'Bad inputs');
    }
}
