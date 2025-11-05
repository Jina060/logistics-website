import React from 'react';
import profile1 from '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpg'
import profile3 from '../assets/profile3.jpg'


// --- 1. TypeScript Interface ---
interface Review {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  imageUrl: string;
}

// --- 2. Mock Data ---
const reviews: Review[] = [
  {
    id: 1,
    name: "Chinedu K.",
    title: "Self Employed",
    quote: "RapidLogix transformed the way we handle deliveries",
    rating: 5,
    imageUrl: profile1, // **IMPORTANT: UPDATE THIS PATH**
  },
  {
    id: 2,
    name: "Mrs Blessing",
    title: "Ara CEO",
    quote: "I run an e-commerce shop, and their logistics support is a lifesaver",
    rating: 5,
    imageUrl: profile2, // **IMPORTANT: UPDATE THIS PATH**
  },
  {
    id: 3,
    name: "Mr Daniel",
    title: "Lora Smith",
    quote: "Affordable, trustworthy, and efficient. They treated my Business like it was their own.",
    rating: 5,
    imageUrl: profile3, // **IMPORTANT: UPDATE THIS PATH**
  },
];


// --- 3. StarRating Component (Helper) ---
interface StarRatingProps {
  rating: 1 | 2 | 3 | 4 | 5;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  const maxRating = 5;

  // Renders the 5 star icons, coloring them based on the 'rating' prop
  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      // Using a standard SVG for the star icon
      <svg
        key={i}
        className={`w-6 h-6 ${i <= rating ? 'text-[#0099FF]' : 'text-gray-300'} fill-current`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
    );
  }

  return <div className="flex space-x-3">{stars}</div>;
};


// --- 4. ReviewCard Component (Helper) ---
const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div
      className="bg-white py-8 px-5 rounded-lg shadow-black/15 shadow-lg
                 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01] 
                 flex flex-col transform"
    >
      {/* Reviewer Info (Image, Name, Title) */}
      <div className="flex items-start space-x-6 mb-2">
        {/* Profile Picture Fix: fixed w/h, rounded-full, object-cover */}
        <div className="w-22 h-22 rounded-full overflow-hidden">
          <img
            src={review.imageUrl}
            alt={`${review.name}'s profile`}
            className="w-full h-full object-cover object-top" 
          />
        </div>
        
        {/* Name and Title */}
        <div className="flex flex-col gap-2 pt-1">
          <p className="font-bold text-gray-800 text-sm">{review.name}</p>
          <p className="text-xs text-gray-500">{review.title}</p>
          {/* Star Rating */}
      <div className="">
        <StarRating rating={review.rating} />
      </div>
        </div>
      </div>

      

      {/* Quote/Testimonial */}
      <p className="text-[#667085] text-sm leading-relaxed mt-5 mb-6">
        {review.quote}
      </p>
    </div>
  );
};


// --- 5. Main ReviewSection Component ---
const ReviewSection: React.FC = () => {
  return (
    <section className="px-16 mb-15">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <h2 className="text-3xl lg:text-4xl font-black font-[poppins] text-center text-[#0056D2] mb-14">
          What our Client says
        </h2>

        {/* Reviews Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;