import React, { useState } from 'react';
import './MainInfo.css';

// Placeholder para iconos SVG que podríamos usar
const DoorIcon = () => <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.75 2.25a.75.75 0 00-1.5 0v.316A4.483 4.483 0 008.25 4.5H7.5a.75.75 0 000 1.5h.75a4.483 4.483 0 003 1.934V10.5h-1.5a.75.75 0 000 1.5h1.5v4.684a4.483 4.483 0 00-3-1.934H7.5a.75.75 0 000 1.5h.75a4.483 4.483 0 003.002 1.934v.316a.75.75 0 001.5 0v-.316a4.483 4.483 0 003-1.934h.75a.75.75 0 000-1.5h-.75a4.483 4.483 0 00-3-1.934V12h1.5a.75.75 0 000-1.5h-1.5V7.934A4.483 4.483 0 0015.75 6H16.5a.75.75 0 000-1.5h-.75a4.483 4.483 0 00-3.002-1.934V2.25zM14.25 15.184V12h-4.5v3.184a2.983 2.983 0 014.5 0zm0-4.684V7.934a2.983 2.983 0 01-4.5 0V10.5h4.5zM9.75 6A2.983 2.983 0 0112 4.066A2.983 2.983 0 0114.25 6H9.75zM12 19.934A2.983 2.983 0 019.75 18h4.5a2.983 2.983 0 01-2.25 1.934z"></path></svg>;
const SuperhostIcon = () => <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor"><path d="M16 .798l2.865 5.804 6.404.93L20.734 12l1.09 6.377L16 15.31l-5.823 3.065L11.266 12l-4.536-4.468 6.403-.93L16 .798zM23.66 20.433c.461 0 .837.375.837.837v6.699c0 .46-.376.836-.837.836H8.34c-.46 0-.836-.375-.836-.836v-6.699c0-.461.375-.837.836-.837h15.32z"></path></svg>;

const MainInfo = ({ host, type, guests, bedrooms, beds, baths, description, amenities, hostAvatar }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const defaultAmenities = [
    { name: 'Wi-Fi', icon: '📶' }, { name: 'Cocina', icon: '🍳' },
    { name: 'Aire acondicionado', icon: '❄️' }, { name: 'TV', icon: '📺' },
  ];
  const displayAmenities = amenities && amenities.length > 0 ? amenities.slice(0, 6) : defaultAmenities.slice(0, 6); // Mostrar solo las primeras 6-10
  const totalAmenities = amenities?.length || defaultAmenities.length;

  const hostName = host?.name || 'Anfitrión';
  const hostImg = hostAvatar || `https://via.placeholder.com/56/333333/FFFFFF/?text=${hostName.charAt(0)}`;

  // Simulación de información destacada
  const highlights = [
    { icon: <DoorIcon />, title: 'Llegada autónoma', text: 'Accede al alojamiento directamente mediante la cerradura con teclado.' },
    { icon: <SuperhostIcon />, title: `${hostName} es Superhost`, text: 'Los Superhosts son anfitriones con experiencia y valoraciones excelentes.' },
  ];

  return (
    <div className="main-info-section">
      <div className="host-intro">
        <div className="title-specs">
          <h2>{type || 'Alojamiento entero'} · Anfitrión: {hostName}</h2>
          <div className="specs">
            <span>{guests || 0} huéspedes</span>
            <span>{bedrooms || 0} dormitorio(s)</span>
            <span>{beds || 0} cama(s)</span>
            <span>{baths || 0} baño(s)</span>
          </div>
        </div>
        <img src={hostImg} alt={hostName} className="host-avatar" />
      </div>

      <div className="info-highlight-section">
        {highlights.map(item => (
          <div key={item.title} className="info-highlight-item">
            <span className="info-highlight-icon">{item.icon}</span>
            <div className="info-highlight-text">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="description-section">
        <p>
          {showFullDescription || !description || description.length < 250
            ? description || 'Descripción no disponible.'
            : `${description.substring(0, 250)}...`}
        </p>
        {description && description.length > 250 && (
          <button onClick={() => setShowFullDescription(!showFullDescription)} className="show-more-btn">
            {showFullDescription ? 'Mostrar menos' : 'Mostrar más'}
          </button>
        )}
      </div>

      {displayAmenities.length > 0 && (
        <div className="amenities-section">
          <h3>Lo que este lugar ofrece</h3>
          <ul className="amenities-list">
            {displayAmenities.map(amenity => (
              <li key={amenity.name} className="amenity-item">
                <span className="amenity-icon">{amenity.icon}</span>
                {amenity.name}
              </li>
            ))}
          </ul>
          {totalAmenities > displayAmenities.length && (
            <button className="show-all-amenities-btn">
              Mostrar los {totalAmenities} servicios
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MainInfo;
