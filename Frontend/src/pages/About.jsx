import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    background: '#18181b',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    textAlign: 'center'
  };

  const socialBtnStyle = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    background: '#27272a',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  return (
    <div style={containerStyle}>
      <img
        src="/dp.jpg"
        alt="Ashutosh Singh"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '4px solid #f97316',
          marginBottom: '20px',
          boxShadow: '0 4px 20px rgba(249, 115, 22, 0.4)'
        }}
      />

      <h2
        style={{
          fontSize: '2.5rem',
          marginBottom: '10px',
          color: '#fff'
        }}
      >
        About Me
      </h2>

      <h3
        style={{
          fontSize: '1.5rem',
          color: '#f97316',
          marginBottom: '15px'
        }}
      >
        Ashutosh Singh
      </h3>

      <p
        style={{
          color: '#a1a1aa',
          fontSize: '1.2rem',
          lineHeight: '1.8',
          maxWidth: '650px',
          margin: '0 auto 30px auto'
        }}
      >
        <strong>Hello! 👋</strong> I'm <strong>Ashutosh Singh</strong>
        B.Tech Computer Science Engineering student passionate about Web
        Development, MERN Stack and Cloud Computing. My goal is to
        become a skilled Software Engineer and build scalable, real-world
        applications.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginTop: '20px'
        }}
      >
        <a
          href="https://github.com/ashutoshsinghh23"
          target="_blank"
          rel="noreferrer"
          style={socialBtnStyle}
        >
          💻 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ashutosh-singh-a789ab34a"
          target="_blank"
          rel="noreferrer"
          style={{
            ...socialBtnStyle,
            background: 'rgba(59,130,246,0.2)',
            borderColor: '#3b82f6',
            color: '#3b82f6'
          }}
        >
          💼 LinkedIn
        </a>

        <a
          href="https://www.instagram.com/ashutoshsinghh23"
          target="_blank"
          rel="noreferrer"
          style={{
            ...socialBtnStyle,
            background: 'rgba(236,72,153,0.2)',
            borderColor: '#ec4899',
            color: '#ec4899'
          }}
        >
          📸 Instagram
        </a>

        <a
          href="mailto:ashutoshsinghrajput108@gmail.com"
          style={{
            ...socialBtnStyle,
            background: 'rgba(239,68,68,0.2)',
            borderColor: '#ef4444',
            color: '#ef4444'
          }}
        >
          📧 Gmail
        </a>
      </div>
    </div>
  );
};

export default About;