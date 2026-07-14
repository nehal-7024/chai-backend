import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";  //pagination is used for comments, as there can be a lot of comments on a video, and we don't want to load all of them at once

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video"
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

commentSchema.plugin(mongooseAggregatePaginate)

export const Comment = mongoose.model("Comment", commentSchema)