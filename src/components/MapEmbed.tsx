export const MapEmbed = () => {
  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-card border border-primary/30">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.7850411694476!2d33.36427842922735!3d35.16404239999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1746f17d0bf9%3A0x373b858d942767f6!2sIngrid%20Bakes!5e0!3m2!1sen!2s!4v1737234567890!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ingrid Bakes Location - 97 Nikou Pattichi, Strovolos, Nicosia"
      />
    </div>
  );
};
