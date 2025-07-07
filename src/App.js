import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchData, setSearchData] = useState({
    space: '',
    location: '',
    date: ''
  });

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Validar que al menos se haya ingresado un término de búsqueda
    if (!searchData.space && !searchData.location && !searchData.date) {
      alert('Por favor, ingresa al menos un criterio de búsqueda');
      return;
    }
    
    console.log('Búsqueda:', searchData);
    
    // Crear mensaje de búsqueda más informativo
    let searchMessage = 'Búsqueda realizada:';
    if (searchData.space) searchMessage += `\n- Espacio: ${searchData.space}`;
    if (searchData.location) searchMessage += `\n- Ubicación: ${searchData.location}`;
    if (searchData.date) searchMessage += `\n- Fecha: ${searchData.date}`;
    
    alert(searchMessage);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const spaces = [
    {
      id: 1,
      name: 'Piscina Privada',
      description: 'Piscina climatizada con área de descanso para eventos y sesiones fotográficas.',
      price: '€45/hora',
      category: 'Exterior'
    },
    {
      id: 2,
      name: 'Jardín Amplio',
      description: 'Espacio verde de 200m² con zona de sombra, ideal para eventos al aire libre.',
      price: '€35/hora',
      category: 'Exterior'
    },
    {
      id: 3,
      name: 'Estudio Profesional',
      description: 'Estudio con iluminación natural y artificial, equipado para fotografía y video.',
      price: '€60/hora',
      category: 'Interior'
    },
    {
      id: 4,
      name: 'Terraza Urbana',
      description: 'Terraza de 150m² con mobiliario moderno y vistas a la ciudad.',
      price: '€50/hora',
      category: 'Exterior'
    },
    {
      id: 5,
      name: 'Sala de Reuniones',
      description: 'Sala moderna con capacidad para 20 personas, equipada con tecnología.',
      price: '€40/hora',
      category: 'Interior'
    },
    {
      id: 6,
      name: 'Cocina Profesional',
      description: 'Cocina totalmente equipada para eventos gastronómicos y grabaciones.',
      price: '€55/hora',
      category: 'Interior'
    }
  ];

  const features = [
    {
      title: 'Búsqueda Simple',
      description: 'Encuentra espacios por tipo, ubicación y fecha disponible de forma rápida y sencilla.'
    },
    {
      title: 'Reserva Directa',
      description: 'Confirmación inmediata sin intermediarios ni comisiones ocultas. Proceso 100% transparente.'
    },
    {
      title: 'Acceso Garantizado',
      description: 'Espacios verificados con acceso seguro y anfitrión disponible durante tu reserva.'
    }
  ];

  const handleSpaceClick = (space) => {
    console.log('Espacio seleccionado:', space);
    alert(`Detalles del espacio:\n\n${space.name}\n${space.description}\n\nPrecio: ${space.price}\nCategoría: ${space.category}`);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 72;
      const sectionTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <header>
        <div className="container">
          <nav>
            <div className="logo">SpaceHub</div>
            <ul className="nav-links">
              <li><a href="#espacios" onClick={(e) => handleNavClick(e, 'espacios')}>Espacios</a></li>
              <li><a href="#como-funciona" onClick={(e) => handleNavClick(e, 'como-funciona')}>Cómo funciona</a></li>
              <li><a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')}>Contacto</a></li>
            </ul>
            <div className="auth-buttons">
              <button className="btn btn-outline" onClick={() => alert('Funcionalidad de inicio de sesión')}>
                Iniciar sesión
              </button>
              <button className="btn btn-primary" onClick={() => alert('Funcionalidad de registro')}>
                Registrarse
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Reserva espacios para tus proyectos</h1>
              <p>Piscinas, jardines, estudios, terrazas y más espacios disponibles por horas</p>
              
              <form className="search-form" onSubmit={handleSearch}>
                <div className="search-group">
                  <div className="search-field">
                    <label className="search-label">Dónde</label>
                    <input 
                      type="text" 
                      name="location"
                      placeholder="Explora destinos"
                      value={searchData.location}
                      onChange={handleInputChange}
                      className="search-input"
                    />
                  </div>
                  <div className="search-field">
                    <label className="search-label">Tipo de espacio</label>
                    <input 
                      type="text" 
                      name="space"
                      placeholder="¿Qué necesitas?"
                      value={searchData.space}
                      onChange={handleInputChange}
                      className="search-input"
                    />
                  </div>
                  <div className="search-field">
                    <label className="search-label">Fecha</label>
                    <input 
                      type="date" 
                      name="date"
                      value={searchData.date}
                      onChange={handleInputChange}
                      className="search-input"
                    />
                  </div>
                  <button type="submit" className="search-btn">
                    <span>🔍</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="features" id="como-funciona">
          <div className="container">
            <h2>Cómo funciona</h2>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="spaces" id="espacios">
          <div className="container">
            <div className="section-header">
              <h2>Espacios disponibles</h2>
              <p>Espacios verificados listos para reservar</p>
            </div>
            
            <div className="spaces-grid">
              {spaces.map((space) => (
                <div 
                  key={space.id} 
                  className="space-card"
                  onClick={() => handleSpaceClick(space)}
                >
                  <div className="space-content">
                    <div className="space-header">
                      <h3>{space.name}</h3>
                      <span className="space-category">{space.category}</span>
                    </div>
                    <p className="space-description">{space.description}</p>
                    <div className="space-footer">
                      <span className="space-price">{space.price}</span>
                      <span className="space-action">Ver detalles →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container">
            <div className="cta-content">
              <h2>¿Tienes un espacio para alquilar?</h2>
              <p>Únete a SpaceHub y empieza a generar ingresos con tu propiedad</p>
              <button 
                className="btn btn-primary"
                onClick={() => alert('Funcionalidad de registro de espacios')}
              >
                Registrar espacio
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacto">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>SpaceHub</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Página: Sobre nosotros'); }}>Sobre nosotros</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Página: Términos'); }}>Términos</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Página: Privacidad'); }}>Privacidad</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Soporte</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Página: Centro de ayuda'); }}>Centro de ayuda</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Página: Contacto'); }}>Contacto</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Página: Seguridad'); }}>Seguridad</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Anfitriones</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Página: Alquila tu espacio'); }}>Alquila tu espacio</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Página: Guía para anfitriones'); }}>Guía para anfitriones</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Página: Recursos'); }}>Recursos</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 SpaceHub. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;