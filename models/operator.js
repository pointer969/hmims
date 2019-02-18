var mongoose  = require('mongoose')
var Schema    = mongoose.Schema
var compType =['Harman','Terceiro']
var mongooseLogs = require('mongoose-activitylogs')

var OperatorSchema = new Schema({
    fullname : String, 
    department : String, 
    contract: {
        type: String,
        enum: compType
    },
    cardid : String,  
    email : String, 
    activeStatus : String
})

OperatorSchema.plugin(mongooseLogs, {
    schemaName: "operator",
    createAction: "created",
    updateAction: "updated",
    deleteAction: "deleted" 
 });


module.exports =  mongoose.model('operator', OperatorSchema)
