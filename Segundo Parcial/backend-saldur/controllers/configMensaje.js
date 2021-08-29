const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'proyectodawn@gmail.com', // Cambialo por tu email
            pass: 'proyecto2021' // Cambialo por tu password
        }

    });




    const mailOptions = {
        from: `”${formulario.nombre} 👻” <${formulario.email}>`,
        to: 'ronnyand1501@gmail.com', // Cambia esta parte por el destinatario correo!!!
        subject: 'Formulario',
        html: `
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>E-mail:</strong> ${formulario.email} <br/>
    <strong>E-mail:</strong> ${formulario.fecha} <br/>
    <strong>Ciudad:</strong> ${formulario.lugar} <br/>
    <strong>Telefono:</strong> ${formulario.telefono} <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje}
    `
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });









}