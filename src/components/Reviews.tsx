import React from "react";

type Review = {
  name: string;
  role: string;
  avatar?: string;
  rating?: number;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Chinedu K.",
    role: "Self Employed",
    avatar: "../assets/profile1.jpg",
    rating: 5,
    text: "RapidLogix transformed the way we handle deliveries",
  },
  {
    name: "Mrs Blessing",
    role: "Ara CEO",
    avatar: "../assets/profile2.jpg",
    rating: 5,
    text: "I run an e-commerce shop, and their logistics support is a lifesaver",
  },
  {
    name: "Mr Daniel",
    role: "Lora Smith",
    avatar: "../assets/profile3.jpg",
    rating: 5,
    text: "Affordable, trustworthy, and efficient. They treated my business like it was their own.",
  },
];

const ReviewCard: React.FC<{ r: Review }> = ({ r }) => {
  return (
    <div className="bg-white shadow-md p-8">
      <div className="flex items-center gap-6 mb-4">
        <img
          src={r.avatar}
          alt={r.name}
          className="w-26 h-26 rounded-full object-contain"
        />
        <div>
          <div className="font-semibold text-lg">{r.name}</div>
          <div className="text-sm text-[#7A7D80]">{r.role}</div>
        </div>
        {/* stars */}
        <div className="ml-auto flex items-center gap-1">
          {Array.from({ length: r.rating || 5 }).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-[#0070E0] fill-current" viewBox="0 0 20 20">
              <path d="M10 1.5l2.6 5.27 5.8.84-4.2 4.09.99 5.78L10 15.9l-5.19 2.58.99-5.78L1.6 7.61l5.8-.84L10 1.5z" />
            </svg>
          ))}
        </div>
      </div>

      <p className="text-[#6F7376]">{r.text}</p>
    </div>
  );
};

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[#0056D2]">What our Client says</h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {reviews.map((r, i) => (
          <ReviewCard r={r} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
