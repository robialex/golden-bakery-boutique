import cover1 from '@/assets/menu-bg/cover-1.jpg';
import cover2 from '@/assets/menu-bg/cover-2.jpg';
import cover3 from '@/assets/menu-bg/cover-3.jpg';
import cover4 from '@/assets/menu-bg/cover-4.jpg';

export const MenuBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Base cream color */}
      <div className="absolute inset-0 bg-[#F5F1E6]" />
      
      {/* Photo 1 - Top left quadrant */}
      <div
        className="absolute top-0 left-0 w-[55%] h-[45%]"
        style={{
          backgroundImage: `url(${cover1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(14px) grayscale(20%)',
          opacity: 0.12,
        }}
      />
      
      {/* Photo 2 - Top right quadrant */}
      <div
        className="absolute top-[5%] right-0 w-[50%] h-[40%]"
        style={{
          backgroundImage: `url(${cover2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(16px) grayscale(15%)',
          opacity: 0.1,
        }}
      />
      
      {/* Photo 3 - Bottom left quadrant */}
      <div
        className="absolute top-[45%] left-0 w-[55%] h-[50%]"
        style={{
          backgroundImage: `url(${cover3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(18px) grayscale(25%)',
          opacity: 0.1,
        }}
      />
      
      {/* Photo 4 - Bottom right quadrant */}
      <div
        className="absolute top-[50%] right-0 w-[50%] h-[50%]"
        style={{
          backgroundImage: `url(${cover4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(14px) grayscale(20%)',
          opacity: 0.11,
        }}
      />
      
      {/* Warm cream overlay for readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'rgba(245, 241, 230, 0.75)',
        }}
      />
    </div>
  );
};
