const app =require('./app');
const connection=require('./database/connection')

const PORT=3000;

app.listen(PORT,()=>console.log(`you are listen to the port: http://localhost:${PORT}`))