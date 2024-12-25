import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: {
        updatedAt: "updated_At",
        createdAt: "created_At"
    }
}
)

const UserModel = mongoose.model("users", UserSchema)

export default UserModel;