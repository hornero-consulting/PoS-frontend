// Función para buscar un producto por código de barras en el archivo JSON
function buscarProductoPorCodigo(codigoBarras) {
  // Realiza una solicitud AJAX para obtener el archivo productos.json (puedes usar jQuery u otra biblioteca)
  $.getJSON("productos.json", function (data) {
    // Busca el producto con el código de barras especificado
    const producto = data.find(function (item) {
      return item.codigoBarras === codigoBarras;
    });

    if (producto) {
      // Llena los campos de descripción y precio de venta en el formulario
      document.getElementById("descripcion").value = producto.nombreProducto;
      document.getElementById("precioUnitario").value = producto.precioVenta;
    } else {
      alert("No se encontró un producto con el código de barras especificado.");
    }
  });
}

// Función para agregar un producto a la tabla de venta
function agregarProducto() {
  const codigoBarras = document.getElementById("codigoBarrasInput").value;
  const descripcion = document.getElementById("descripcion").value;
  const unidades = parseFloat(document.getElementById("unidades").value);
  const precioVenta = parseFloat(
    document.getElementById("precioUnitario").value
  );
  const total = unidades * precioVenta;

  const tabla = document.querySelector(".item-list tbody");
  const nuevaFila = document.createElement("tr");

  // Crear celdas para cada dato
  const codigoCell = document.createElement("td");
  codigoCell.textContent = codigoBarras;
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

  // Crear celda para el botón eliminar
  const eliminarCell = document.createElement("td");
  const eliminarButton = document.createElement("button");
  eliminarButton.textContent = "Eliminar";
  eliminarButton.className = "btn btn-danger btn-sm";
  eliminarButton.addEventListener("click", function () {
    eliminarFila(nuevaFila);
  });
  eliminarCell.appendChild(eliminarButton);
  nuevaFila.appendChild(eliminarCell);

  // Agregar la fila a la tabla
  tabla.appendChild(nuevaFila);

  // Calcular y actualizar el total de la venta
  calcularTotalVenta();
}

// Función para calcular el total de la venta
function calcularTotalVenta() {
  const filas = document.querySelectorAll(".item-list tbody tr");
  let sumaTotal = 0;

  filas.forEach(function (fila) {
    const totalCell = fila.querySelector("td:nth-child(4)");
    sumaTotal += parseFloat(totalCell.textContent);
  });

  // Actualizar el total de la venta en la tabla
  document.getElementById("total-venta").textContent = sumaTotal.toFixed(2);
}

// Función para eliminar una fila de la tabla
function eliminarFila(fila) {
  fila.remove();
  calcularTotalVenta(); // Recalcula el total de la venta después de eliminar la fila
}

// Función para confirmar la venta
function confirmarVenta() {
  // Aquí puedes implementar la lógica para guardar o procesar la venta

  // Limpia la tabla de productos vendidos
  const tabla = document.querySelector(".item-list tbody");
  tabla.innerHTML = "";

  // Limpia los campos del formulario
  document.getElementById("codigoBarrasInput").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("unidades").value = "";
  document.getElementById("precioUnitario").value = "";
  document.getElementById("total").value = "0.00";
  document.getElementById("total-venta").textContent = "0.00";
}

// Evento para confirmar la venta
document
  .getElementById("realizarVentaBtn")
  .addEventListener("click", function () {
    confirmarVenta();
  });

// Función para calcular el total al cambiar las unidades o el precio unitario
function calcularTotal() {
  const unidades = parseFloat(document.getElementById("unidades").value);
  const precioVenta = parseFloat(
    document.getElementById("precioUnitario").value
  );
  const total = unidades * precioVenta;

  // Actualizar el campo de total
  document.getElementById("total").value = total.toFixed(2);
}
