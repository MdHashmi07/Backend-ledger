const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new  mongoose.Schema({
    email: {
        type:String,
        required:[true, "Email address is required for creating a user"],
        trim:true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
        unique:[true, "Email already exists."]
    }, 
    name: {
        type:String,
        trim:true,
        required:[true, "Name is required for creating an account."],
        minlength:6,
        maxlength:20
    }, 
    password: {
        type:String,
        required:[true, "Password is required for creating an account"],
        minlength:[6, "Password should contain more than 6 characters"],
        select:false
    }

},{
    timestamps:true
});

userSchema.pre("save", async function() {
    if(!this.isModified("password")){
        return 
    }

    const hashPswd = await bcrypt.hash(this.password, 10);
    this.password = hashPswd;

    return
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password); 
}

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;