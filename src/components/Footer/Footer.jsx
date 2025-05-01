import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#102a43',
      padding: '1rem',
      marginTop: '1rem',
      textAlign: 'center',
      borderTop: '1px solid #284b70',
      color: '#e9f1fa',
      fontSize: '0.9rem'
    }}>
      <p style={{ margin: '0.5rem 0' }}>
        © 2025{' '}
        <a 
          href="https://linkedin.com/in/tamminaina-manikiran-85b03726a/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#66abe3', textDecoration: 'none' }}
        >
          Manikiran
        </a>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
