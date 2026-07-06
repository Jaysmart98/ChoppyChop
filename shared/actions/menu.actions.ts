"use server";
import connectDB from "@/shared/database/db.connect";
import { Menu } from "@/shared/database/model/menu.model";
import { revalidatePath } from "next/cache";

export async function addMenuItem(formData: FormData) {
  await connectDB();

  const newItem = new Menu({
    food: formData.get("food"),
    category: formData.get("category"),
    price: formData.get("price"),
    img: formData.get("img"),
  });

  await newItem.save();
  revalidatePath("/Vendor/menu");
}