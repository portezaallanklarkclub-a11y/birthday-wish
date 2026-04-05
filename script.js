function openLetter() {
    document.getElementById('envelope').classList.add('hidden');
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    message.classList.add('fade-in');
}
