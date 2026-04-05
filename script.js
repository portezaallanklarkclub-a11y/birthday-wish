function openLetter() {
    // Select the envelope and the message
    const envelope = document.getElementById('envelope');
    const message = document.getElementById('message');

    // Hide the envelope
    envelope.style.display = 'none';

    // Show the message with the fade-in class
    message.classList.remove('hidden');
    message.classList.add('fade-in');
    
    // Optional: Log to console just to make sure it's working
    console.log("The wind has carried the message home.");
}
