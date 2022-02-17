const schemaReaction = require("./reaction");
const { Schema, model } = require("mongoose");


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true, 
            minlength: 1,
            maxlength: 280,
            // Must be between 1 and 280 characters
        },
        createAt: {
            type: Date,
            default: Date.now,
            get:  (time) => format(time)
                
            
            //date:
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true
        },
        reactions: [
            schemaReaction,
        ]
            
            // Array of nested documents created with the `reactionSchema`

    },
    {
        toJSON:{
            virtuals: true,
        }
    }

)
thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
