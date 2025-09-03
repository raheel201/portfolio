// app/components/SpaceBackground.tsx
'use client';
import AnimatedBg from 'react-animated-bg';

const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <AnimatedBg
        colors={['#0a0a14', '#1a1a2e', '#16213e', '#0f3460']}
        duration={8000}
        className="w-full h-full"
      />
    </div>
  );
};

export default SpaceBackground;