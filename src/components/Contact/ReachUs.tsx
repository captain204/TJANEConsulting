"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";

// Validation Schema
const schema = yup.object({
  userFullName: yup.string().required("Full name is required"),
  userEmail: yup.string().email("Invalid email format").required("Email is required"),
  userMessage: yup.string().required("Message is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function GetIntouch() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      toast.loading("Submitting...");

      const res = await fetch("/api/send-intouch-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      toast.dismiss();

      if (!res.ok) {
        toast.error("Failed to send message");
        return;
      }

      toast.success("Message sent successfully!");
      reset();
    } catch {
      toast.dismiss();
      toast.error("Network error, please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white border border-green-200 rounded-2xl p-8 shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-green-500 mb-6 text-center">
        Get in Touch
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>

          <input
            type="text"
            {...register("userFullName")}
            placeholder="Enter your name"
            className="w-full rounded-xl border border-green-300 p-3 text-black placeholder-gray-500 focus:ring-2 focus:ring-green-400 outline-none"
          />

          {errors.userFullName && (
            <p className="text-red-500 text-sm mt-1">{errors.userFullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            type="email"
            {...register("userEmail")}
            placeholder="Enter your email"
            className="w-full rounded-xl border border-green-300 p-3 text-black placeholder-gray-500 focus:ring-2 focus:ring-green-400 outline-none"
          />

          {errors.userEmail && (
            <p className="text-red-500 text-sm mt-1">{errors.userEmail.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Message <span className="text-red-500">*</span>
          </label>

          <textarea
            rows={4}
            {...register("userMessage")}
            placeholder="How can we help you?"
            className="w-full rounded-xl border border-green-300 p-3 text-black placeholder-gray-500 focus:ring-2 focus:ring-green-400 outline-none"
          />

          {errors.userMessage && (
            <p className="text-red-500 text-sm mt-1">{errors.userMessage.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-500 cursor-pointer hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </motion.div>
  );
}
