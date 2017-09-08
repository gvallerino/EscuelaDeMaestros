function mostrarIngredientes() {
    
    document.getElementById("ingredientes").style.display = 'block';
    document.getElementById("descripcionReceta").style.display = 'none';
}

function mostrarReceta() {
    
    document.getElementById("ingredientes").style.display = 'none';
    document.getElementById("descripcionReceta").style.display = 'block';
}