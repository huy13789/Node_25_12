// Department schema
const Department = mongoose.model('Department', departmentSchema);
const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true }
});