function toggle(event) {
  event.stopPropagation();
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  document.addEventListener("click", closePopup);
}

function closePopup(event) {
  var popup = document.getElementById("myPopup");
  if (!popup.contains(event.target) && popup.classList.contains("show")) {
    popup.classList.remove("show");
    document.removeEventListener("click", closePopup);
  }
}

function adjustPopupPosition(popup) {
  var rect = popup.getBoundingClientRect();
  var viewportWidth = window.innerWidth;

  if (rect.left < 0) {
    popup.style.left = '0';
    popup.style.transform = 'translateX(0)';
  } else if (rect.right > viewportWidth) {
    popup.style.left = 'auto';
    popup.style.right = '0';
    popup.style.transform = 'translateX(0)';
  } else {
    popup.style.left = '50%';
    popup.style.right = 'auto';
    popup.style.transform = 'translateX(-50%)';
  }
}


const toggleIcon = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleIcon.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

window.onload = () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
  }
};


function randomizeMessage() {
  const messages = [
      "Ask me what I'm reading right now",
      "Ask me what I'm listening to right now",
      "Ask me about my favourite project",
      "Ask me to collaborate",
      "Share your thoughts with me",
      "Ask me about my coding journey",
      "Ask me about my latest adventures",
      "Feel free to reach out to me",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  const messageElement = document.getElementById('message');
  messageElement.innerHTML = `${randomMessage} at <a href="mailto:shambhavisinha2435@gmail.com">shambhavisinha2435@gmail.com</a>&nbsp 
  or on my Slack: <a href="https://hackclub.slack.com/team/U07DLEKJA85">@shambhavi</a> <button onclick="randomizeMessage()">random!</button>`;
}

const type = document.querySelector('.typing');

var typed = new Typed('.typing', {
  strings: [", a coder", ", a composer", "^500, a Ravel enthusiast","^500, an overach^500ie^250ver","^1000, a hack clubber", "."],
  typeSpeed: 75,
  backSpeed: 45,
  loop: false,
  backDelay: 1500,
  startDelay: 1000,
  onComplete: function (self) {type.style.paddingRight = getCursorWidth(); self.cursor.remove(); }
});
function getCursorWidth() {
  const typedCursor = document.querySelector('.typed-cursor');
  if (typedCursor) {
    return (typedCursor.offsetWidth + "px");
  }
  return "11px";
}
