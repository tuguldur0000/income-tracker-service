const mongoose = require('mongoose')

const connectDatabase= async ()=>{
    res = await mongoose.connect ('mongodb+srv://tuguldur:tergel050716@atlascluster.kpdswks.mongodb.net/')

    if(res)console.log('db connected')
}

module.exports= connectDatabase