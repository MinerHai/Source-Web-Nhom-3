const contactForm = document.getElementsByClassName('contact_alltable');
const messageAlert = document.getElementById('messageAlert');
const btn = document.querySelector('.contact_button');
btn.addEventListener('click', function() {
    
   
    const name = document.querySelector('.name_input').value;
    const email = document.querySelector('.email_input').value;
    const message = document.querySelector('.message_input').value;
    const subject = document.querySelector('.subject_input').value;

    // Kiểm tra thông tin
    if (name === '' || email === '' ||message === '' || subject === '') {
        alert('Vui lòng điền đầy đủ thông tin!') ;
        
    }
    else{
        alert('Chúng tôi đã tiếp nhận phản hồi của bạn!');
    }
    
})
   