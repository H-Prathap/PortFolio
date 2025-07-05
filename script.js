function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        user_phone: document.querySelector('input[name="user_phone"]').value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_3vz7q7t", "template_7qpeewn", parms).then(alert("sent successfully!"))
}