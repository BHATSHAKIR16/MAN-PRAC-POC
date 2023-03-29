var selectedItemsList = [];
fetch('poc/data.json').then(
    res => {
        res.json().then(
            data => {
                console.log(data);
                createTable2(data);
            }

        )
    }
)

var createTable2 = function(data){

        console.log('data is present')

        var temp = "";
        data.data.forEach((itemData) => {
            temp += "<tr>"
            temp += "<td style='width: 8%;'> <input id='course"+itemData.itemId+"' onclick='selectedItems("+itemData.itemId+")' type='checkbox' name='selectBox' class='select-row'> </td>";
            temp += "<td style='width: 35%; text-align: left;'>" + itemData.File_name + "</td>";
            temp += "<td style='width: 15%;'>" + itemData.Date_modified + "</td>";
            temp += "<td style='width: 30%;'>" + itemData.roles_applicable + "</td></tr>";
        });
        document.getElementById('learningData').innerHTML = temp;


}

function selectedItems(current) {
    if(document.getElementById('course'+current).checked){
        selectedItemsList.push(current);
    } else{
        selectedItemsList.pop(current);
    }
    console.log(selectedItemsList);
}

function AssignCoursesPost(){
    console.log("courses assigned");
    document.getElementById('assignSpan').innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';   
    document.getElementById('submitButton').disabled = true;
    
    //Code for post call with selectedItemsList goes here
    
    setTimeout(function() {
        document.getElementById('assignSpan').innerHTML = "Assigned";
    }, 500);

    setTimeout(function() {
        var myModalEl = document.getElementById('AssignCoursesModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
        document.getElementById('submitButton').disabled = false;
        document.getElementById('assignSpan').innerHTML = "Assign";
    }, 1500);
}
