const Joi = require('@hapi/joi');

const registerValidation = (data) => {

    const schema = Joi.object({
        username: Joi.string()
            .min(6)
            .max(30)
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: {allow: ['com', '.net']}})
            .required(),    
        password: Joi.string()
            /*
                password must be at least 4 carhacters
                no more than 8 characters
                one uppercase letter
                one lowercase letter
                one numeric digiy
            */
            .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/)
            .required()  
    }); 
    return schema.validate(data);
}
const loginValidation = (data) => {

    const schema = Joi.object({
      email: Joi.string()
          .required(),    
      password: Joi.string()
          .required() 
    });
    return schema.validate(data);
}
    
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
