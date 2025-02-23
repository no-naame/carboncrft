import { motion } from 'framer-motion';
import { TextEffect } from '../components/ui/TextEffect';
import { MagneticButton } from "../components/ui/MagneticButton";
import { Header } from '../components/layout/Header';

export function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden">
      {/* Ambient background effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,165,92,0.05)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(198,165,92,0.02)_0%,transparent_73%)]"></div>
      </div>

      <Header />

      {/* Main content */}
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto mt-32 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border border-gray-200/50 rounded-[2rem] p-12 lg:p-20 backdrop-blur-sm bg-white/40 shadow-xl relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,rgba(198,165,92,0.03)_0%,transparent_70%)]"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,rgba(198,165,92,0.03)_0%,transparent_70%)]"></div>
            
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="text-center space-y-8">
                <TextEffect
                  as="h1"
                  per="char"
                  delay={0.5}
                  className="font-kontora font-extralight text-5xl sm:text-7xl md:text-8xl xl:text-9xl text-[#333333] tracking-tight mb-4"
                  variants={{
                    container: {
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 },
                      },
                    },
                    item: {
                      hidden: { opacity: 0, rotateX: 90, y: 10 },
                      visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.2 } },
                    },
                  }}
                >
                  Luxurious
                </TextEffect>
                
                <TextEffect
                  as="h1"
                  per="char"
                  delay={1}
                  className="font-kontora font-extralight text-5xl sm:text-7xl md:text-8xl xl:text-9xl text-[#333333] tracking-tight mb-8"
                  preset="fade-in-blur"
                >
                  Met-Cards
                </TextEffect>

                <TextEffect
                  per="word"
                  delay={1.5}
                  className="font-kontora text-xl sm:text-2xl text-[#333333]/70 leading-relaxed max-w-2xl mx-auto mb-16"
                  preset="slide"
                >
                  Crafted from premium metals, designed just for you.
                </TextEffect>

                <div className="pt-8">
                  <MagneticButton href="/products">
                    Get Started
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}