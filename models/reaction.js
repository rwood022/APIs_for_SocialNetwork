const { Schema, Types } = require("mongoose");


const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            date: Date,
            default: Date.now,
            get:  (time) => format(time)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
)



module.exports = reactionSchema;