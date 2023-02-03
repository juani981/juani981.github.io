//El siguiente código mediante un event listener, monitorea si el switch de tema oscuro tiene algun cambio, y aplica la paleta de colores correspondiente
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev){
    if(ev.target.checked){
        document.documentElement.setAttribute('tema', 'oscuro');
    } else {
        document.documentElement.setAttribute('tema', 'claro');
    }
}
colorSwitch.addEventListener('change', cambiaTema);