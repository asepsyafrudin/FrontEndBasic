let globalData = []

//object data 

function ObjectData(name , address, religion, hobby, gender) {
    this.name = name ;
    this.address = address;
    this.religion= religion;
    this.hobby = hobby;
    this.gender = gender;
}

var mahasiswa1 = new ObjectData("Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki")
var mahasiswa2 = new ObjectData("Hartono", "Bekasi", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki")
var mahasiswa3 = new ObjectData("Fadil", "Bogor", "Islam" , ["Basket" , "Renang"], "Laki-Laki")
var mahasiswa4 = new ObjectData("Revina", "Surabaya", "Islam" , ["Sepeda" , "Renang"], "Perempuan")
var mahasiswa5 = new ObjectData("Syifa", "Malang", "Islam" , "Renang", "Perempuan")
var mahasiswa6 = new ObjectData("Ali", "Bekasi", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki")
var mahasiswa7 = new ObjectData("Nia", "Bandung", "Islam" , ["Sepeda" , "Renang"], "Perempuan")
var mahasiswa8 = new ObjectData("Zazam", "Semarang", "Islam" , ["Sepeda" , "Basket", "Badminton"], "Laki-Laki")
var mahasiswa9 = new ObjectData("Denny", "Bogor", "Islam" , ["Sepeda" , "Badminton"], "Laki-Laki")
var mahasiswa10 = new ObjectData("Dina", "Bogor", "Islam" , ["Sepeda" , "Badminton"], "Laki-Laki")
var mahasiswa11 = new ObjectData("Riady", "Bekasi", "Islam" , ["Sepeda" , "Renang", "Basket"], "Laki-Laki")
var mahasiswa12 = new ObjectData("Cinta", "Pekalongan", "Islam" , ["Sepeda" , "Renang" , "Football"], "Perempuan")
var mahasiswa13 = new ObjectData("Laras", "Madiun", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki")
var mahasiswa14 = new ObjectData("Sarah", "DKI Jakarta", "Islam" , ["Sepeda" , "Badminton"], "Perempuan")
var mahasiswa15 = new ObjectData("Tya", "DKI Jakarta", "Islam" , ["Sepeda" , "Basket"], "Perempuan")
var mahasiswa16 = new ObjectData("Asep Syafrudin", "DKI Jakarta", "Islam" , ["Badminton" , "Renang"], "Laki-Laki")
var mahasiswa17 = new ObjectData("Hartono", "Bekasi", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki")
var mahasiswa18 = new ObjectData("Fadil", "Bogor", "Islam" , ["Basket" , "Renang"], "Laki-Laki")
var mahasiswa19 = new ObjectData("Revina", "Surabaya", "Islam" , ["Sepeda" , "Renang"], "Perempuan")
var mahasiswa20 = new ObjectData("Syifa", "Malang", "Islam" , "Renang", "Perempuan")
var mahasiswa21 = new ObjectData("Ali", "Bekasi", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki")
var mahasiswa22 = new ObjectData("Nia", "Bandung", "Islam" , ["Sepeda" , "Renang"], "Perempuan")
var mahasiswa23 = new ObjectData("Zazam", "Semarang", "Islam" , ["Sepeda" , "Basket", "Badminton"], "Laki-Laki")
var mahasiswa24 = new ObjectData("Denny", "Bogor", "Islam" , ["Sepeda" , "Badminton"], "Laki-Laki")
var mahasiswa25 = new ObjectData("Dina", "Bogor", "Islam" , ["Sepeda" , "Badminton"], "Laki-Laki")
var mahasiswa26 = new ObjectData("Riady", "Bekasi", "Islam" , ["Sepeda" , "Renang", "Basket"], "Laki-Laki")
var mahasiswa27 = new ObjectData("Cinta", "Pekalongan", "Islam" , ["Sepeda" , "Renang" , "Football"], "Perempuan")
var mahasiswa28 = new ObjectData("Laras", "Madiun", "Islam" , ["Sepeda" , "Renang"], "Laki-Laki")
var mahasiswa29 = new ObjectData("Sarah", "DKI Jakarta", "Islam" , ["Sepeda" , "Badminton"], "Perempuan")
var mahasiswa30 = new ObjectData("Tya", "DKI Jakarta", "Islam" , ["Sepeda" , "Basket"], "Perempuan")

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

//make the pagination 
var currentPage = 1;
var total_data_per_page = 5;

var pagination = (e=1) => {
    var page = ""
    var totalPages = Math.ceil(globalData.length/total_data_per_page);
    var maxPagesShow = 3;
    currentPage = e;
    var startPage = 0;
    var endPage = 0;
    
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
                    <a class="page-link" onclick="prevpage()" tabindex="-1">Previous</a>
            </li>
        `
    
        for (let i = startPage ; i <= endPage; i++) {
            page += `
            <li class="page-item"><a class="page-link" onclick="newshow(${i})">${i}</a></li>
            `
        }  
        page += `
            <li class="page-item">
                    <a class="page-link" onclick="nextpage()" tabindex="-1">Last</a>
            </li>
        `
        document.querySelector(".pagination").innerHTML = page;
    }
}

var nextpage = () => {
        currentPage = Math.ceil(globalData.length / total_data_per_page);
        newshow(currentPage);
}

var prevpage = () => {
        newshow(1);
}
// fn to generate row table from data

const getEl = el => {
    return document.querySelector(el)
}

const showData = (dataShow = globalData) => {
    const table = getEl("table[type=listData] tbody")
    
    const listData = dataShow.map((value, index) => {
        return `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${value.name}</td>
                <td>${value.address}</td>
                <td>${value.religion}</td>
                <td>${value.hobby}</td>
                <td>${value.gender}</td>
                <td align="center">
                    <button index="${index}" onclick="updateData(this)">Ubah</button>
                </td>
                <td align = "center">
                    <button index="${index}" onclick="deleteData(this)">Hapus</button>
                </td>
            </tr>
        `
    })

    table.innerHTML = listData.join("")
}

//show data
// fn to save data
const saveData = async () => {
    event.preventDefault()

    const form = document.inputData
    const indexData = form.index.value ? form.index.value : globalData.length
    // if ? value true : value false

    const updatedData = {
        name: form.name.value,
        address: form.address.value,
        religion: form.religion.value,
        hobby: getValueCheckbox("hobby[]"),
        gender: form.gender.value
    }
    await globalData.splice(indexData, 1, updatedData);
    newshow(currentPage);
    form.reset()
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
const updateData = el => {
    el.closest("tr").style.backgroundColor = "lightgrey"

    const indexData = el.getAttribute("index")
    const selectedData = globalData[indexData]
    const form = document.inputData

    form.name.value = selectedData.name
    form.gender.value = selectedData.gender
    form.religion.value = selectedData.religion
    form.address.value = selectedData.address
    form.index.value = indexData

    setValueCheckbox("hobby[]", selectedData.hobby)
}

// delete data
const deleteData = async (el) => {
    const indexData = el.getAttribute("index") 
    await globalData.splice(indexData, 1)
    var totalPages = Math.ceil(globalData.length/total_data_per_page);
    
    if(currentPage >= totalPages) {
        currentPage = totalPages;
        newshow(currentPage);
    } else {
        newshow(currentPage);
    }
}

// fn to filter data using typed value
const searchData = self => {
    const valueSearch = self.value

    const filteredData = globalData.filter(value => {
        return value.name.includes(valueSearch) || value.address.includes(valueSearch)
    })
    showData(filteredData)
}

var show5data = function (e) {
    if (e > 0) {
        console.log(e)
        var total_tr ="";
        for(index = (e-1)*total_data_per_page; index<(e * total_data_per_page) && index < globalData.length; index++) {
            
            total_tr += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${globalData[index].name}</td>
            <td>${globalData[index].address}</td>
            <td>${globalData[index].religion}</td>
            <td>${globalData[index].hobby}</td>
            <td>${globalData[index].gender}</td>
            <td align="center">
            <button index="${index}" onclick="updateData(this)">Ubah</button>
            </td>
            <td align = "center">
                <button index="${index}" onclick="deleteData(this)">Hapus</button>
                </td>
                </tr>
                `   
            }
    }
    return total_tr;
}

async function newshow(e) {
    const table = getEl("table[type=listData] tbody")
    if(show5data(e) === undefined) {
        table.innerHTML =""
        await pagination(e);
    } else {
        table.innerHTML = show5data(e); 
        await pagination(e);
    }
}
    
newshow(1) //show the first page
    

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
 */
