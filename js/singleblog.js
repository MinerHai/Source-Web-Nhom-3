document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const saveInfo = document.getElementById('saveInfo').checked;

    // You can now handle the form submission
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Save Info:', saveInfo);

    // Display a simple alert for demonstration purposes
    alert('Comment submitted successfully!');
    
    // Clear the form after submission
    document.getElementById('commentForm').reset();
});