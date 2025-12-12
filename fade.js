// creating a js file specifically for fade in/fade out effects (inspired by W3 examples)
// (https://www.w3schools.com/js/js_events.asp), (https://www.w3schools.com/js/js_timing.asp)

//refer to in class exercise M7, M8, and assignment 2 from sctm 2005 for more js anims & fx
// look into changing mouse shape from m11 & m12 in sctm 2005's final
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-fade");

  // fade it out when cycling to another .html 
  const links = document.querySelectorAll('a[href]');
  links.forEach((a) => {
    const href = a.getAttribute("href");

    if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    // strictly fade for page navigation only
    if (!href.endsWith(".html") && !href.includes(".html#")) return;

    a.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 600); // should match other fades
    });
  });
});

