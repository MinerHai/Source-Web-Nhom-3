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
const countdownDate = new Date("May 31, 2024 15:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in the elements with id
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".big-time").innerHTML = "EXPIRED";
    }
};

// Update the countdown every 1 second
const x = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();