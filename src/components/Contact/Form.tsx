"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";

// Validation schema
const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits"),
  specialty: yup.string().required("Specialty is required"),
  requestType: yup.string().required("Request type is required"),
  message: yup.string().required("Message is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = async (data: FormData) => {
    try {
      toast.loading("Submitting...");

      const res = await fetch("/api/send-contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      toast.dismiss();

      if (!res.ok) {
        toast.error(result.message || "Something went wrong");
        return;
      }

      toast.success("Your message has been sent successfully!");
      reset();
    } catch (error) {
      toast.dismiss();
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="max-w-3xl mx-auto -mt-10 relative z-10 bg-white rounded-xl shadow-lg p-6 md:p-10"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              {...register("firstName")}
              className="w-full border text-black border-gray-300 rounded-lg px-3 py-3 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              {...register("lastName")}
              className="w-full border text-black border-gray-300 rounded-lg px-3 py-3 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            {...register("email")}
            className="w-full border text-black border-gray-300 rounded-lg px-3 py-3 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="Enter phone number"
            {...register("phone")}
            className="w-full border text-black border-gray-300 rounded-lg px-3 py-3 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Specialty */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Specialty <span className="text-red-500">*</span>
          </label>

          <select
            {...register("specialty")}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select specialty</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Radiology">Radiology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Dermatology">Dermatology</option>
          </select>

          {errors.specialty && (
            <p className="text-red-500 text-sm mt-1">
              {errors.specialty.message}
            </p>
          )}
        </div>

        {/* Request Type */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Type of Request <span className="text-red-500">*</span>
          </label>

          <select
            {...register("requestType")}
            className="w-full border border-gray-300 rounded-lg px-3 py-3 mt-1 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select request type</option>
            <option value="Free Evaluation">Free Evaluation</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
          </select>

          {errors.requestType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.requestType.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>

          <textarea
            rows={6}
            placeholder="Write your message here..."
            {...register("message")}
            className="w-full border text-black border-gray-300 rounded-lg px-3 py-3 mt-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-green-600 cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-transform transform hover:scale-105 disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
    </motion.div>
  );
}
