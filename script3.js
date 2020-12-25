var arrayObject = [];
var id = 1

//Object Constructor 
function ObjectData(id, name , address, gender, hobby) {
    this.id = id
    this.name = name ;
    this.address = address;
    this.gender = gender;
    this.hobby = hobby;
}

function submitForm(idData) {
    event.preventDefault();
    var nameSubmit = document.getElementById("name");
    var addressSubmit = document.getElementById("address");
    var genderSubmit = document.getElementById("gender");
    var hobbySubmit = document.getElementById("hobby");

    if(idData == null) {
        arrayObject.push(new ObjectData(id , nameSubmit.value, addressSubmit.value, genderSubmit.value, hobbySubmit.value));
        showData();
        id +=1;
        document.querySelector('form').reset();
    } else {
        arrayObject[(idData-1)].name = nameSubmit.value;
        arrayObject[(idData-1)].address = addressSubmit.value;
        arrayObject[(idData-1)].gender = genderSubmit.value;
        arrayObject[(idData-1)].hobby= hobbySubmit.value;
        var inputForm = document.querySelector("form[name=formSubmit]")
        inputForm.setAttribute("onsubmit" , `submitForm()`);
        nameSubmit.removeAttribute("value");
        addressSubmit.removeAttribute("value");
        genderSubmit.removeAttribute("value");
        hobbySubmit.removeAttribute("value");
        document.querySelector('form').reset();
        showData();      
    }
}

function searchData(element) {
    var searchSubmit = element.value;
    var trQuantity = document.querySelectorAll("tr");

    for (let index = 1; index < trQuantity.length; index++) {
        trQuantity[index].remove();
    }

    const filterData = arrayObject.filter((value) => {
        return value.name.includes(searchSubmit) || value.address.includes(searchSubmit)
    })

    showData(filterData);
}

function findAll(event) {
    event.preventDefault();
    showData();
}

var showData = function(data = arrayObject) {
    const table = document.querySelector("#myTable tbody");
    const listData = data.map(value => {
        return `
            <tr>
                <td>${value.name}</td>
                <td>${value.address}</td>
                <td>${value.gender}</td>
                <td>${value.hobby}</td>
                <td><button onclick = "editData(${value.id})" >Edit</button></td>
                <td><button onclick = "deleteData(${value.id})" >Delete</button></td>
            </tr>
        `       
    })

    table.innerHTML = listData.join("");
}

var deleteData = idData => {
    arrayObject.map((value, index) => {
        if(value.id == idData) {
            arrayObject.splice(index, 1);
            showData()
        }
    })
        
}

var editData = idData => {
    arrayObject.map((value, index) => {
        if(value.id == idData) {
            document.getElementById("name").setAttribute("value", arrayObject[index].name);
            document.getElementById("address").setAttribute("value", arrayObject[index].address);
            document.getElementById("gender").setAttribute("value", arrayObject[index].gender);
            document.getElementById("hobby").setAttribute("value", arrayObject[index].hobby);
            var inputForm = document.querySelector("form[name=formSubmit]")
            inputForm.setAttribute("onsubmit" , `submitForm(${arrayObject[index].id})`);
            showData()
        }
    })
}



