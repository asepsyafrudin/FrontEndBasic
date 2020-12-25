function setLevel(a, b) {

    for (let i=1 ; i<=5 ; i++) {
        var setLevel = document.getElementById("field" + a + i);
        setLevel.classList.remove("blue");
    }

   for (let i = 1 ; i<=b ;  i++) {
        var setLevel = document.getElementById("field" + a + i);
        setLevel.classList.add("blue");
   }
}

// function submitForm(event) {
//     event.preventDefault();
    
//     var nameSubmit = document.getElementById("nameSubmit").value;
//     var birthSubmit = document.getElementById("dateSubmit").value;
//     var addressSubmit = document.getElementById("addressSubmit").value;
    
//     var nameId = document.getElementById("name");
//     var birthId = document.getElementById("date");
//     var addressId = document.getElementById("address");

//     nameId.innerText = nameSubmit;
//     birthId.innerText = birthSubmit;
//     addressId.innerText = addressSubmit
    
// }

var arrayObject = [];

function submitForm (event) {
    event.preventDefault();
    var nameSubmit = document.getElementById("nameSubmit").value;
    var birthSubmit = document.getElementById("dateSubmit").value;
    var addressSubmit = document.getElementById("addressSubmit").value;
    var form = document.querySelector("form")
    var inputObject = {};
    inputObject.name = nameSubmit;
    inputObject.birth = birthSubmit;
    inputObject.address = addressSubmit;
    arrayObject.push(inputObject);

    form.reset();
}

var currentIndex = null;
function nextFunction() {
    if(currentIndex < arrayObject.length-1) {
        currentIndex+=1;
        show(currentIndex)
    } else {
        show(currentIndex)
    } 
}

function prevFunction () {
    if(currentIndex > 0) {
        currentIndex -=1;
        show(currentIndex)
    } else {
        show(currentIndex)
    }
   
}

function show(value) {
    var nameId = document.getElementById("name");
    var birthId = document.getElementById("date");
    var addressId = document.getElementById("address");
    
    nameId.innerText = arrayObject[value].name;
    birthId.innerText = arrayObject[value].birth;
    addressId.innerText = arrayObject[value].address;
}
