let testimonialList = document.querySelector('.testimonial-slider');
// get data from local api and populate dynamically the cards
function getTestimonials() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8000/testimoniale', true);
    xhr.send();
    xhr.addEventListener('load', function () {
        let data = JSON.parse(xhr.responseText);

        data.forEach(testimonial => {
            let newMessage = `<div class="single-box text-center">
                                    <div class="img-area">
                                        <img alt="" class="img-fluid move-animation" src="${testimonial.imagine}">
                                    </div>
                                    <div class="info-area">
                                        <h4>${testimonial.nume}</h4>
                                        <p>${testimonial.text}</p>
                                        <p>Rating ${testimonial.rating}</p>
                                    </div>
                                </div>`;
            testimonialList.insertAdjacentHTML('afterbegin', newMessage);
        });
    })
}

getTestimonials();

// onSubmit of the contact form creating a success or error message
function postContactFormData() {

    const newContactForm = {
        nume: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telefon: document.getElementById('phone').value,
        mesaj: document.getElementById('message').value,
        termeni: document.getElementById('acceptTerms').value,
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:8000/contact');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener('load', function(){

        let response = JSON.parse(xhr.responseText);

        if (response.status == 200) {
            successMessage('Good job', response.error);
        } else {
            failMessage('Ooops...', response.error);
        }
    });
    xhr.send(JSON.stringify(newContactForm));
}

function successMessage(title, text) {
    Swal.fire({
        icon: 'success',
        iconColor: 'rgba(15, 155, 15, 1)',
        title: title,
        text: text,
        background: "rgba(0, 0, 0, 0.8)",
        color: "rgba(15, 155, 15, 1)",
        confirmButtonColor: "#000000",
    })
}

function failMessage(title, text) {
    Swal.fire({
        icon: 'error',
        iconColor: 'rgba(15, 155, 15, 1)',
        title: title,
        text: text,
        background: "rgba(0, 0, 0, 0.8)",
        color: "rgba(15, 155, 15, 1)",
        confirmButtonColor: "#000000",
        textColor: "rgba(15, 155, 15, 1)",
    })
}


