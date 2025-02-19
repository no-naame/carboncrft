import { Magnetic } from './Magnetic.tsx';

export function MagneticButton() {
    const springOptions = { bounce: 0.1 };

    return (
        <Magnetic intensity={0.3} springOptions={springOptions} actionArea="self" range={150}>
            <button
                onClick={() => console.log('Button Clicked')}
                className="group relative overflow-hidden px-10 py-4 rounded-full bg-white border-2 border-blue-600 text-blue-600 font-medium text-lg tracking-wide transition-all duration-300 shadow-md"
            >
                <Magnetic intensity={0.1} springOptions={springOptions} actionArea="self" range={100}>
                    <span className="relative z-10">Begin Journey</span>
                </Magnetic>
                {/*<div className="absolute inset-0  -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />*/}
            </button>
        </Magnetic>
    );
}
