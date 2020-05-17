const { object, string } = require('yup');

module.exports=(req,res,next)=>{
    const schema = object().shape({
        title: string().required(),
        description: string().min(8).required(),
        img:string().reqired(),
        author:string()
    });
    schema.validate(req.body, { abortEarly: false }).then(() => {next()} )
        .catch((err) => {
            console.log(err);
            res.status(400).json({ msg: err.errors[0] });
        });
}