const { object, string } = require('yup');

const validationBlog=(req,res,next)=>{
    console.log(req.body);
    const schema = object().shape({
        title: string().required(),
        img:string().reqired(),
        description: string().min(8).required(),
    });
    schema.validate(req.body, { abortEarly: false })
        .then(() =>  next())
        .catch((err) => {
            res.status(400).json({ msg: err.errors[0] });
        });
}

module.exports=validationBlog