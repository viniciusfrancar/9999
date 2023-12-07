const body = document.body;
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Dark Mode';
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});


let fontSize = 16;
const increaseFontButton = document.createElement('button');
increaseFontButton.textContent = 'Increase Font Size';
increaseFontButton.addEventListener('click', () => {
    fontSize += 2;
    body.style.fontSize = `${fontSize}px`;
});


const messageTextarea = document.getElementById('message');
messageTextarea.addEventListener('input', () => {
    const messageLength = messageTextarea.value.length;
    if (messageLength < 10) {
        alert('Por favor, forneça mais detalhes na mensagem.');
    }
});


header.appendChild(toggleButton);
header.appendChild(increaseFontButton);

const homeLink = document.createElement('a');
homeLink.textContent = 'Home';
homeLink.href = 'index.html';

const galleryLink = document.createElement('a');
galleryLink.textContent = 'Galeria';
galleryLink.href = 'paginaimagem.html';

const contactLink = document.createElement('a');
contactLink.textContent = 'Feedback';
contactLink.href = 'feedback.html';

header.appendChild(homeLink);
header.appendChild(galleryLink);
header.appendChild(contactLink);