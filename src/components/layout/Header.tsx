import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

export function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mx-auto mt-4 sm:mt-8 px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="backdrop-blur-md bg-white/40 rounded-full px-8 sm:px-16 py-4 sm:py-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <Link to="/">
          <Logo />
        </Link>
      </motion.div>
    </div>
  );
}