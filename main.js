var date = Date()
var counterVal = 0;
document.write("The Date Is, ", date)
function incrementClick() {
    updateDisplay(++counterVal);
}




function updateDisplay(val) {
    document.getElementById("cash").innerHTML = val;
}

function upgrade() {

}
