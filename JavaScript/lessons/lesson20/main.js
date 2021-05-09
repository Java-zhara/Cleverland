'use strict';

const form = document.querySelector('#form');

const email = document.querySelector('#email');

const password = document.querySelector('#password');

const submitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formDataObj = Array.from(formData.entries()).reduce(
        (prev, [name, value]) => ({
            ...prev,
            [name]: value,
        }),
        {}
    );
    const formDataJSON = JSON.stringify(formDataObj);
    const response = await fetch("https://httpbin.org/post", {
        method: 'POST',
        body: formDataJSON,
    });

    if (response.ok) {
        const result = await response.json();
        console.log(result.data)
        form.hidden = true;
        document.body.insertAdjacentHTML(
            'afterend',
            '<div class="user">Данные пользователя загружены</div>',
        );
    } else {
        email.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>')
        password.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>')
    };
}

form.addEventListener('submit', submitForm);
