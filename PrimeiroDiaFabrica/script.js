function validateForm() {
    var senhaInput = document.getElementById('senha');
    var emailInput = document.getElementById('email');

    if (senhaInput.value === '') {
        alert('Por favor, preencha seu nome.');
        return false;
    }

    if (emailInput.value === '') {
        alert('Por favor, preencha seu email.');
        return false;
    }
}