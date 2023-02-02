function validate() {
    a = document.forms["in_put"]["aterm"].value;
    b = document.forms["in_put"]["bterm"].value;
    c = document.forms["in_put"]["cterm"].value;

    if (a == 0){
        outPut = "Error!";
    } else if (isNaN(a) || isNaN(b) || isNaN(c)) {
        outPut = "Error!";
    } else {
        var delta = b*b - 4*a*c;
        var x1 = (-b - Math.sqrt(delta)) / (2*a); 
        var x2 = (-b + Math.sqrt(delta)) / (2*a);
        if (delta == 0) 
            outPut = "=> <strong>x1 = x2 = </strong>" + x1;
        else if (delta < 0)
            outPut = "=> <strong>No answer!</strong>";
        else
            outPut = "=> <strong>x1</strong> =  " + x1 + " and <strong>x2</strong> = " + x2;
    }
    document.getElementById("out_put").innerHTML = outPut;
    alert("Dùng máy tính mà bấm");
}     
    
