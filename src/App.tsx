import  { useState } from 'react';
import { Step } from './types';
import { InfiniteSlider } from './components/InfiniteSlider';
import { TextEffect } from './components/TextEffect';
import {MagneticButton} from "./components/MagneticButton.tsx";
const SLIDES = [
  {
    id: 1,
    image: 'https://i.ibb.co/ccQPcCPV/Untitled-Design-1920x1280.png',
    title: 'Obsidian Black'
  },
  {
    id: 2,
    image: 'https://i.ibb.co/ccQPcCPV/Untitled-Design-1920x1280.png',
    title: 'Royal Gold'
  },
  {
    id: 3,
    image: 'https://i.ibb.co/ccQPcCPV/Untitled-Design-1920x1280.png',
    title: 'Platinum Elite'
  }
];

const Logo = () => (
  <svg width="230.75" height="30.345733984266875" viewBox="0 0 350 46.02819889271249" className="text-white">
    <defs id="SvgjsDefs1752"></defs>
    <g id="SvgjsG1753" featurekey="j5pGhi-0" transform="matrix(3.0349781442831913,0,0,3.0349781442831913,-3.1127801830816537,-13.159420554244466)" fill="currentColor">
      <path d="M11.924 10.7031 l-1.0938 0.68359 q-1.416015625 -1.89453125 -3.8671875 -1.89453125 q-1.962890625 0 -3.256835938 1.259765625 t-1.2939 3.0664 q0 1.171875 0.595703125 2.211914063 t1.6309 1.6064 t2.3242 0.56641 q2.373046875 0 3.8671875 -1.875 l1.0938 0.71289 q-0.771484375 1.15234375 -2.065429688 1.782226563 t-2.9541 0.62988 q-2.529296875 0 -4.204101563 -1.611328125 t-1.6748 -3.916 q0 -1.5625 0.7861328125 -2.895507813 t2.1484 -2.0801 t3.0615 -0.74707 q1.0546875 0 2.045898438 0.322265625 t1.6846 0.84473 t1.1719 1.333 z M19.61914375 8.203 q2.470703125 0 4.1015625 1.787109375 q1.50390625 1.630859375 1.50390625 3.876953125 q0.01953125 5.546875 0 5.634765625 l-1.4551 0 l0 -2.4316 q-1.142578125 2.12890625 -4.150390625 2.3828125 q-2.4609375 0 -4.018554688 -1.674804688 t-1.5576 -3.9111 q0 -2.2265625 1.474609375 -3.8671875 q1.630859375 -1.796875 4.1015625 -1.796875 z M19.61914375 9.551 q-1.708984375 0 -2.939453125 1.26953125 t-1.2305 3.0664 q0 1.162109375 0.6298828125 2.236328125 t2.1338 1.8164 q3.76953125 0.83984375 5.361328125 -3.427734375 q0.087890625 -1.3671875 -0.29296875 -2.6171875 q-0.2734375 -0.56640625 -0.751953125 -1.07421875 q-1.201171875 -1.26953125 -2.91015625 -1.26953125 z M27.3730875 14.541 l0 -1.2891 q0.15625 -0.966796875 0.44921875 -1.572265625 q0.68359375 -1.6796875 1.8359375 -2.4609375 t1.9141 -0.78125 q0.56640625 0 1.2109375 0.37109375 l-0.71289 1.1523 q-0.908203125 -0.33203125 -1.801757813 0.537109375 t-1.2354 1.8945 q-0.25390625 0.908203125 -0.25390625 3.408203125 l0 3.623 l-1.4063 0 l0 -4.8828 z M34.814475 17.3633 q-0.87890625 -1.46484375 -1.0546875 -2.880859375 q0 -10.16601563 0 -10.14648438 l1.3672 0 l0 5.9766 q0.869140625 -1.064453125 1.943359375 -1.586914063 t2.3535 -0.52246 q2.265625 0 3.876953125 1.650390625 t1.6113 4.0039 q0 2.314453125 -1.62109375 3.955078125 t-3.9063 1.6406 q-1.30859375 0 -2.456054688 -0.5029296875 t-2.1143 -1.5869 z M39.267575 18.1348 q1.162109375 0 2.133789063 -0.5712890625 t1.5479 -1.5869 t0.57617 -2.168 q0 -1.1328125 -0.5810546875 -2.172851563 t-1.5625 -1.6113 t-2.0947 -0.57129 q-1.1328125 0 -2.1484375 0.5712890625 t-1.5625 1.5527 t-0.54688 2.1924 q0 1.865234375 1.23046875 3.115234375 t3.0078 1.25 z M52.734378125 8.203 q2.470703125 0 4.1015625 1.787109375 q1.474609375 1.640625 1.474609375 3.876953125 t-1.5625 3.9111 t-4.0137 1.6748 q-2.4609375 0 -4.018554688 -1.674804688 t-1.5576 -3.9111 q0 -2.2265625 1.474609375 -3.8671875 q1.630859375 -1.796875 4.1015625 -1.796875 z M52.734378125 9.551 q-1.708984375 0 -2.939453125 1.26953125 t-1.2305 3.0664 q0 1.162109375 0.5615234375 2.172851563 t1.5186 1.5527 t2.0898 0.54199 q1.15234375 0 2.104492188 -0.5419921875 t1.5088 -1.5527 t0.55664 -2.1729 q0 -1.796875 -1.23046875 -3.06640625 t-2.9395 -1.2695 z M60.83980625 15.3809 l-0.019531 -1.1426 q-0.029296875 -0.83984375 0.068359375 -1.42578125 q0.21484375 -1.845703125 0.9375 -2.705078125 q0.703125 -0.751953125 1.435546875 -1.162109375 q1.2109375 -0.517578125 2.763671875 -0.48828125 q1.2109375 0 2.241210938 0.6103515625 t1.4697 1.6406 t0.43945 3.2275 l0 5.5078 l-1.3672 0 l0 -5.1074 q0 -1.85546875 -0.15625 -2.48046875 q-0.244140625 -1.064453125 -0.966796875 -1.508789063 t-2.1387 -0.44434 q-1.25 0 -2.2265625 0.72265625 t-0.9082 1.9727 q-0.185546875 0.80078125 -0.185546875 2.919921875 l0 3.9258 l-1.3867 0 l0 -4.0625 z M83.50603125 10.7031 l-1.0938 0.68359 q-1.416015625 -1.89453125 -3.8671875 -1.89453125 q-1.962890625 0 -3.256835938 1.259765625 t-1.2939 3.0664 q0 1.171875 0.595703125 2.211914063 t1.6309 1.6064 t2.3242 0.56641 q2.373046875 0 3.8671875 -1.875 l1.0938 0.71289 q-0.771484375 1.15234375 -2.065429688 1.782226563 t-2.9541 0.62988 q-2.529296875 0 -4.204101563 -1.611328125 t-1.6748 -3.916 q0 -1.5625 0.7861328125 -2.895507813 t2.1484 -2.0801 t3.0615 -0.74707 q1.0546875 0 2.045898438 0.322265625 t1.6846 0.84473 t1.1719 1.333 z M85.615275 14.541 l0 -1.2891 q0.15625 -0.966796875 0.44921875 -1.572265625 q0.68359375 -1.6796875 1.8359375 -2.4609375 t1.9141 -0.78125 q0.56640625 0 1.2109375 0.37109375 l-0.71289 1.1523 q-0.908203125 -0.33203125 -1.801757813 0.537109375 t-1.2354 1.8945 q-0.25390625 0.908203125 -0.25390625 3.408203125 l0 3.623 l-1.4063 0 l0 -4.8828 z M97.2558625 8.203 q2.470703125 0 4.1015625 1.787109375 q1.50390625 1.630859375 1.50390625 3.876953125 q0.01953125 5.546875 0 5.634765625 l-1.4551 0 l0 -2.4316 q-1.142578125 2.12890625 -4.150390625 2.3828125 q-2.4609375 0 -4.018554688 -1.674804688 t-1.5576 -3.9111 q0 -2.2265625 1.474609375 -3.8671875 q1.630859375 -1.796875 4.1015625 -1.796875 z M97.2558625 9.551 q-1.708984375 0 -2.939453125 1.26953125 t-1.2305 3.0664 q0 1.162109375 0.6298828125 2.236328125 t2.1338 1.8164 q3.76953125 0.83984375 5.361328125 -3.427734375 q0.087890625 -1.3671875 -0.29296875 -2.6171875 q-0.2734375 -0.56640625 -0.751953125 -1.07421875 q-1.201171875 -1.26953125 -2.91015625 -1.26953125 z M109.45310625 6.074 q-1.015625 -0.546875 -1.9921875 -0.087890625 q-0.87890625 0.46875 -1.1328125 2.587890625 l0 1.0742 l2.5391 0 l0 1.1816 l-2.5488 0 l0 8.6328 l-1.3867 0 l0 -11.123 q0.029296875 -1.30859375 0.537109375 -2.1484375 q0.78125 -1.62109375 2.5 -1.6796875 q0.87890625 -0.205078125 1.9140625 0.419921875 q-0.166015625 0.41015625 -0.4296875 1.142578125 z M115.91794375 17.9297 q-1.015625 0.546875 -1.9921875 0.087890625 q-1.19140625 -0.908203125 -1.1328125 -2.587890625 l0 -4.5313 l2.5391 0 l0 -1.1816 l-2.5488 0 l0 -5.1758 l-1.3867 0 l0 11.123 q-0.01953125 1.171875 0.537109375 2.1484375 q0.91796875 1.552734375 2.5 1.640625 q0.83984375 0.029296875 1.9140625 -0.380859375 q-0.166015625 -0.41015625 -0.4296875 -1.142578125 z"></path>
    </g>
  </svg>
);

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('landing');

  return (
    <div className="min-h-screen bg-[#0E0E0E] relative overflow-hidden">
      {/* Ambient background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,165,92,0.1)_0%,transparent_70%)]"></div>

      {/* Header with centered logo */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mx-8 mt-8">
        <div className="backdrop-blur-md bg-black/30 rounded-full px-12 py-4 border border-white/10">
          <Logo />
        </div>
      </div>

      {/* Main content */}
      <div className="flex border border-white/10 rounded-2xl p-12 backdrop-blur-sm bg-black/20 h-[85vh] mx-5 mt-28">
        {/* Left column - Vertical sliders */}
        <div className="w-1/2 relative flex justify-center items-center">
          <div className="flex h-[70vh] space-x-12">
            <InfiniteSlider direction="vertical" duration={30}>
              {SLIDES.map((slide) => (
                <div
                  key={slide.id}
                  className="relative aspect-[3/4] w-[300px] overflow-hidden rounded-xl"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ))}
            </InfiniteSlider>
            <InfiniteSlider direction="vertical" duration={25} reverse>
              {SLIDES.map((slide) => (
                <div
                  key={`${slide.id}-reverse`}
                  className="relative aspect-[3/4] w-[300px] overflow-hidden rounded-xl"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </div>

        {/* Right column - Content */}
        <div className="w-1/2 flex items-center justify-center p-10">
          <div className="max-w-xl ">
            <TextEffect
              as="h1"
              per="char"
              delay={0.5}
              className="font-kontora font-extralight text-7xl text-white headline-spacing mb-8"
              variants={{
                container: {
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    rotateX: 90,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    rotateX: 0,
                    y: 0,
                    transition: {
                      duration: 0.2,
                    },
                  },
                },
              }}
            >
              Luxury.
            </TextEffect>
            <TextEffect
              as="h1"
              per="char"
              delay={1}
              className="font-kontora font-extralight text-7xl text-white headline-spacing mb-8"
              preset="fade-in-blur"
            >
              Elegance.
            </TextEffect>
            <TextEffect
              per="word"
              delay={1.5}
              className="font-kontora text-xl text-white/70 mb-12 leading-relaxed"
              preset="slide"
            >
              Where ordinary cards become bespoke statements.
            </TextEffect>
            {/*<button*/}
            {/*  onClick={() => setCurrentStep('userInfo')}*/}
            {/*  className="group relative overflow-hidden px-12 py-4 bg-transparent border border-[#C6A55C] text-[#C6A55C] font-kontora tracking-wider transition-all duration-300 hover:text-black w-full"*/}
            {/*>*/}
            {/*  <span className="relative z-10">Begin Journey</span>*/}
            {/*  <div className="absolute inset-0 gold-gradient -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />*/}
            {/*</button>*/}
            <MagneticButton/>

            {/* Step indicator */}
            <TextEffect
              per="char"
              delay={2}
              className="mt-8 font-kontora text-white/30 text-sm tracking-wider text-center"
              preset="blur"
            >
              Step 1 of 4
            </TextEffect>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;