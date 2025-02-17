import React from 'react';
import '../App.css';
import 'font-awesome/css/font-awesome.min.css'; 

function Packages() {
  const packages = [
    { 
      id: 1, 
      speed: 'Upto 4Mbps', 
      price: 'kshs 1500/month', 
      icon: 'fa fa-signal',
      features: ['Ideal for browsing', 'Email & social media', 'Up to 3 devices'],
      image: '/pexels-pixabay-373543.jpg',
      bestValue: false
    },
    { 
      id: 2, 
      speed: 'Upto 6Mbps', 
      price: 'kshs 2000/month', 
      icon: 'fa fa-signal',
      features: ['Great for streaming', 'Online gaming', 'Up to 5 devices'],
      image: '/pexels-jimbear-3159622.jpg',
      bestValue: true
    },
    { 
      id: 3, 
      speed: 'Upto 10Mbps', 
      price: 'kshs 3000/month', 
      icon: 'fa fa-signal',
      features: ['4K streaming', 'Large households', 'Up to 10 devices'],
      image: '/pexels-pixabay-207574.jpg',
      bestValue: false
    },
    { 
      id: 4, 
      speed: 'Router', 
      price: 'kshs 2500', 
      icon: 'fa fa-router',
      features: ['High-performance', 'Dual-band WiFi', 'Easy setup'],
      image: '/pexels-scottwebb-430208.jpg',
      bestValue: false
    },
  ];

  return (
    <section id="packages" style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#003366', marginBottom: '40px' }}>Our Internet Packages</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {packages.map((packageItem) => (
            <div key={packageItem.id} style={{ 
              backgroundColor: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              border: packageItem.bestValue ? '2px solid #ff6b35' : 'none',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {packageItem.bestValue && (
                <div style={{ 
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  textAlign: 'center',
                  padding: '10px',
                  fontWeight: 'bold'
                }}>
                  Best Value!
                </div>
              )}
              <img src={packageItem.image} alt={packageItem.speed} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <i className={packageItem.icon} style={{ 
                  fontSize: '2rem',
                  color: '#003366',
                  marginBottom: '15px',
                  display: 'block'
                }} />
                <h3 style={{ color: '#003366', marginBottom: '10px' }}>{packageItem.speed}</h3>
                <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>{packageItem.price}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                  {packageItem.features.map((feature, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <i className="fa fa-check" style={{ color: '#ff6b35', marginRight: '10px' }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button style={{ 
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  width: '100%',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#e65a2e'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ff6b35'}
                >
                  <a href='https://wa.me/+254714001616' style={{ color: 'white', textDecoration: 'none' }}>
                    {packageItem.id === 4 ? 'Buy Now' : 'Get Connected'}
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
