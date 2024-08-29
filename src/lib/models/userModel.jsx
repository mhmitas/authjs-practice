import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String
        },
        role: {
            type: String,
            default: 'user'
        },
        image: {
            type: String
        },
        authProviderId: {
            type: String
        }
    },
    { timestamps: true }
)

export const User = mongoose.models?.User || mongoose.model("User", userSchema)