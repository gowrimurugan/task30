var clrs = document.querySelectorAll(".colors");
var optnBtn = document.querySelectorAll(".colors-button");
var clr = ["red", "blue", "yellow", "orange", "green", "purple", "pink", "brown", "grey", "darkgreen"];
var flag = 0;

var handleToggle = function () {
    var box = this.parentNode;
    var p = box.querySelector('p');
    p.style.color = clr[flag];
    flag++;
    if (flag >= clr.length) {
        flag = 0;
    }
};

optnBtn.forEach(function (optnBtn, index) {
    optnBtn.addEventListener("click", handleToggle);
})




// var cls = document.getElementById("student");
// var std = document.getElementById("std1");
// std.style.visibility = "visible"

// var handleStudent = function () {
//     if (std.style.visibility == "visible") {
//         std.style.visibility = "hidden";
//     } else {
//         std.style.visibility = "visible";

//     }
// }
// cls.addEventListener("click", handleStudent);
