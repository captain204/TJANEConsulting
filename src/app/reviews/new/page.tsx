"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/PagesHero";
import { toast } from "sonner";
import { addReview } from "@/app/actions/addReview";

type ReviewFormData = {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
};

export default function NewReviewPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<ReviewFormData>({
        defaultValues: {
            rating: 5,
        },
    });

    const rating = watch("rating");

    const onSubmit = async (data: ReviewFormData) => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("role", data.role || "");
            formData.append("company", data.company || "");
            formData.append("content", data.content);
            formData.append("rating", data.rating.toString());

            const result = await addReview(formData);

            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success("Thank you! Your review has been submitted successfully.");
                router.push("/reviews");
            }
        } catch (error) {
            console.error(error);
            toast.error("An unexpected error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <HeroSection
                breadcrumb="Leave a Review"
                title="Share Your Experience"
                subtitle="Your feedback helps us continue to provide world-class healthcare consulting services."
                backgroundImage="/management-bg.jpg"
            />

            <section className="bg-gradient-to-b from-green-50 to-white py-20 px-6 min-h-screen relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                    <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto relative z-10 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Write a Review
                        </h2>
                        <p className="text-gray-600">
                            We value your partnership. Please let us know how we did!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Rating Selector */}
                        <div className="flex flex-col items-center mb-8">
                            <label className="text-sm font-semibold text-gray-700 mb-3">
                                Your Rating
                            </label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        onClick={() => setValue("rating", star)}
                                        className="focus:outline-none transition-transform hover:scale-110"
                                    >
                                        <FaStar
                                            size={36}
                                            className={`${star <= rating ? "text-yellow-400" : "text-gray-200"
                                                } transition-colors`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                    placeholder="e.g. Dr. Sarah Johnson"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Role */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Job Role / Title <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("role")}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                    placeholder="e.g. Medical Director"
                                />
                            </div>

                            {/* Company */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Organization / Hospital <span className="text-gray-400 font-normal">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("company")}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder-gray-400"
                                    placeholder="e.g. Sunrise Family Hospital"
                                />
                            </div>

                            {/* Review Content */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Review <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    {...register("content", {
                                        required: "Please write a review",
                                        minLength: {
                                            value: 10,
                                            message: "Review must be at least 10 characters",
                                        },
                                    })}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all placeholder-gray-400 resize-none"
                                    placeholder="Tell us about your experience partnering with TJane Healthcare..."
                                ></textarea>
                                {errors.content && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.content.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-300 ${isSubmitting
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-green-600 hover:bg-green-700 hover:shadow-green-500/30 hover:-translate-y-1"
                                    }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Submitting...
                                    </div>
                                ) : (
                                    "Submit Review"
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </section>
        </>
    );
}
