const tags = [
  '</div>', '<li>', '</body>', '<p>', '</ul>',
  '<section>', '<span>', '</h1>', '<header>',
  '</nav>', '<a>', '<article>', '<footer>'
];

const container = document.querySelector('.hero');

function spawnTag() {
  const el = document.createElement('span');
  el.className = 'floating-tag';
  el.textContent = tags[Math.floor(Math.random() * tags.length)];

  const x = Math.random() * 100;
  const dur = 8 + Math.random() * 10;
  const rot = (Math.random() - 0.5) * 20;

  el.style.left = x + '%';
  el.style.bottom = '-30px';
  el.style.animationDuration = dur + 's';
  el.style.transform = `rotate(${rot}deg)`;

  container.appendChild(el);
  setTimeout(() => el.remove(), dur * 1000);
}

setInterval(spawnTag, 700);