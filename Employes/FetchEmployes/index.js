const apiList = ;
const apiFoot = ;

var employees = [];

function addSingleEmployee(){
    var rowId = parseInt(_rowId);

    if(rowId < 0  || rowId >= employees.length) {
        return false;
    }
    var name = document.createElement('td');
    name.innerHTML = 

}

function addEmployees()
    {
        console.log(employees);
        apiList.innerHTML = '';

        for (var i = 0; i < employees.length; i++){
            addSingleEmployee(i);
        }
    }

    function deleteEmployee(_rowId){
        var rowId = parseInt(_rowId);

        if(rowId < 0 || )
    }