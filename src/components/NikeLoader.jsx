import React from 'react';

const usePercentage = (duration = 2000) => {
  const [percentage, setPercentage] = React.useState(0);

  React.useEffect(() => {
    const intervalDelay = duration / 100;
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, intervalDelay);

    return () => clearInterval(interval);
  }, [duration]);

  return percentage;
};

const NikeLoader = () => {
  const percentage = usePercentage(2000);

  return (
    <div className="flex h-screen w-full select-none flex-col items-center justify-center bg-black font-extrabold">
      <h1 className="relative Nike text-[14.5rem] lg:text-[22rem] uppercase leading-none tracking-tight text-white/20">
        <span
          className="absolute bottom-0 left-0 block w-full overflow-hidden text-white"
          style={{ clipPath: `inset(${100 - percentage}% 0 0 0)` }}
        >
          NIKE
        </span>
        NIKE
      </h1>
      <span className="mt-4 text-[clamp(1.5rem,4vw,2rem)] text-white/80">
        {percentage}%
      </span>
    </div>
  );
};

export default NikeLoader;

