function genQR() {
    var apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value.trim(); // Trim whitespace
    var mysize = document.getElementById("size").value;

    if (mytext !== "") {
        myimg.src = apiUrl + mysize + "x" + mysize + "&data=" + encodeURIComponent(mytext);
    } else {
        alert("Please Enter Text");
    }
}


// function genQR() {
//     var gapi = "https://chart.googleapis.com/chart?cht=qr&chs=";
//     var myimg = document.getElementById("img");
//     var mytext = document.getElementById("qrtext").value;
//     var mysize = document.getElementById("size").value;

//     if (mytext !== "" && mysize == "100") {
//         myimg.src = gapi + "100x100" + "&chl=" + mytext;
//         // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
//     } else if (mytext !== "" && mysize == "150") {

//         myimg.src = gapi + "150x150" + "&chl=" + mytext;
//     } else if (mytext !== "" && mysize == "200") {
//         myimg.src = gapi + "200x200" + "&chl=" + mytext;
//     } else if (mytext !== "" && mysize == "250") {
//         myimg.src = gapi + "250x250" + "&chl=" + mytext;
//     } else if (mytext !== "" && mysize == "300") {
//         myimg.src = gapi + "300x300" + "&chl=" + mytext;
//     } else {
//         alert("Please Enter Text");
//     }

// }