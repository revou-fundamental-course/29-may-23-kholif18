const messageForm = document.getElementById('myForm');

messageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Hapus pesan error sebelumnya
    clearErrorMessages();

    // Validasi setiap input
    const nameInput = document.getElementById('name');
    const dateInput = document.getElementById('date');
    const genderInputs = document.getElementsByName('gender');
    const messageInput = document.getElementById('message');

    let isValid = true;

    if (nameInput.value.trim() === '') {
        displayErrorMessage('name', 'Nama harus diisi');
        isValid = false;
    }

    if (dateInput.value === '') {
        displayErrorMessage('date', 'Tanggal lahir harus diisi');
        isValid = false;
    }

    let selectedGender = false;
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            selectedGender = true;
            break;
        }
    }
    if (!selectedGender) {
        displayErrorMessage('gender', 'Jenis kelamin harus dipilih');
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        displayErrorMessage('message', 'Pesan harus diisi');
        isValid = false;
    }

    // Jika formulir valid, kirim pesan
    if (isValid) {
        // Lakukan aksi yang sesuai, misalnya mengirim data ke server
        console.log('Formulir valid, pesan dikirim');
        messageForm.reset(); // Untuk mereset formulir setelah pengiriman berhasil
    }
});

function displayErrorMessage(inputId, message) {
    const errorElement = document.getElementById(inputId + '-error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrorMessages() {
    const errorMessages = document.getElementsByClassName('error-message');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].textContent = '';
        errorMessages[i].style.display = 'none';
    }
}
