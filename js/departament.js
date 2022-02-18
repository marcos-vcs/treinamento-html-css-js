function viewtablue()
{
    var table=document.getElementById("departament-list");
    const keys = Object.keys(localStorage);
    var r= keys.length;

    for(i=0;i<r;i++){
        var row = table.insertRow(i+1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = keys[i];
        cell2.innerHTML = localStorage.getItem(keys[i]);
        cell3.innerHTML = 
        '<span onclick="abreModalDelete()" style="font-size: 20px; word-spacing: 10px;">' 
        + '<i style="cursor:pointer" class="fa-solid fa-pen-to-square"></i>'
        + '&nbsp;'
        + '<i style="cursor:pointer" class="fa-solid fa-trash-alt"></i>'
        + '</span>';
    }

}

function abreModalDelete() {
    $("#deleteModal").modal({
      show: true
    });
}
  