document.addEventListener("DOMContentLoaded", function() {
    // Xử lý cho phần categories
    var viewAllBtn1 = document.getElementById('view-all');
    var categories = document.querySelectorAll('.categories1');
    var viewAllState1 = 'hidden'; // Trạng thái ban đầu của nút "View All"

    // Ẩn các hàng sau hàng thứ 2
    for (var i = 12; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }

    // Thêm sự kiện click cho nút "View All" của categories
    viewAllBtn1.addEventListener('click', function() {
        if (viewAllState1 === 'hidden') {
            // Hiển thị tất cả các hàng
            for (var i = 2; i < categories.length; i++) {
                categories[i].style.display = 'flex'; // Sử dụng 'flex' để hiển thị
            }
            // Cập nhật trạng thái của nút "View All" và thay đổi văn bản
            viewAllState1 = 'visible';
            viewAllBtn1.textContent = 'Show Less';
        } else {
            // Ẩn các hàng sau hàng thứ 2
            for (var i = 12; i < categories.length; i++) {
                categories[i].style.display = 'none';
            }
            // Cập nhật trạng thái của nút "View All" và thay đổi văn bản
            viewAllState1 = 'hidden';
            viewAllBtn1.textContent = 'View All';
        }
    });

   
});
