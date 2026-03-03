"use client";

import HeroSection from "@/components/PagesHero";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface Review {
    id: string;
    name: string;
    role: string | null;
    company: string | null;
    content: string;
    rating: number;
    created_at: string;
}

export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const { data, error } = await supabase
                    .from("reviews")
                    .select("*")
                    .order("created_at", { ascending: false });

                if (error) {
                    console.error("Error fetching reviews:", error);
                } else {
                    setReviews(data || []);
                }
            } catch (err) {
                console.error("Unexpected error:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, []);

    return (
        <>
            <HeroSection
                breadcrumb="Client Success Stories"
                title="What Our Partners Say"
                subtitle="Hear directly from healthcare professionals who trust TJane Healthcare to elevate their business operations and compliance."
                backgroundImage="/management-bg.jpg"
            />

            <section className="relative bg-gradient-to-b from-green-50 to-white py-24 px-6 md:px-16 overflow-hidden">
                {/* Decorative Background Element */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
                    <div className="absolute top-40 -left-40 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Header Action Area */}
                    <div className="flex justify-end mb-8">
                        <Link
                            href="/reviews/new"
                            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 hover:shadow-green-500/30 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <FaStar className="text-yellow-300" />
                            Write a Review
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                        </div>
                    ) : reviews.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                            <p className="text-xl text-gray-500">No reviews found yet.</p>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative group"
                                >
                                    {/* Quote Icon watermark */}
                                    <div className="absolute top-6 right-8 text-8xl text-green-50 opacity-50 group-hover:text-green-100 transition-colors pointer-events-none font-serif leading-none">
                                        "
                                    </div>

                                    <div className="relative z-10 flex-grow">
                                        {/* Stars */}
                                        <div className="flex text-yellow-400 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar
                                                    key={i}
                                                    className={i < review.rating ? "text-yellow-400" : "text-gray-200"}
                                                    size={20}
                                                />
                                            ))}
                                        </div>

                                        <p className="text-gray-700 leading-relaxed font-medium text-lg mb-8 italic">
                                            "{review.content}"
                                        </p>
                                    </div>

                                    <div className="relative z-10 pt-6 border-t border-gray-100 mt-auto">
                                        <h4 className="font-bold text-xl text-gray-900 mb-1">
                                            {review.name}
                                        </h4>
                                        {(review.role || review.company) && (
                                            <p className="text-green-700 text-sm font-medium">
                                                {review.role} {review.role && review.company && "—"}{" "}
                                                {review.company}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Footer tagline */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-24 text-center"
                    >
                        <div className="inline-block bg-white px-8 py-4 rounded-full shadow-md border border-gray-50">
                            <h3 className="text-lg text-gray-600 font-medium">
                                Empowering Healthcare. <span className="text-green-600 font-bold">Enhancing Lives.</span>
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
