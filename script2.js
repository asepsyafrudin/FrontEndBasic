//penulisan function 

function namaFunction () {
    console.log("penulisan function ke 1");
}

const namaFunction2 = function(){
    console.log("penulisan function ke 2");
}

const namaFunction3= ()=> {
    console.log("penulisan function ke 3");
}


namaFunction();
namaFunction2();
namaFunction3;


// call back function 
const runCb = value => {
    console.log(`value hasil coallback ${value}`);
}

const runFn =() => {
    console.log("running ");
    cbFn(7) //param1

    cbFn(
        1,
        3,
        msg => {
            if (msg) console.error(msg);
        },
        msg => {
            if(msg) console.info(msg)
        },
        20) //no
}

const cbn = (
    param1,
    param2,
    eror =() => {},
    success = () => {},
    no = 9
) => {
    const total = param1 + param2;
    if(total < 5) {
        error ("data kurang dari 5!!")
    } else {
        success("data sesuai")
    }
    console.log("param 2 :" , param2)
    console.log("No : " , no)
}

let umur = 21;
console.log(typeof umur);
umur ="22";


sisaUmur = 60 + umur + ""
console.warn("sisa umur: " + sisaUmur)

//promise

const fnPromise = new Promise (
    (resolve, reject) => {
        setTimeout(
            ()=>{
                console.log("ini didalam timeout")
                const total = 50 - 17;
                resolve()
            }, 5000
        )
        reject("Error value")
    }
)

fnPromise
    .then(()=> {
            console.log("success")
        })
    .catch( err => {
        console.error("ERROR: " , err);
    })
    .finally(()=> {
        console.info("dirunning kapanpun!!")
    })


const lamaFn = async () => {
    const hasil= await fetch('http://jsonplaceholder.typicode.com/todos/1')

    return hasil.status;
}

const hitungTotal = async() => {
    const hasilLama = lamaFn()
    console.info("hasilLama:" , typeof hasilLama)

    if (hasilLama > 0 ) {
        const total = hasilLama + 10
        console.log("total:", total)
    } else {
        console.warn ("hasil salah")
    }
}

hitungTotal()

let dataStudent = [ {
    name : "Admin",
    age : 22
}, {
    name : "Operator",
    age : 22
}, {
    name : " User",
    age : 21
}]


const sliceArr = dataStudent.slice(1,3)
const someArr = dataStudent.some(value => value.age >=20)
const findArr = dataStudent.find(value => value.age >=20)
const fillterArr = dataStudent.filter (value => value.age >= 21)

console.log("slice:" , sliceArr);
console.log("some:" , someArr);
console.log("find : " , findArr );
console.log("filter :", fillterArr);


let totalUmur = 0;
let totalUmurForEach = 0
console.info("=======startforeach==========")
dataStudent.forEach(value => {
    console.log("Nama : ", value.name)
    totalUmurForEach += value.age
})

console.info("========end foreach=========")
console.info("===========start for")

for (let index = 0; index < dataStudent.length; index++) {
    const element = dataStudent[index];
    
    console.log("Nama :" ,  element.name)
    totalUmurFor += element.age
}
console.log("=======for end==========")
console.log("totalUmurFor Each" , totalUmurForEach)
console.log("totalUmurFor :" , totalUmurFor)

const mapStudent = dataStudent.map(value => {
    return {
        nama : value.name,
        age : value.age + 2
    }
})

console.log("hasil map :" , mapStudent);


