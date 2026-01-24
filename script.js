const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Change button text based on mode
    if (document.body.classList.contains('dark-mode')) {
        toggleBtn.innerText = "Light Mode";
    } else {
        toggleBtn.innerText = "Dark Mode";
    }
});