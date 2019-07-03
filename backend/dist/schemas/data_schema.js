import { Schema, model } from "mongoose";
export const DataSchema = new Schema({
    id: Number,
    message: String
}, { timestamps: true });
export const DataItem = model("Data", DataSchema);
//module.exports = mongoose.model("Data", DataSchema);
//# sourceMappingURL=data_schema.js.map