//global variable ;

const carPricePerHour = 3000;
const CarNextPricePerHour = 1500;
const motocyclePricePerHour = 2000;
const motocycleNextPricePerHour = 1000;

let globalDataParking = [];

function dataParking(noPol , vehicleType , entryTime , status, outTime, price ) {
    this.noPol = noPol ; 
    this.vehicleType = vehicleType;
    this.entryTime = entryTime;
    this.status = status;
    this.outTime = outTime;
    this.price = price;
}

function enterTicket(event) {
    event.preventDefault();
    let noPol = document.querySelector("form[name=parkirEntry] input").value;
    let vehicle = document.querySelector("form[name=parkirEntry] select").value;
    let startTime = new Date();
    const vehicleAlreadyIn = globalDataParking.find(value => value.noPol == noPol && value.status == "in");

    if(vehicleAlreadyIn) {
        alert("Kendaraan Sudah terparkir didalam!!")
    } else {
        ticketShow(noPol, vehicle, startTime.toUTCString(), "-----" , "-----");
        let newDataEntry = new dataParking(noPol, vehicle, startTime, "in" , "-----", "-----");
        globalDataParking.push(newDataEntry);
        newshow(currentPage, checkFilter())
    }  
    document.querySelector("form[name=parkirEntry]").reset();
}

function parkirOutVehicle() {
    event.preventDefault();
    let noPol = document.querySelector("form[name=parkirOut] input").value;
    const vehicleData = globalDataParking.find(value => value.noPol == noPol && value.status == "in");
    if(vehicleData) {
        const endTime = new Date();
        let totalTimeMinutes =Math.ceil((endTime - vehicleData.entryTime)/1000/60);
        let totalPrice = 0;
        console.log(totalTimeMinutes);

        if(vehicleData.vehicleType == "Mobil") {
            if(totalTimeMinutes <=1) {
                totalPrice = carPricePerHour; 
            } else {
                totalPrice = carPricePerHour + ((totalTimeMinutes-1)*CarNextPricePerHour);
            }
        } else {
            if(totalTimeMinutes <=1) {
                totalPrice = motocyclePricePerHour; 
            } else {
                totalPrice = motocyclePricePerHour + ((totalTimeMinutes-1)*motocycleNextPricePerHour);
            }
        }

        for (let index = 0; index < globalDataParking.length; index++) {
            if(globalDataParking[index].noPol==vehicleData.noPol && globalDataParking[index].status == "in") {
                globalDataParking[index].status = "out";
                globalDataParking[index].outTime = endTime;
                globalDataParking[index].price = totalPrice;
             }
        }
        ticketShow(vehicleData.noPol, vehicleData.vehicleType, vehicleData.entryTime.toUTCString(), vehicleData.outTime.toUTCString(), currencyFormat(vehicleData.price))
        newshow(currentPage, checkFilter())
        
    } else {
        alert("Tidak Ada Kendaraan tersebut parkir didalam!!")
    }
    document.querySelector("form[name=parkirOut]").reset();
}

function ticketShow(noPol , vehicleType , timeIn, timeOut, price) {
    let ticketMode = document.querySelector(".judulTiket span");  
    let entryTime = document.querySelectorAll(".entryTime div>h5")[1];
    let noPolTicket = document.querySelectorAll(".No_Pol div>h5")[1];
    let outTime = document.querySelectorAll(".outTime div>h5")[1];
    let totalPrice = document.querySelectorAll(".price div>h5")[1];
    let footerPriceperHour = document.querySelectorAll(".footerTicket span")[0];
    let footerNextPriceperHour = document.querySelectorAll(".footerTicket span")[1];
    
    
    ticketMode.innerHTML = vehicleType;
    noPolTicket.innerHTML = noPol;
    entryTime.innerHTML = timeIn;
    outTime.innerHTML = timeOut;
    totalPrice.innerHTML = price;
    
    
    if(vehicleType == "Mobil") {
        footerPriceperHour.innerHTML = currencyFormat(carPricePerHour)
        footerNextPriceperHour.innerHTML = currencyFormat(CarNextPricePerHour)
    } else {
        footerPriceperHour.innerHTML = currencyFormat(motocyclePricePerHour);
        footerNextPriceperHour.innerHTML = currencyFormat(motocycleNextPricePerHour);
    }
}

function currencyFormat(num) {
    return 'Rp' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

const show5data = function (page , data = globalDataParking) {
    if (page > 0) {
        var total_tr ="";
        for(index = (page-1)*total_data_per_page; index<(page * total_data_per_page) && index < data.length; index++) {
            
            total_tr += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${data[index].noPol}</td>
                <td>${data[index].vehicleType}</td>
                <td>${data[index].entryTime}</td>
                <td>${data[index].outTime}</td>
                <td>${data[index].price}</td>
            <tr> `
        }
            pagination(page, data);
    }
    return total_tr;
}

//make the pagination 
let currentPage = 1;
let total_data_per_page = 5;
let maxPagesShow = 4;

const pagination = (e=1, data = globalDataParking) => {
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

const filterData = self => {
    const valueSearch = self.value.toLowerCase();

    const filteredData = globalDataParking.filter(value => {
        const noPol = value.noPol.toLowerCase();
        const vehicle = value.vehicleType.toLowerCase();
        return noPol.includes(valueSearch) || vehicle.includes(valueSearch)
    })
    return filteredData;
}

//search data 
const searchData = self => {
    newshow(1, filterData(self));
}


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
}

const getEl = el => {
    return document.querySelector(el)
}

function checkFilter(){
    let key = document.querySelector("#mySearch");
    let arraySearch = filterData(key);
    return arraySearch;    
}

function parkirData() {
    document.querySelector(".parkingContainer").classList.toggle("hidden");
    document.querySelector(".dataParkirList").classList.toggle("hidden");
}


