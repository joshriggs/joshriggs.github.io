/* ── Simple casual password gate for project pages ──────────
   NOT real security — content is still in the page source.
   Stops casual visitors only. Change PASSWORD below.
   Unlock is remembered for the browser session.
─────────────────────────────────────────────────────────── */

(function () {
  var PASSWORD = "letmein";          // ← change this to your password
  var KEY = "portfolio-unlocked";

  // Already unlocked this session? Do nothing.
  if (sessionStorage.getItem(KEY) === "yes") return;

  // Hide the page until unlocked.
  var style = document.createElement("style");
  style.textContent = "body > *:not(#gate){visibility:hidden!important}";
  document.documentElement.appendChild(style);

  function buildGate() {
    var overlay = document.createElement("div");
    overlay.id = "gate";
    overlay.innerHTML = [
      '<div class="gate-card">',
      '  <h2 class="gate-title">Protected work</h2>',
      '  <p class="gate-text">Enter the password to view this project.</p>',
      '  <form id="gate-form">',
      '    <input id="gate-input" type="password" placeholder="Password" autocomplete="off" autofocus />',
      '    <button type="submit">View</button>',
      '  </form>',
      '  <p id="gate-error" class="gate-error"></p>',
      '</div>'
    ].join("");
    document.body.appendChild(overlay);

    var form = document.getElementById("gate-form");
    var input = document.getElementById("gate-input");
    var error = document.getElementById("gate-error");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value === PASSWORD) {
        sessionStorage.setItem(KEY, "yes");
        overlay.remove();
        style.remove();
      } else {
        error.textContent = "Incorrect password. Try again.";
        input.value = "";
        input.focus();
      }
    });
  }

  if (document.body) {
    buildGate();
  } else {
    document.addEventListener("DOMContentLoaded", buildGate);
  }
})();
