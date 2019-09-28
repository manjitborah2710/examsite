// document.addEventListener('contextmenu', event => event.preventDefault());

let c = 120;

function f() {
    let v = document.getElementById("time");
    v.innerHTML = c;
    c--;
}
f();
setInterval(f, 1000);

// let ps = 0;
// document.addEventListener("visibilitychange", function () {
//     if (document.visibilityState === 'visible' && ps == 1) {
//         alert("You have tried to move to a different window or tab");
//         ps = 0;
//     } else {
//         ps = 1;
//     }
// });

let fs = 0;
window.onfocus = function () {
    if (fs == 1) {
        fs = 2;
        alert("You have tried to move to somwhere else");
    }
}

window.onblur = function () {
    if (fs == 2) {
        fs = 0;
        return;
    }
    fs = 1;
}


// var video = document.querySelector("#videoElement");

// if (navigator.mediaDevices.getUserMedia) {
//     navigator.mediaDevices.getUserMedia({ video: true })
//         .then(function (stream) {
//             video.srcObject = stream;
//         })
//         .catch(function (err0r) {
//             console.log("Something went wrong!");
//         });
// }