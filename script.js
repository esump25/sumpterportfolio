// --- THEME TOGGLE ---
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.innerText = "Light Mode";
    } else {
        toggleBtn.innerText = "Dark Mode";
    }
});

// --- GAME MODAL LOGIC ---
const modal = document.getElementById("game-modal");
const openBtn = document.getElementById("open-game");
const closeBtn = document.querySelector(".close-modal");
const gameIframe = document.getElementById("game-iframe");

// Open modal and set source
openBtn.onclick = function() {
    modal.style.display = "block";
    gameIframe.src = "https://academy.cs.cmu.edu/sharing/seashellHorse768648/embed";
    document.body.style.overflow = "hidden"; // Prevent scrolling behind modal
}

// Close modal and clear source to stop game
const closeModal = () => {
    modal.style.display = "none";
    gameIframe.src = "";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

closeBtn.onclick = closeModal;

// Close if clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}