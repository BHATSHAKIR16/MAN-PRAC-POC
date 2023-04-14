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
        document.getElementById('assignSpan').innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';   
        document.getElementById('submitButton').disabled = true;
        
        //Code for post call with selectedItemsList goes here
        
        setTimeout(function() {
            document.getElementById('assignSpan').innerHTML = "Assigned";
        }, 500);
    
        setTimeout(function() {
            var myModalE1 = document.getElementById('AssignCoursesModal');
            var modal = bootstrap.Modal.getInstance(myModalE1);
            modal.hide();
            document.getElementById('submitButton').disabled = false;
            document.getElementById('assignSpan').innerHTML = "Assign";
        }, 1500);
}


let checkSelection = {
    assignButton2 : document.getElementById('assignbutton2'),
     showExceptionModal: function(){
        this.assignButton2.addEventListener('click',()=>{
            let warningText2=document.getElementById('warningText2')
            let modalWarning2=document.querySelector('.modal-warning2')
            var myModal = new bootstrap.Modal(document.getElementById('AssignCoursesModal'))
            
    console.log(selectedItemsList);

            if(selectedItemsList.length==0){
                modalWarning2.style.display='block'
               warningText2.innerHTML='Please select a Course first!' 
               console.log(selectedItemsList);
            }
            else if(selectedPractitioners.length==0){
                modalWarning2.style.display='block'
                warningText2.innerHTML='Please select a Practitioner first!'
            }
            else{
               myModal.toggle();
            }
            setTimeout(() => {
                modalWarning2.style.display = "none"
            }, 2000);
        })
        
    console.log(selectedItemsList);
    }
}

checkSelection.showExceptionModal();