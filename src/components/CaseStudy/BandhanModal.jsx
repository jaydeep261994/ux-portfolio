import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const BANDHAN_PASSWORD = import.meta.env.VITE_BANDHAN_PASSWORD;

export default function BandhanModal({ project, isOpen, onClose }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === BANDHAN_PASSWORD) {
      onClose();
      navigate(project.link);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-[1100px] bg-[#181818] mx-4 mb-4 overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-[14px] text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>

            {/* Cover image with logo */}
            <div className="relative w-full aspect-[867/273] overflow-hidden">
              <img
                src={project.coverImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(0,0,0,0.31) 0%, rgba(0,0,0,0.31) 100%), linear-gradient(90deg, rgba(19,92,153,0.71) 0%, rgba(19,92,153,0.71) 100%)",
                }}
              />
              {project.logo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className={`${project.logoClass || "max-w-[200px] max-h-[80px]"} object-contain drop-shadow-lg`}
                  />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="px-8 py-6 flex flex-col gap-3">
              <p className="text-[10px] text-[#777] tracking-wide uppercase">
                {project.subtitle}
              </p>
              <p className="text-[16px] text-white">{project.title}</p>
              <p className="text-[14px] text-[#5b5b5b] leading-[20px] max-w-[700px]">
                {project.description}
              </p>

              {/* Password input */}
              <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    placeholder="TYPE PASSWORD HERE"
                    className={`w-full bg-transparent text-[14px] text-[#5b5b5b] tracking-wide pb-2 border-b outline-none transition-colors ${
                      error
                        ? "border-red-500"
                        : "border-[#5b5b5b] focus:border-white"
                    }`}
                    autoFocus
                  />
                  {error && (
                    <p className="absolute top-full mt-1 text-[10px] text-red-500">
                      Incorrect password
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="shrink-0 w-5 h-5 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
