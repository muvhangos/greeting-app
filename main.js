document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const user1 = document.getElementById('user1');
  const user2 = document.getElementById('user2');

  // Autofocus on the first input when page loads
  user1.focus();

  // Smooth greeting animation on load
  const greeting = document.querySelector('h1');
  greeting.style.opacity = 0;
  greeting.style.transform = 'translateY(-20px)';
  setTimeout(() => {
    greeting.style.transition = 'all 1s ease';
    greeting.style.opacity = 1;
    greeting.style.transform = 'translateY(0)';
  }, 100);

  // Basic client-side validation
  form.addEventListener('submit', function (event) {
    if (user1.value.trim() === '' || user2.value.trim() === '') {
      event.preventDefault();
      alert('Please enter names for both users.');
    }
  });
});
