import { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSlider = () => {
  const API_URL = `${import.meta.env.VITE_BACKEND_API}/api/testimonials`;
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);
  return (
    <section id="testimonials" className="py-14 md:py-18 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-16 text-blue-900">
          What Students Say
        </h2>

        {loading && (
          <p className="text-gray-600 text-lg">Loading testimonials...</p>
        )}

        {error && (
          <p className="text-red-500 text-lg">
            Error loading testimonials: {error}
          </p>
        )}

        {/* Slider */}
        {!loading && !error && testimonials.length > 0 && (
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between min-h-[320px] mb-10">
                  {/* Quote icon */}
                  <FaQuoteLeft className="text-blue-800 text-4xl mb-4 mx-auto" />

                  {/* Message */}
                  <p className="text-gray-700 italic mb-6 text-lg">
                    "{t.message}"
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar
                        key={i}
                        className={`h-5 w-5 ${
                          i < t.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Student Info */}
                  <div className="flex flex-col items-center mt-auto">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-blue-950"
                    />
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {t.name}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* No testimonials */}
        {!loading && !error && testimonials.length === 0 && (
          <p className="text-gray-600 text-lg">No testimonials available.</p>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSlider;
