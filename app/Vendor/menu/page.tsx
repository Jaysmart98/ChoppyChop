"use client";
import React, { useState } from "react";
import { Upload, Plus, Trash2, Tag, DollarSign, Edit3 } from "lucide-react";
import { addMenuItem } from "@/shared/actions/menu.actions"; // Ensure this path is correct

export default function MenuPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Updated to use Server Action
  async function actionHandler(formData: FormData) {
    // Append the image string to the form data
    if (imagePreview) {
      formData.append("img", imagePreview);
    }
    
    // Call the server action
    await addMenuItem(formData);
    
    // Reset form after submission
    alert("Menu item added successfully!");
    setImagePreview(null);
    // Note: In a real app, you'd want to refresh the UI list here
  }

  return (
    <div className="p-8 max-w-5xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Menu Management</h1>

      {/* Redesigned Form calling the Server Action */}
      <form action={actionHandler} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="flex flex-col gap-3">
            <label className="text-sm font-bold text-slate-900">Food Image</label>
            <label className="border-2 border-dashed border-slate-300 rounded-2xl h-48 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-600 transition-colors bg-slate-50">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="h-full w-full object-cover rounded-2xl" />
              ) : (
                <div className="text-center p-4 text-slate-600">
                  <Upload className="mx-auto mb-2" />
                  <p className="text-xs font-bold uppercase tracking-wider">Upload Photo</p>
                </div>
              )}
              <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            </label>
          </div>

          <div className="flex flex-col gap-4">
            <div className="relative">
              <Edit3 className="absolute left-4 top-4 text-slate-400" size={18} />
              <input 
                name="name" 
                placeholder="Item Name (e.g. Jollof Rice)" 
                className="w-full pl-12 p-4 bg-white rounded-xl border border-slate-300 text-slate-900 focus:border-indigo-600 outline-none transition-all" 
                required 
              />
            </div>
            
            <select name="category" className="w-full p-4 bg-white rounded-xl border border-slate-300 text-slate-900 focus:border-indigo-600 outline-none">
              <option value="Food">Food</option>
              <option value="Drinks">Drinks</option>
              <option value="Proteins">Proteins</option>
            </select>

            <div className="relative">
              <DollarSign className="absolute left-4 top-4 text-slate-400" size={18} />
              <input 
                name="price" 
                type="number" 
                placeholder="Price (₦)" 
                className="w-full pl-12 p-4 bg-white rounded-xl border border-slate-300 text-slate-900 focus:border-indigo-600 outline-none transition-all" 
                required 
              />
            </div>

            <button type="submit" className="bg-slate-900 text-white font-bold p-4 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
              <Plus size={20} /> Add to Menu
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}