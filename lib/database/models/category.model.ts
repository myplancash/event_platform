import {Document, Schema, models, model } from 'mongoose'

//we can use across our app to know exactly which properties our model has
export interface ICategory extends Document {
  _id: string; 
  name: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true},
})

const Category = models.Category || model('Category', CategorySchema);
export default Category;
