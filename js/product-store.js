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

function showForm(formId, buttonId) {
    // Lấy ra form được chọn
    var selectedForm = document.getElementById(formId);
    
    // Kiểm tra nếu form đã hiển thị, không làm gì
    if (selectedForm.style.display === 'block') {
        return;
    }
    
    // Lấy ra tất cả các form
    var forms = document.querySelectorAll('.form-container');
    
    // Duyệt qua từng form
    forms.forEach(function(form) {
        // Ẩn form hiện tại nếu có
        form.style.display = 'none';
    });
  
    // Hiển thị form được chọn
    selectedForm.style.display = 'block';
    
  
    // Đặt lại trạng thái của các button
    var buttons = document.querySelectorAll('.form-button');
    buttons.forEach(function(button) {
        if (button.id === buttonId) {
            button.classList.add('active-button'); // Thêm class active-button
        } else {
            button.classList.remove('active-button'); // Xóa class active-button
        }
    });
  }


