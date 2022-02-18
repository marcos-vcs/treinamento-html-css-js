function viewtable()
{

    var table=document.getElementById("departament-list");
    var keys = Object.keys(localStorage);
    var r= keys.length;
    
    for(i=0;i<r;i++){
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = keys[i];
        cell2.innerHTML = localStorage.getItem(keys[i]);
        cell3.innerHTML = 
        `<span onclick="abreModalDelete('deleteModal${keys[i]}');" style="font-size: 20px; word-spacing: 10px;">` 
        + '<i style="cursor:pointer" class="fa-solid fa-pen-to-square"></i>'
        + '&nbsp;'
        + '<i style="cursor:pointer" class="fa-solid fa-trash-alt"></i>'
        + '</span>' 
        + `<div id="deleteModal${keys[i]}" class="modal" tabindex="-1" role="dialog">
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
      </div>`;

    }

}

function deleterow(id)
{
    localStorage.removeItem(id);
    location.reload();

}

function abreModalDelete(name) {
    $("#" + name).modal({
      show: true
    });
}
  