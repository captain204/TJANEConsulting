"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function addReview(formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const role = formData.get("role") as string;
        const company = formData.get("company") as string;
        const content = formData.get("content") as string;
        const rating = parseInt(formData.get("rating") as string, 10);

        if (!name || !content || isNaN(rating)) {
            return { error: "Name, content, and a valid rating are required." };
        }

        const { error } = await supabase.from("reviews").insert([
            {
                name,
                role: role || null,
                company: company || null,
                content,
                rating,
            },
        ]);

        if (error) {
            console.error("Supabase error:", error);
            return { error: error.message || "Failed to submit review." };
        }

        // Revalidate the reviews page so the new review shows up instantly
        revalidatePath("/reviews");

        return { success: true };
    } catch (err: any) {
        console.error("Server action error:", err);
        return { error: err.message || "An unexpected error occurred." };
    }
}
