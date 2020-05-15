const { object, string } = require('yup');

const registerValidation=(req,res,next)=>{
    const schema = object().shape({
        name:string().required().min(4),
        email: string().email().required(),
        password: string().min(8).required(),
        city:string()
    });
    schema.validate(req.body, { abortEarly: false })
        .then(() => { next() })
        .catch((err) => {
            res.status(400).json({ msg: err.errors[0] });
        });
}

const loginValidation=(req,res,next)=>{
    const schema = object().shape({
        email: string().email().required(),
        password: string().min(8).required(),
    });
    schema.validate(req.body, { abortEarly: false })
        .then(() => { next() })
        .catch((err) => {
            res.status(400).json({ msg: err.errors[0] });
        });
}

const addBlogValidation=(req,res,next)=>{
    const schema = object().shape({
        title: string().required(),
        description: string().min(8).required(),
        img:string().required(),
        author:string()
    });
    schema.validate(req.body, { abortEarly: false })
        .then(() => { next() })
        .catch((err) => {
            res.status(400).json({ msg: err.errors[0] });
        });
}

module.exports={registerValidation,loginValidation,addBlogValidation}


