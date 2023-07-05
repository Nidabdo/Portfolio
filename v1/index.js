// function sendMail(){
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value
//     };
    
//     const serviceID = "service_mfsg0sa";
//     const tempalteID = "template_idssx5n";

//     emailjs.send(serviceID,tempalteID,params)
//     .then((res) =>{
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("Votre message à été envoyer");
//     })
//     .catch((err) => console.log(err));
// }

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_mfsg0sa', 'template_o3863mi', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}
