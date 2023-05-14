let flag = 0;
function dayfun(obj) {
    if (isNaN(obj.value)) {
        document.getElementById('err-day').innerText = "This field is required";
        document.getElementById('day').style.color = "red";
        flag = 0;
    }
    else {
        if (obj.value > 31) {
            document.getElementById('err-day').innerText = "Must be a valid day";
            document.getElementById('day').style.color = "red";
            flag = 0;
        }
        else {
            document.getElementById('err-day').innerText = "";
            document.getElementById('day').style.color = "";
            flag = 1;
        }
    }
}
function monthfun(obj) {
    if (isNaN(obj.value)) {
        document.getElementById('err-month').innerText = "This field is required";
        document.getElementById('month').style.color = "red";
        flag = 0;
    }
    else {
        if (obj.value > 12) {
            document.getElementById('err-month').innerText = "Must be a valid month";
            document.getElementById('month').style.color = "red";
            flag = 0;
        }
        else {
            document.getElementById('err-month').innerText = "";
            document.getElementById('month').style.color = "";
            flag = 1;
        }
    }
}
function yearfun(obj) {
    if (isNaN(obj.value)) {
        document.getElementById('err-year').innerText = "This field is required";
        document.getElementById('year').style.color = "red";
        flag = 0;
    }
    else {
        if (obj.value > 2023) {
            document.getElementById('err-year').innerText = "Must be in past";
            document.getElementById('year').style.color = "red";
            flag = 0;
        }
        else {
            document.getElementById('err-year').innerText = "";
            document.getElementById('year').style.color = "";
            flag = 1;
        }
    }
}


function calcAge(){
    var d1 = document.getElementById('day-in').value;
    var m1 = document.getElementById('months-in').value;
    var y1 = document.getElementById('year-in').value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(d1> d2){
        d2 = d2 + month[m2 -1];
        m2 = m2 -1;
    }
    if(m1> m2){
        m2 = m2 +12;
        y2 = y2 -1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    // my calc 
    if(m1 == 2){
        if(d1 == 30 || d1 == 31){
            flag = 0;
        }
        else{
            flag = 1;
        }
    }
    if(m1 == 4 || m1 == 6 || m1 == 9 || m1 == 11){
        if (d1 == 31){
            flag = 0;
        }
        else{
            flag = 1;
        }
    }

    if (flag == 1) {
        document.getElementById('day-out').innerText = d;
        document.getElementById('month-out').innerText = m;
        document.getElementById('year-out').innerText = y;
        document.getElementById('err-catch').innerText = "";
    }
    else {
        document.getElementById('err-catch').innerText = "Enter the valid date";
        // return false;
    }


}