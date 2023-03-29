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
            temp += "<td style='width: 8%;'> <input type='checkbox' name='selectBox'  class='select-row'> </td>";
            temp += "<td style='width: 35%; text-align: left;'>" + itemData.File_name + "</td>";
            temp += "<td style='width: 15%;'>" + itemData.Date_modified + "</td>";
            temp += "<td style='width: 30%;'>" + itemData.roles_applicable + "</td></tr>";
        });
        document.getElementById('learningData').innerHTML = temp;


}

function getChecked() {
    console.log("data checked");
    document.getElementById("assignbutton").disabled = false;
}
