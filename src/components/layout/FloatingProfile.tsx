import { motion } from "framer-motion";
import { dipanPhoto } from "../../assets";

const FloatingProfile = () => {
  return (
    <motion.div
      className="fixed top-20 right-4 sm:right-8 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.8 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <div className="relative">
        {/* rotating gradient ring */}
        <motion.div
          className="absolute -inset-1 rounded-full opacity-70 blur-sm"
          style={{
            background: "conic-gradient(from 0deg, #915eff, #00cea8, #915eff)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <img
          src={dipanPhoto}
          alt="Dipan Majumdar"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary"
        />
      </div>
    </motion.div>
  );
};

export default FloatingProfile;
