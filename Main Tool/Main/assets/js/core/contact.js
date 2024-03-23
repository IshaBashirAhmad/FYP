function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mehakayaz8888@gmail.com",
    Password : "32B904BE44E17FF447D59A5EE22BF9852C29",
    To : 'teamtrackerr@gmail.com',
    From :  "mehakayaz8888@gmail.com",

    Subject : "CONTACT ENQUIRY FORM",
    Body : "Name:" +document.getElementById("username").value
    + "<br> Email:"+ document.getElementById("email").value
    + "<br> Message:"+ document.getElementById("message").value
}).then(
  message => alert("Sent Successfully")
);
  }