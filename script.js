function validation() {
    var text = document.getElementById("mail").value;

    var regexp = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

    if(regexp.test(text))
    {
        document.getElementById("false").style.visibility = "hidden";
        document.getElementById("error").style.visibility = "hidden";
        document.getElementById("mail").style.borderColor = "none";
    } else {
        document.getElementById("false").style.visibility = "visible";
        document.getElementById("error").style.visibility = "visible";
        document.getElementById("mail").style.borderColor = "red";
    }
}