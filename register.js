let globalData = []

// fn to save data
const saveData = async () => {
    event.preventDefault()

    const form = document.inputData
    const indexData = form.index.value ? form.index.value : globalData.length
    // if ? value true : value false

    const updatedData = {
        name: form.name.value,
        address: form.address.value,
        gender: form.gender.value,
        hobby: getValueCheckbox("hobby[]"),
        religion: form.religion.value
    }

    await globalData.splice(indexData, 1, updatedData)
    // if (indexData) { // update

    //     // globalData[indexData] = updatedData
    // } else { // add new
    //     // globalData.push(updateData)
    //     globalData.splice(indexData, 1, updatedData)
    // }

    showData()

    form.reset()
}

// fn to generate row table from data
const showData = (dataShow = globalData) => {
    const table = getEl("table[type=listData] tbody")

    const listData = dataShow.map((value, index) => {
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${value.name}</td>
                <td>${value.gender}</td>
                <td>${value.religion}</td>
                <td>${value.hobby}</td>
                <td>${value.address}</td>
                <td align="center">
                    <button index="${index}" onclick="updateData(this)">Ubah</button>
                    <button index="${index}" onclick="deleteData(this)">Hapus</button>
                </td>
            </tr>
        `
    })

    table.innerHTML = listData.join("")
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
    showData()
}

// fn to filter data using typed value
const searchData = self => {
    const valueSearch = self.value

    const filteredData = globalData.filter(value => {
        return value.name.includes(valueSearch) || value.address.includes(valueSearch)
    })

    showData(filteredData)
}

// fn to simplified queryselector
const getEl = el => {
    return document.querySelector(el)
}


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