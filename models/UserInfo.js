const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserInfoSchema = new Schema ({

      name:{
        type: String,
        required: true
      },
      bio: {
        type:String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
})

module.exports = mongoose.model('UserInfo', UserInfoSchema);