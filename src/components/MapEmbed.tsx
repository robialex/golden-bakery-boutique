export const MapEmbed = () => {
  // Nicosia, Cyprus coordinates
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52448.98034990764!2d33.31972842089844!3d35.17531110000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1767ca494d55%3A0x324c3d38c2b4d636!2sNicosia%2C%20Cyprus!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s";

  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-card">
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Luxury Bakery Location in Nicosia, Cyprus"
      />
    </div>
  );
};
