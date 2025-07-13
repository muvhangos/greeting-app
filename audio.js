function generateGreetings() {
  const user1 = document.getElementById("user1").value.trim();
  const user2 = document.getElementById("user2").value.trim();
  const greeting1El = document.getElementById("greeting1");
  const greeting2El = document.getElementById("greeting2");
  const greetingSound = document.getElementById("greetingSound");

  if (!user1 || !user2) {
    greeting1El.textContent = "🤔 Please enter both names. Your users are feeling neglected.";
    greeting2El.textContent = "";
    return;
  }

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  greeting1El.innerHTML = `${randomEmoji()} <span class="wave">${greeting}, ${user1}!</span>`;
  greeting2El.innerHTML = `${randomEmoji()} <span class="wave">${greeting}, ${user2}!</span>`;

  confetti.render();
  greetingSound.play();
}