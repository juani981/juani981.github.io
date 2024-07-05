async function convertToPDF() {
  const backgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-cuerpo-fondo")
    .trim();
  console.log(backgroundColor);
  const main = document.getElementById("main-container"); // Replace with the ID of the parent or container element
  const options = {
    margin: 0,
    enableLinks: true,
    filename: "CV-CarrizoJuanIgnacio-es.pdf",
    html2canvas: {
      allowTaint: true,
      scale: 2,
      backgroundColor: backgroundColor,
    },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    pagebreak: { mode: "avoid-all" },
  };
  // First, hide the download button and dark mode, and display the web link element
  hideElements();
  changeFontSize("main", 12);
  // html2pdf
  await html2pdf(main, options);
  // Show the hidden elements again since hiding was temporary until the download is complete
  showElements();
  changeFontSize("main", 16);
}
function hideElements() {
  document.getElementById("title").style.display = "none";
  document.getElementById("download-button").style.display = "none";
  document.getElementById("dark-mode-container").style.display = "none";
  document.getElementById("link-web").style.display = "block";
  document.getElementById("footer").style.display = "none";
}
function showElements() {
  document.getElementById("title").style.display = "block";
  document.getElementById("download-button").style.display = "block";
  document.getElementById("dark-mode-container").style.display = "block";
  document.getElementById("link-web").style.display = "none";
  document.getElementById("footer").style.display = "block";
}
function changeFontSize(element, newSize) {
  // Selecciona el elemento <main> y todos sus descendientes
  const mainElement = document.querySelector(element);
  const allElements = mainElement.querySelectorAll("*");
  // Aplica el nuevo tamaño de fuente a todos los elementos
  allElements.forEach(function (element) {
    element.style.fontSize = newSize + "px";
    console.log("Changing size to " + newSize + "px in element", element);
  });
}
