function sendEmail() {
    Email.send({
    Host : "smtp.gmail.com",
    Username : "a_teampainting208@yahoo.com",
    Password : "Memeky#2",
    To : 'a_teampainting208@yahoo.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("name").value
    + "<br> Phone no.: " + document.getElementById("phone").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Message: " + document.getElementById("message").value
}).then(
message => alert("Message Sent Succesfully!")
);
  }  