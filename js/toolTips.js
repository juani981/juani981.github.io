// Se muestra un tooltip sobre un elemento
const switchModoOscuro = document.getElementById("switch");
const tooltipModoOscuro = document.getElementById("ayuda-modo-oscuro");
mostrarTooltip(switchModoOscuro,tooltipModoOscuro);


function mostrarTooltip(target, tooltip){
// Se hace visible en mouseover
target.addEventListener('mouseover', () => {
tooltip.style.display = 'block';
}, false);
        
// Se cambia a display 'none' en mouseleave
target.addEventListener('mouseleave', () => {
tooltip.style.display = 'none';
}, false);
}

