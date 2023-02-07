import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, typingSpeed = 50 ,delay }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const startTyping=() =>{
        let index = 0;
    const type = () => {
      setDisplayText(text.substring(0, index));
      index++;
      if (index <= text.length) {
        setTimeout(type, typingSpeed);
      }
      return () => clearTimeout(startTyping);
    };
    type();
    }
    
    setTimeout(startTyping ,delay)
  }, [text, typingSpeed]);

  return (
    <div>{displayText}</div>
    
  )
};

export default TypeWriter;