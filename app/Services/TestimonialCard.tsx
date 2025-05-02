import Image from "next/image";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string; // path to image
  rating?: number; // 0–5 stars
}

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-80 md:w-96 bg-white rounded-2xl p-6 shadow-lg mx-4">
      {/* quote icon */}
      <div className="text-4xl text-gray-200 mb-4">“</div>

      {/* quote text */}
      <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.quote}</p>

      {/* stars */}
      {testimonial.rating != null && (
        <div className="flex space-x-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`h-5 w-5 ${testimonial.rating !== undefined && i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.374 2.455a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.374-2.455a1 1 0 00-1.176 0l-3.374 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.06 9.384c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.957z"/>
            </svg>
          ))}
        </div>
      )}

      {/* author info */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image src={testimonial.avatar} alt={testimonial.author} width={48} height={48} />
        </div>
        <div>
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}