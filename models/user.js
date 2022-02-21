const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        userName: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
             //Must match a valid email address (look into Mongoose's matching validation)
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
           
        },
        thoughts: [
             //Array of `_id` values referencing the `Thought` model
            {
                type: Schema.Types.ObjectId,
                ref: "thought"
            }
        ]
           
        ,
        friends: [
             //Array of `_id` values referencing the `User` model (self-reference)
            {
                type: Schema.Types.ObjectId,
                ref: "user"
            }
        ]
           
        
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)
userSchema.virtual("friendCount").get(function(){
    return this.friends.length;
})
const User = model('user', userSchema);

module.exports = User;
