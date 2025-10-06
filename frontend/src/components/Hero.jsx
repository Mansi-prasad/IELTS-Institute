import bannerImg from "../assets/bannerImg.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 pt-4 pb-8 md:py-22 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6 z-10 order-last md:order-first"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Achieve Your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
              Dream IELTS Score
            </span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl drop-shadow-md">
            Personalized training, AI-based feedback, and expert-led sessions to
            boost your reading, writing, listening, and speaking skills. - all
            in one place.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Join Now
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex-1 mt-12 md:mt-0 relative z-10 order-first md:order-last"
        >
          <img
            src={bannerImg}
            alt="IELTS Training"
            className="w-full rounded-3xl object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
