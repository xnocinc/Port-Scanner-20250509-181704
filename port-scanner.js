javascript
document.addEventListener('click', function(event) {
    var now = new Date();
    if (now.getHours() >= 17 || now.getHours() < 8) {
        event.preventDefault();
    }
});