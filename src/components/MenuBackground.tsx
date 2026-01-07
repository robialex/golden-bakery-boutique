import cover1 from '@/assets/menu-bg/cover-1.jpg';
import cover2 from '@/assets/menu-bg/cover-2.jpg';
import cover3 from '@/assets/menu-bg/cover-3.jpg';
import cover4 from '@/assets/menu-bg/cover-4.jpg';

export const MenuBackground = () => {
  const bgImages = [cover1, cover2, cover3, cover4];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Bakery photo layers - alternating positions */}
      {bgImages.map((src, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            // Position each image in different quadrants
            top: idx < 2 ? (idx === 0 ? '0%' : '25%') : (idx === 2 ? '50%' : '70%'),
            left: idx % 2 === 0 ? '0%' : '50%',
            width: '60%',
            height: '50%',
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(16px) grayscale(30%)',
            opacity: 0.06,
            transform: idx % 2 === 1 ? 'scaleX(-1)' : 'none',
          }}
        />
      ))}
      
      {/* Warm cream overlay for readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'rgba(245, 241, 230, 0.92)',
        }}
      />
      
      {/* Subtle warm gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(245, 241, 230, 0.98) 0%, rgba(245, 241, 230, 0.85) 50%, rgba(245, 241, 230, 0.95) 100%)',
        }}
      />
    </div>
  );
};
