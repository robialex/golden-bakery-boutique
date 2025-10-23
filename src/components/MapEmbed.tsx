export const MapEmbed = () => {
  return (
    <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-card border-2 border-primary/20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1003.3581239615066!2d33.3646088!3d35.1638471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1746f17d0bf9%3A0x373b858d942767f6!2sIngrid%20Bakes!5e1!3m2!1sen!2s!4v1761236475693!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ingrid Bakes Location in Cyprus"
      />
    </div>
  );
};
