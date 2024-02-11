import mongoose, { Schema } from 'mongoose';

//? Primer esquema
const userSchema = new Schema({
  userId: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  street: { type: String, required: true },
  number: { type: Number, required: false },
  url_photo: { type: String, required: false },
  location: { type: String, required: false }
}, { timestamps: true });

//? Modelo basado en el primer esquema
export default mongoose.model('Usuario', userSchema);






