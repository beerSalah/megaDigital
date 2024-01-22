(function () {
  emailjs.init("kON-zUI8BC0WYbVx0");
})();

const temp_id = 'template_i4g3486'
const service_id = 'service_77xw96e'

const formSubmit = document.getElementById('sendemail');

formSubmit.addEventListener('submit', (event) => {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;
  sendemail(name, email, phone, message)
  event.target.innerHTML = "<h2> Thank you for send Email :)</h2>"
})

function sendemail(name, email, phone, message) {
  console.log(`Send email to ${name} , ${email} phone : ${phone} /n ${message}`);
  emailjs.send(service_id, temp_id, {
    name, email, phone, message
  }).then((res) => {
  }).catch(err => {
    console.log(err);
  })
}