let globalData = []
const adminData = {
    userName : "asseeppsyafrudin@gmail.com", 
    password : "password123"
}

//object data 

function ObjectData(id ,email, name , address, religion, hobby, gender, ttl, position , password) {
    this.id = id;
    this.email=email;
    this.name = name ;
    this.address = address;
    this.religion= religion;
    this.hobby = hobby;
    this.gender = gender;
    this.ttl = ttl;
    this.position = position;
    this.password = password
}

var mahasiswa1 = new ObjectData("1", "asep@gmail.com", "Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki" , ["Bogor", "1992-01-08"] , "Staff", "password123" )
var mahasiswa2 = new ObjectData("2", "hartono@gmail.com", "Hartono", "Bekasi", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki",  ["Jakarta", "1993-01-08"] , "Staff", "password123" )
var mahasiswa3 = new ObjectData("3", "fadil@gmail.com", "Fadil", "Bogor", "Islam" , ["Basket" , "Renang"], "Laki-Laki" , ["Jakarta", "1994-05-20"] , "Staff", "password123")
var mahasiswa4 = new ObjectData("4", "revina@gmail.com", "Revina", "Surabaya", "Islam" , ["Sepeda" , "Renang"], "Perempuan" , ["Jakarta", "1994-05-20"] , "Manager", "password123")
var mahasiswa5 = new ObjectData("5", "syifa@gmail.com", "Syifa", "Malang", "Islam" , "Renang", "Perempuan" ,["Jakarta", "1994-05-20"] , "Manager", "password123")
var mahasiswa6 = new ObjectData("6", "ali@gmail.com", "Ali", "Bekasi", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki", ["Jakarta", "1994-05-20"] , "Manager", "password123")
var mahasiswa7 = new ObjectData("7", "nia@gmail.com","Nia", "Bandung", "Islam" , ["Sepeda" , "Renang"], "Perempuan", ["Jakarta", "1994-05-20"] , "Manager", "password123")
var mahasiswa8 = new ObjectData("8", "zazam@gmail.com", "Zazam", "Semarang", "Islam" , ["Sepeda" , "Basket", "Badminton"], "Laki-Laki", ["Jakarta", "1994-05-20"] , "Manager", "password123")
var mahasiswa9 = new ObjectData("9", "denny@gmail.com", "Denny", "Bogor", "Islam" , ["Sepeda" , "Badminton"], "Laki-Laki" ,["Jakarta", "1994-05-20"] , "Director", "password123")
var mahasiswa10 = new ObjectData("10", "dina@gmail.com" , "Dina", "Bogor", "Islam" , ["Sepeda" , "Badminton"], "Laki-Laki" ,["Jakarta", "1994-05-20"] , "General Manager", "password123")
var mahasiswa11 = new ObjectData("11", "riady@gmail.com", "Riady", "Bekasi", "Islam" , ["Sepeda" , "Renang", "Basket"], "Laki-Laki" , ["Jakarta", "1980-05-20"] , "Manager", "password123")
var mahasiswa12 = new ObjectData("12",  "cinta@gmail.com", "Cinta", "Pekalongan", "Islam" , ["Sepeda" , "Renang" , "Football"], "Perempuan" ,["Jakarta", "1980-05-20"] , "Manager", "password123")
var mahasiswa13 = new ObjectData("13",  "laras@gmail.com", "Laras", "Madiun", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Manager", "password123")
var mahasiswa14 = new ObjectData("14", "sarah@gmail.com", "Sarah", "DKI Jakarta", "Islam" , ["Sepeda" , "Badminton"], "Perempuan", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa15 = new ObjectData("15", "tya@gmail.com", "Tya", "DKI Jakarta", "Islam" , ["Sepeda" , "Basket"], "Perempuan" , ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa16 = new ObjectData("16", "asep@yahoo.com", "Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa17 = new ObjectData("17", "hartono@yahoo.com", "Hartono", "Bekasi", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki" ,["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa18 = new ObjectData("18", "fadil@yahoo.com", "Fadil", "Bogor", "Islam" , ["Basket" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa19 = new ObjectData("19", "revina@yahoo.com","Revina", "Surabaya", "Islam" , ["Sepeda" , "Renang"], "Perempuan", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa20 = new ObjectData("20", "syifa@yahoo.com", "Syifa", "Malang", "Islam" , "Renang", "Perempuan", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa21 = new ObjectData("21", "ali@yahoo.com", "Ali", "Bekasi", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa22 = new ObjectData("22", "nia@yahoo.com", "Nia", "Bandung", "Islam" , ["Sepeda" , "Renang"], "Perempuan", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa23 = new ObjectData("23", "zazam@yahoo.com", "Zazam", "Semarang", "Islam" , ["Sepeda" , "Basket", "Badminton"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa24 = new ObjectData("24", "denny@yahoo.com", "Denny", "Bogor", "Islam" , ["Sepeda" , "Badminton"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa25 = new ObjectData("25", "dina@yahoo.com", "Dina", "Bogor", "Islam" , ["Sepeda" , "Badminton"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa26 = new ObjectData("26", "riady@yahoo.com","Riady", "Bekasi", "Islam" , ["Sepeda" , "Renang", "Basket"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa27 = new ObjectData("27", "cinta@yahoo.com", "Cinta", "Pekalongan", "Islam" , ["Sepeda" , "Renang" , "Football"], "Perempuan", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa28 = new ObjectData("28", "laras@yahoo.com", "Laras", "Madiun", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa29 = new ObjectData("29", "sarah@yahoo.com", "Sarah", "DKI Jakarta", "Islam" , ["Sepeda" , "Badminton"], "Perempuan", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa30 = new ObjectData("30", "tya@yahoo.com","Tya", "DKI Jakarta", "Islam" , ["Sepeda" , "Basket"], "Perempuan" , ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa31 = new ObjectData("31", "asep1@yahoo.com", "Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa32 = new ObjectData("32", "asep2@yahoo.com","Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa33 = new ObjectData("33", "asep3@yahoo.com","Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa34 = new ObjectData("34", "asep4@yahoo.com","Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa35 = new ObjectData("35", "asep5@yahoo.com","Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa36 = new ObjectData("36", "asep6@yahoo.com","Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa37 = new ObjectData("37", "asep7@yahoo.com","Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")
var mahasiswa38 = new ObjectData("38", "asep8@yahoo.com","Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki", ["Jakarta", "1980-05-20"] , "Staff", "password123")


globalData.push(mahasiswa1);
globalData.push(mahasiswa2);
globalData.push(mahasiswa3);
globalData.push(mahasiswa4);
globalData.push(mahasiswa5);
globalData.push(mahasiswa6);
globalData.push(mahasiswa7);
globalData.push(mahasiswa8);
globalData.push(mahasiswa9);
globalData.push(mahasiswa10);
globalData.push(mahasiswa11);
globalData.push(mahasiswa12);
globalData.push(mahasiswa13);
globalData.push(mahasiswa14);
globalData.push(mahasiswa15);
globalData.push(mahasiswa16);
globalData.push(mahasiswa17);
globalData.push(mahasiswa18);
globalData.push(mahasiswa19);
globalData.push(mahasiswa20);
globalData.push(mahasiswa21);
globalData.push(mahasiswa22);
globalData.push(mahasiswa23);
globalData.push(mahasiswa24);
globalData.push(mahasiswa25);
globalData.push(mahasiswa26);
globalData.push(mahasiswa27);
globalData.push(mahasiswa28);
globalData.push(mahasiswa29);
globalData.push(mahasiswa30);
globalData.push(mahasiswa31);
globalData.push(mahasiswa32);
globalData.push(mahasiswa33);
globalData.push(mahasiswa34);
globalData.push(mahasiswa35);
globalData.push(mahasiswa36);
globalData.push(mahasiswa37);
globalData.push(mahasiswa38);


var karyawanLogin;
//function for Login
function login() {
    event.preventDefault();
    let formSubmitDataKaryawan = document.querySelector("form[name=inputData");
    let dataListElement = document.querySelector(".dataList");
    let loginFormElement = document.querySelector(".loginForm");
    let userName = document.querySelector("#userName").value;
    let password = document.querySelector("#password").value;

    if(userName == adminData.userName && password == adminData.password) {
        loginFormElement.classList.toggle('hidden');
        formSubmitDataKaryawan.classList.toggle('hidden');
        dataListElement.classList.toggle('hidden');
    } else {
            karyawanLogin = globalData.find(data => 
            data.email == userName && data.password == password
        );
        
        if(karyawanLogin) {
            loginFormElement.classList.toggle('hidden');
            dataListElement.classList.toggle('hidden');
            
        } else {
            alert("User & Password Anda Salah");
        }
    }
    init();
}

//make the pagination 
let currentPage = 1;
let total_data_per_page = 5;
let maxPagesShow = 4;

const pagination = (e=1, data = globalData) => {
    let page = ""
    let totalPages = Math.ceil(data.length/total_data_per_page);
    currentPage = e;
    let startPage = 0;
    let endPage = 0;
    
    if(totalPages > 0) {
        if (totalPages <= maxPagesShow) {
            // total pages less than max so show all pages
            startPage = 1;
            endPage = totalPages;
        } else {
            // total pages more than max so calculate start and end pages
            let maxPagesBeforeCurrentPage = Math.floor(maxPagesShow / 2);
            let maxPagesAfterCurrentPage = Math.ceil(maxPagesShow / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                // current page near the start
                startPage = 1;
                endPage = maxPagesShow;
            } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                // current page near the end
                startPage = totalPages - maxPagesShow + 1;
                endPage = totalPages;
            } else {
                // current page somewhere in the middle
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        page += `
            <li class="page-item">
                    <a class="page-link" onclick="prevpage(checkFilter())" tabindex="-1">Previous</a>
            </li>
        `
    
        for (let i = startPage ; i <= endPage; i++) {
            page += `
            <li class="page-item"><a class="page-link" onclick="newshow(${i}, checkFilter())">${i}</a></li>
            `
        }  
        page += `
            <li class="page-item">
                    <a class="page-link" onclick="nextpage(checkFilter())" tabindex="-1">Last</a>
            </li>
        `
        document.querySelector(".pagination").innerHTML = page;
    } else{
        document.querySelector(".pagination").innerHTML=" ";
    }
    
}

const nextpage = (data = globalData) => {
        currentPage = Math.ceil(data.length / total_data_per_page);
        newshow(currentPage , data);
}

const prevpage = (data = globalData) => {
        newshow(1 , data);
}
// fn to generate row table from data

const getEl = el => {
    return document.querySelector(el)
}

//show data
// fn to save data

const saveData = (data = globalData) => {
    event.preventDefault()
    let startIdUser = new Date();
    const form = document.inputData
    // if ? value true : value false
    let idUser = form.idUser.value ? form.idUser.value : startIdUser ;
    if (idUser == form.idUser.value) {
        if(validatePasswordAndConfirmPassword(form.password.value, form.confirmPassword.value)) {
            for (let index = 0; index < globalData.length; index++) {
                if(globalData[index].id == idUser) {
                    globalData[index].name = form.name.value;
                    globalData[index].address = form.address.value;
                    globalData[index].religion = form.religion.value;
                    globalData[index].hobby = getValueCheckbox("hobby[]");
                    globalData[index].gender = form.gender.value;
                    globalData[index].ttl   = getValuePlaceOfBirthAndDate();
                    globalData[index].password = form.password.value;
                    globalData[index].position = form.position.value;
                    globalData[index].email = form.email.value;
                    form.idUser.removeAttribute('value');
                    break;
                } 
            }
            form.reset();
        } else {
                alert("Password & Confirm Password dont Match");
                event.preventDefault();
        }
    } else {
        const emailalreadyRegistered= globalData.find(value => value.email == form.email.value);
        if(emailalreadyRegistered) {
            alert ("Email already Registered");
        } else if(validatePasswordAndConfirmPassword(form.password.value, form.confirmPassword.value)){
            let newData = new ObjectData(
                idUser , 
                form.email.value,
                form.name.value , 
                form.address.value , 
                form.religion.value , 
                getValueCheckbox("hobby[]"), 
                form.gender.value, 
                getValuePlaceOfBirthAndDate(),
                form.position.value,
                form.password.value
            )
            globalData.push(newData);
            form.reset();
        } else {
            alert("Password & Confirm Password dont Match");
            event.preventDefault();
        }
    }

    //for checking the data if null which one to show.
    if(data.length != 0) {
        newshow(currentPage, globalData);
    }
}

function validatePasswordAndConfirmPassword(password, confirmPassword) {
    return password == confirmPassword;
}
//Get Value from place of birth and date
const getValuePlaceOfBirthAndDate = () => {
    let valuePlaceOfBirthAndDate = [];
    valuePlaceOfBirthAndDate.push(document.querySelector("form [name=placeOfBirth]").value);
    valuePlaceOfBirthAndDate.push(document.querySelector("form [name=birthDate]").value);
    return valuePlaceOfBirthAndDate;
}

// get values from checkboxes
const getValueCheckbox = el => {
    const els = document.querySelectorAll("input[name='" + el + "']:checked")
    let values = []
    els.forEach(value => values.push(value.value))
    return values
}

// set values to checkboxes
const setValueCheckbox = (el, values) => {
    const els = document.querySelectorAll("input[name='" + el + "']")

    els.forEach(input => {
        input.checked = values.indexOf(input.value) != -1 ? "checked" : ""
    })
}


// set form's values
const updateData = (el, data=globalData) => {

    if(karyawanLogin) {
        alert("Please Login as Admin!!")
    } else {
        el.closest("tr").style.backgroundColor = "red";
        const indexData = el.getAttribute("index");
        console.log(el);
        console.log(indexData);
        const selectedData = data[indexData];
        const form = document.inputData;
    
        //updating data in global data
        form.idUser.value = selectedData.id;
        form.email.value = selectedData.email;
        form.name.value = selectedData.name;
        form.gender.value = selectedData.gender;
        form.religion.value = selectedData.religion;
        form.address.value = selectedData.address;
        form.index.value = indexData;
        form.placeOfBirth.value = selectedData.ttl[0];
        form.birthDate.value = selectedData.ttl[1];
        form.password.value = selectedData.password;  
        //set value in form 
        setValueCheckbox("hobby[]", selectedData.hobby);
    }
}

// delete data
const deleteData = async (el , data = globalData) => {
    if(karyawanLogin) {
        alert("Please Login as Admin!!");
    } else {
        const idData = el.id;
        for (let index = 0; index < globalData.length; index++) {
            if (globalData[index].id == idData) {
                await globalData.splice(index , 1);
            }        
        }
        //for delete array in data array when search feature is running
        for (let index = 0; index < data.length; index++) {
            if (data[index].id == idData) {
                await data.splice(index , 1);
            }     
        }
        //show pagination after delete data , it wil check current total page
        let totalPages = Math.ceil(data.length/total_data_per_page);
        if(currentPage >= totalPages) {
            currentPage = totalPages;
            newshow(currentPage, data);
        } else {
            newshow(currentPage, data);
        }
    }
}

// fn to filter data using typed value
const filterData = self => {
    const valueSearch = self.value.toLowerCase();

    const filteredData = globalData.filter(value => {
        const nameData = value.name.toLowerCase();
        const addressData = value.name.toLowerCase();
        return nameData.includes(valueSearch) || addressData.includes(valueSearch)
    })
    return filteredData;
}

//search data 
const searchData = self => {
    newshow(1, filterData(self));
}

//function to show the data
const show5data = function (page , data = globalData) {
    if (page > 0) {
        var total_tr ="";
        for(index = (page-1)*total_data_per_page; index<(page * total_data_per_page) && index < data.length; index++) {
            
            total_tr += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${data[index].name}</td>
            <td>${data[index].address}</td>
            <td>${data[index].religion}</td>
            <td>${data[index].hobby}</td>
            <td>${data[index].gender}</td>
            <td>${data[index].ttl}</td>
            <td>${data[index].position}</td>`
            
            console.log(karyawanLogin);
            if(karyawanLogin) {
                document.querySelector("[type=admin]").classList.add("hidden");
                
            } else {
                    total_tr += 
                    `            
                    <td align="center">
                    <button index="${index}" onclick="updateData(this, checkFilter())">Ubah</button>
                    </td>
                    <td align = "center">
                        <button index="${index}" id="${data[index].id}" onclick="deleteData(this, checkFilter())">Hapus</button>
                        </td>
                        </tr>
                        `   
                }
            }
            pagination(page, data);
    }
    return total_tr;
}

//function to call the show function
 async function newshow(page , data) {
    const table = getEl("table[type=listData] tbody")
    if(show5data(page , data ) === undefined) {
        table.innerHTML =""
    } else {
        let tr = show5data(page, data); 
        table.innerHTML = tr;
    }
}

//initialization the first page to show
function init() {
    newshow(1)
}//show the first page
    
/*untuk mengecek apakah search box berisi suatu nilai 
untuk di cari sehingga data yang di tampilkan pada pagination bisa sesuai 
**/

function checkFilter(){
    let key = document.querySelector("#mySearch");
    let arraySearch = filterData(key);
    return arraySearch;    
}

// const check = (value) => {
//     console.log(value.value)
// }



/**
 * TUGAS:
 *      - Tambah action edit dan delete pada List data latihan sebelumnya
 *      - Lakukan perubahan pada form:
 *          - Jenis kelamin menggunakan Radio
 *          - Hobi menggunakan checkbox (Membaca, Tiduran, Badminton, Main Bola, Futsal)
 *          - Agama menggunakan Dropdown List (select - option)
 *      - Ketika klik edit pada List data, maka form akan otomatis terisi data sesuai dengan data yang dipilih
 *
 *
 * Latihan:
 *      - Tambahin pagination di bawah table (seperti pagination ada google search)
 *      - Setiap halaman menampilkan 5 data
 *      - Buat default data sebanyak 15 data
 * 
 * - buat daftar karyawan  (nama , jenis klamin , TTL , Alamat , Jabatan)
 * - tersedia form Login 
 * - karyawan yang sudah daftar bisa login 
 * - admin bisa mendaftarkan karyawan 
 * - karyawan tidak bisa mendaftarkan karyawan lain
 */
