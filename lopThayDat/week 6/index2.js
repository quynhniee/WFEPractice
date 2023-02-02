function mDown (obj) {
    obj.style.backgroundColor = "aquamarine";
}
function mUp (obj) {
    obj.style.backgroundColor = "lightcoral";
}
var k = 1;
let ojs = [
    {name: "Name", age: "Age", addr: "Address"},
    {name : "Nguyen Van A", age : 13, addr : "Ha Noi"},
    {name : "Nguyen Van B", age : 14, addr : "Thai Binh"},
    {name : "Nguyen Van C", age : 10, addr : "Nam Dinh"}
];
let buttonGet = document.getElementById("Button");
function MyFunction () {
    if (k==1) {
        let myTable = document.getElementById("Table") ;
        let tagTable = document.createElement("table");
        ojs.forEach (function (oj, index) {
            console.log(oj);
            var tagRow = document.createElement("tr");
            tagTable.appendChild(tagRow);
            for (var j in oj) {
                var tagCol = document.createElement("td");
                var textNode = document.createTextNode(oj[j]);
                tagCol.appendChild(textNode);
                tagRow.appendChild(tagCol);
            }
        });
        myTable.appendChild(tagTable);
    }
    k++;
};

