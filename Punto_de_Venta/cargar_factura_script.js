// Función para validar el formulario antes de enviarlo
document.querySelector('form').addEventListener('submit', function(event) {
  const id = document.getElementById('id').value;
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;

  if (!id || !nombre || !precio) {
      event.preventDefault(); 
      alert('Por favor, complete todos los campos obligatorios.');
  }
});

// Función para formatear el campo de precio
document.getElementById('precio').addEventListener('input', function() {
  const precioInput = document.getElementById('precio');
  precioInput.value = parseFloat(precioInput.value).toFixed(2);
});

// Función para calcular el total
document.getElementById("unidades").addEventListener("input", calcularTotal);
document.getElementById("precioUnitario").addEventListener("input", calcularTotal);

function calcularTotal() {
  const unidades = parseFloat(document.getElementById("unidades").value);
  const precioUnitario = parseFloat(document.getElementById("precioUnitario").value);
  const total = unidades * precioUnitario;
  document.getElementById("precioTotal").value = total.toFixed(2);
}

// Función para agregar un elemento a la lista
function agregarElemento() {
  const codigoBarrasInput = document.getElementById("codigoBarrasInput").value;
  const descripcion = document.getElementById("descripcion").value;
  const unidades = parseFloat(document.getElementById("unidades").value);
  const precioUnitario = parseFloat(document.getElementById("precioUnitario").value);
  const total = unidades * precioUnitario;

  const tabla = document.querySelector(".item-list tbody");
  const nuevaFila = document.createElement("tr");

  // Crear celdas para cada dato
  const codigoCell = document.createElement("td");
  codigoCell.textContent = codigoBarrasInput;
  nuevaFila.appendChild(codigoCell);

  const descripcionCell = document.createElement("td");
  descripcionCell.textContent = descripcion;
  nuevaFila.appendChild(descripcionCell);

  const unidadesCell = document.createElement("td");
  unidadesCell.textContent = unidades;
  nuevaFila.appendChild(unidadesCell);

  const totalCell = document.createElement("td");
  totalCell.textContent = total.toFixed(2);
  nuevaFila.appendChild(totalCell);

  // Crear botón de eliminación
  const eliminarCell = document.createElement("td");
  const eliminarButton = document.createElement("button");
  eliminarButton.textContent = "Eliminar";
  eliminarButton.className = "btn btn-danger btn-sm";
  eliminarButton.addEventListener("click", function() {
    eliminarFila(nuevaFila);
  });
  eliminarCell.appendChild(eliminarButton);
  nuevaFila.appendChild(eliminarCell);

  // Agregar la fila a la tabla
  tabla.appendChild(nuevaFila);

  // Limpiar los campos del formulario
  document.getElementById("codigoBarrasInput").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("unidades").value = "";
  document.getElementById("precioUnitario").value = "";
  document.getElementById("precioTotal").value = "0.00";

  // Actualizar el total
  const sumaTotal = calcularSumaTotal();
  document.getElementById("total-sum").textContent = sumaTotal;
}

// Función para calcular el total de la compra
function calcularSumaTotal() {
  const filas = document.querySelectorAll(".item-list tbody tr");
  let sumaTotal = 0;

  filas.forEach((fila) => {
    const totalCell = fila.querySelector("td:nth-child(4)");
    sumaTotal += parseFloat(totalCell.textContent);
  });

  return sumaTotal.toFixed(2);
}

// Función para eliminar una fila de la lista
function eliminarFila(fila) {
  fila.remove();
  const sumaTotal = calcularSumaTotal();
  document.getElementById("total-sum").textContent = sumaTotal;
}


