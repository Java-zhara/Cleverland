'use strict';

const form = document.querySelector('#form');

const email = document.querySelector('#email');

const pass = document.querySelector('#pass');

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
            'afterbegin',
            '<input type="submit" value="Получить данные">',
            'afterend',
            '<div>Нет данных</div>'
        );
    } else {
        email.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>')
        pass.insertAdjacentHTML('afterend', '<div class="error">ОШИБКА</div>')
    };
}

form.addEventListener('submit', submitForm);