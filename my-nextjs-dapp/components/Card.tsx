// components/Card.tsx
import React from 'react';
import styled from "styled-components";

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
      <div style={styles.card}>
        {/* 이미지 */}
        <img src={image} alt={title} style={styles.image} />
        {/* 제목 */}
        <h2 style={styles.title}>{title}</h2>
        {/* 설명 */}
        <p style={styles.description}>{description}</p>
        {/* 버튼 */}
        <button style={styles.button} onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: '300px',
    // border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: '#222',
    margin: '16px',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
  },
  title: {
    fontSize: '1.5rem',
    margin: '16px 0',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
    margin: '0 16px 16px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#7b44ff',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    marginBottom: '16px',
    fontSize: '16px',
    cursor: 'pointer',
  },

};

export default Card;