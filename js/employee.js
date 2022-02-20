function viewtable() {

  var table = document.getElementById("employee-list");
  var keys = Object.keys(localStorage);
  var r = keys.length;

  for (i = 0; i < r; i++) {
      if (localStorage.getItem(keys[i]).includes("{employee}")) {
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = keys[i];
      value = localStorage.getItem(keys[i]).replace("{employee}", "");
      cell2.innerHTML = value;
      cell3.innerHTML =
          `<span style="font-size: 20px; word-spacing: 10px;">` +
          `<i onclick="abreModal('editModal${keys[i]}');" style="cursor:pointer" class="fa-solid fa-pen-to-square"></i>` +
          "&nbsp;" +
          `<i onclick="abreModal('deleteModal${keys[i]}');" style="cursor:pointer" class="fa-solid fa-trash-alt"></i>` +
          "</span>" +
          `<div id="deleteModal${keys[i]}" class="modal" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                  <h5 class="modal-title">Tem certeza que deseja excluir?</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div class="modal-body">
                  <p>A operação que deseja fazer excluí por completo o dado do armazenamento local.</p>
                  </div>
                  <div class="modal-footer">
                  <button onclick="deleterow('${keys[i]}');" data-dismiss="modal" type="button" class="btn btn-primary">Confirmar</button>
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                  </div>
              </div>
              </div>
          </div>` +
          `<div class="modal fade" id="editModal${keys[i]}" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
              <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Editar Departmento</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
              </div>
              <div class="modal-body">
      
              <form class="needs-validation" novalidate>
                  <div class="form-row">
                  <div class="col mb-3">
                      <label for="validationCustom01">Nome do Funcionário</label>
                      <input type="text" value="${value}" class="form-control" id="employeeNameEdit${keys[i]}" placeholder="Nome" required>
                      <div class="valid-feedback">
                      Tudo certo!
                      </div>
                      <div class="invalid-feedback">
                      Por favor, informe o nome do funcionário!
                      </div>
                  </div>
                  </div>
      
                  <button onclick="editEmployee('${keys[i]}')" class="btn btn-primary" type="submit">Enviar</button>
              </form>
      
              <script>
                  // Exemplo de JavaScript inicial para desativar envios de formulário, se houver campos inválidos.
                  (function () {
                  'use strict';
                  window.addEventListener('load', function () {
                      // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
                      var forms = document.getElementsByClassName('needs-validation');
                      // Faz um loop neles e evita o envio
                      var validation = Array.prototype.filter.call(forms, function (form) {
                      form.addEventListener('submit', function (event) {
                          if (form.checkValidity() === false) {
                          event.preventDefault();
                          event.stopPropagation();
                          }
                          form.classList.add('was-validated');
                      }, false);
                      });
                  }, false);
                  })();
              </script>
      
              </div>
          </div>
          </div>
      </div>`;
      }
  }

  notFound();

}

function deleterow(id) {
localStorage.removeItem(id);
location.reload();
}

function findByEmployee() {
  var employee = document.getElementById("employeeFind").value;
  var table = document.getElementById("employee-list");
  var keys = Object.keys(localStorage);
  var r = keys.length;

  for(i = 1; i < table.rows.length; i++) {
      if(table.rows[i].cells[1].innerHTML.toLowerCase().includes(employee.toLowerCase())) {
          table.rows[i].style.display = "";
      } else {
          table.rows[i].style.display = "none";
      }
  }
  
}  

function createEmployee() {
var employee = document.getElementById("employeeNameCreate").value;
employee = "{employee}" + employee;
var key = new Date().getTime();
localStorage.setItem(key, employee);
location.reload();
}

function editEmployee(id) {
  var employee = document.getElementById("employeeNameEdit" + id).value;
  var employee = "{employee}" + employee;
  localStorage.setItem(id, employee);
  location.reload();
}

function abreModal(name) {
$("#" + name).modal({
  show: true,
});
}

function notFound(){

  var table = document.getElementById("employee-list");
  if(table.rows.length >= 2){
    document.getElementById("not-found").style.display = "none";
  }else{
    document.getElementById("not-found").style.display = "block";
  }

}
