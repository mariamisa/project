const app =require('./app');
const connection=require('./database/connection')

const PORT=4000;

app.listen(PORT,()=>console.log(`you are listen to the port: http://localhost:${PORT}`))