function loadForm() {
    var xhr = new XMLHttpRequest();
    
    // URL ĐỂ LẤY FORM
    var url = "../html/product-items/caichip.html";
    
    xhr.open("GET", url, true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            document.getElementById("form-container").innerHTML = xhr.responseText;
        }
    };
    
    // Send the request
    xhr.send();
}

function closeForm() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.form-container').style.display = 'none';
}


