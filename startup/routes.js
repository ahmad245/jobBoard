const express=require('express');
const category=require('../routes/category');
const job=require('../routes/job');
const applyJop=require('../routes/applyJop');
const user=require('../routes/user');
const error=require('../middleware/errorHandling');
const permission=require('../routes/permission');
const role=require('../routes/role');


module.exports=function(app)
{
    app.use(express.json());
    app.use('/api/job',job);
    app.use('/api/category',category);
    app.use('/api/applyJop',applyJop);
    app.use('/api/user',user);
    app.use('/api/permission',permission);
    app.use('/api/role',role);
    app.use(error);

}


