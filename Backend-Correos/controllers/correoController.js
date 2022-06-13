const { request, response } = require('express');
const nodeMailer = require('nodemailer');


const envioCorreo = (req=request,resp=response) =>{
    let body = req.body;


    let config = nodeMailer.createTransport({
        host:'smtp-mail.outlook.com',
        post:587,
        auth:{
            user:'eialab@outlook.com',
            pass:'Claudio12.',
        }
    });
    let contentEmail = `Hola soy ${body.nombre} \nmi teléfono es ${body.phone}\npodrias escribirme a ${body.email}\n${body.content} `;
    const opciones = {
        to:'eialab@outlook.com',
        subject: "Quiero Contratar sus Servicios", // Subject line

        email: body.email,
        text : contentEmail, //Todo lo que se mostrará como contenido del correo.
        //html: "<div><a> body.nombre </a> <a>Contáctame al body.email</a> </div>", // html body
    };

    config.sendMail(opciones,function(error,result) {

        if(error) {
            return resp.json({ok:false,msg:error});
        }else{
            
            return resp.json({
                ok:true,
                msg:result
            });
        }
        
    })
}

module.exports = {
    envioCorreo
}