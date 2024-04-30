const Map = () => {
  return (
    <div className="h-[300px] lg:h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.042829070445!2d18.143921977107937!3d53.91321483215776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470262bdec8a25f3%3A0xadbf1e52c558231!2sBartel%20Wielki%2023%2C%2083-260%20Bartel%20Wielki!5e0!3m2!1spl!2spl!4v1712605884821!5m2!1spl!2spl"
        width="100%"
        height="100%"
        title="Mapa google z adresem siedziby Trehaus"
        className="border-none"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;
