/**
 * This is the schema for signing  up for CIT club account
 */
/**
 * Application module dependencies
 */
const mongoose = require ( 'mongoose' );
const {isEmail} = require ( 'validator');

/**
 * Application internal module dependencies
 */
// creating schema object
const Schema = mongoose.Schema;
const SignUpSchema = new Schema ( {
    email: {
        type: String,
        required: true,
        trim: true,
        validate: [isEmail, "Invalid email address provided"],
        unique: [true, "This email address already exists"],
    },
    username: {
        type: String,
        unique: [true, "This username is already taken"],
        required: true,
        trim: true,
        min: 4,
        max: 10,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
})

/**
 * Exporting sign up schema
 */
module.exports = SignUpSchema;