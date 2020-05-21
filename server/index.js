const app =require('./app');
const connection=require('./database/connection')

app.set('port', process.env.PORT || 5000);
const PORT=app.get('port')
app.listen(PORT,()=>console.log(`you are listen to the port: http://localhost:${PORT}`))