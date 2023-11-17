var $ = function (id) {
    return document.getElementById(id); 
};

function clearFields(){
    $("subtotal").value ="";
    $("tax_rate").value ="";
    $("sales_tax").value ="";
    $("total").value ="";
}

window.addEventListener("load", (event) => {
    $("calculate").addEventListener("click", (event) => {
        processEntries()
    });
    $("subtotal").addEventListener("click", (event) => {
        $("subtotal").value = "";
    });
    $("tax_rate").addEventListener("click", (event) => {
        $("tax_rate").value = "";
    });
    $("clear").addEventListener("click", (event) => {
        clearFields()
    });
});

function processEntries(){
    var subTotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("tax_rate").value);
    
    if( isNaN(subTotal) || subTotal < 0 || subTotal > 10000){
        alert('Subtotal should be greater than 0 and less than 10,000');
        return false;
    }
    if( isNaN(taxRate) || taxRate < 0 || taxRate > 12){
        alert('Tax rate should be greater than 0 and less than 12');
        return false;
    }
    var salesTax = (subTotal*taxRate)/100;
    $("sales_tax").value = salesTax;
    var total = salesTax + subTotal;
    $("total").value = total;
}


