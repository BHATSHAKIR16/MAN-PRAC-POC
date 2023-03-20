fetch('poc/data.json').then(
    res => {
        res.json().then(
            data => {
                console.log(data);
                createTable(data);
            }

        )
    }
)

var createTable = function (data) {

   console.log(' from main1.js')
    if (data.data_practitioner.length > 0) {
        var temp_data = "";
        data.data_practitioner.forEach((itemData) => {
            temp_data += "<tr>"
            temp_data += "<td>" + itemData.Project + "</td>";
            temp_data += "<td>" + itemData.Duration + "</td>";
            temp_data += "<td>" + itemData.Project_performance + "</td>";
            temp_data += "<td>" + itemData.Skills + "</td>";
            temp_data += "<td>  <button   class='viewbtn'>View</button></td></tr>";

        });
        document.getElementById('practitioner_data').innerHTML = temp_data;
        document.getElementById('OverallPerformance').innerHTML = data.OverallPerformance;
        document.getElementById('OverallPerformanceRating').innerHTML = data.OverallPerformanceRating;

        
    }

}

function getChecked() {
    console.log("data checked");
    document.getElementById("assignbutton").disabled = false;
}
