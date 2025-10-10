// common.js — load header/footer into any page
async function includeHTML(id, file) {
  const el = document.getElementById(id);
  if (el) {
    const response = await fetch(file);
    if (response.ok) {
      el.innerHTML = await response.text();
    }
  }
}

// Load header and footer dynamically
document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
});
