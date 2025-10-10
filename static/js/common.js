async function includeHTML(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  // Detect how deep we are in folders
  const depth = window.location.pathname.split("/").length - 2;

  // Adjust path based on depth
  let pathPrefix = "";
  for (let i = 0; i < depth; i++) {
    pathPrefix += "../";
  }

  const response = await fetch(pathPrefix + file);
  if (response.ok) {
    el.innerHTML = await response.text();
  } else {
    console.error(`Failed to load ${file}: ${response.status}`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("site-header", "header.html");
  includeHTML("site-footer", "footer.html");
});
