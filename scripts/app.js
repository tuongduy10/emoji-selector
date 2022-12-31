const emojiSelectorIcon = document.getElementById('emojiSelectorIcon');
const emojiSelector = document.getElementById('emojiSelector');

emojiSelectorIcon.addEventListener('click', () => {
    emojiSelector.classList.toggle('active');
});

fetch('https://emoji-api.com/emojis?access_key=34f6266993937b3fe71703a6080917b93b76f944')
   .then(res => res.json())
   .then(data => loadEmoji(data));

// fetch('./json/emoji.json')
//    .then(res => res.json())
//    .then(data => loadEmoji(data));

function loadEmoji(data) {
    data.forEach(emoji => {
        let li = document.createElement('li');
        li.textContent = emoji.character;
        emojiList.appendChild(li);
    });
 }