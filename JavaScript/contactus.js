document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    alert('Thank you for your message!');

    window.location.reload();
  });