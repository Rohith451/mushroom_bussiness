import mongoose from 'mongoose'; 

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        trim: true
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
        trim: true
    }
}, {
    timestamps: true 
});

// 2. Change CommonJS 'module.exports' to ESM 'export default'
const Contact = mongoose.model('Contact', ContactSchema);
export default Contact;