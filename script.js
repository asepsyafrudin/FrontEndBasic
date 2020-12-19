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