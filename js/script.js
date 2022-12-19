let newsletterForm = document.getElementById('newsletter-form');
let wszystkieZgodyChx = document.getElementById('wszystkieZgody');


const validate = (event) => {
    let txtName = document.getElementById('name');
    let txtEmail = document.getElementById('email');
    let zgoda_1 = document.getElementById("zgoda1");
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (txtName.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Imię i Nazwisko';
        errors.appendChild(liError);

    }

    if (txtEmail.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres e-mail';
        errors.appendChild(liError);

    }
    if (!txtEmail.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'adres e-mail musi zawierać  @';
        errors.appendChild(liError);

    }
    if (!zgoda_1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Zgoda nr 1 musi być zaznaczona';
        errors.appendChild(liError);

    }

    if (errors.children.length > 0) {
        event.preventDefault();
    }
}

const wszystkieZgody = (event) => {
    let zgoda_1 = document.getElementById('zgoda1');
    let zgoda_2 = document.getElementById('zgoda2');

    zgoda_1.checked = event.target.checked;
    zgoda_2.checked = event.target.checked;

    zgoda_1.disabled = event.target.checked;
    zgoda_2.disabled = event.target.checked;

}
newsletterForm.addEventListener('submit', validate);
wszystkieZgodyChx.addEventListener('change', wszystkieZgody)