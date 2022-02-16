const { Schema, model } = require("mongoose");

const postSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true, 
            // Must be between 1 and 280 characters
        },
        createAt: {
            //date:
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true
        },
        reactions: {
            // Array of nested documents created with the `reactionSchema`
        }

    }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
