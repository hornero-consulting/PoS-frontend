
//Valido que los campos obligatorios no estén vacíos
document.querySelector('form').addEventListener('submit', function(event) {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;

    if (!id || !nombre || !precio) {
        event.preventDefault(); 
        alert('Por favor, complete todos los campos obligatorios.');
    }
});


//Formateo el precio para que tenga 2 decimales. 
document.getElementById('precio').addEventListener('input', function() {
    const precioInput = document.getElementById('precio');
    precioInput.value = parseFloat(precioInput.value).toFixed(2);
});

//Muestro una vista previa de la imagen seleccionada
document.getElementById('imagen').addEventListener('change', function() {
    const imagenInput = document.getElementById('imagen');
    const imagenPreview = document.getElementById('imagen-preview');
    imagenPreview.src = URL.createObjectURL(imagenInput.files[0]);
    imagenPreview.style.display = 'block';
});
