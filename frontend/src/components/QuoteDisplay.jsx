import React, { useEffect, useState } from 'react';

const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
];

const QuoteDisplay = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }, []);

  return (
    <div>
      <h3>🌟 Today's Motivation</h3>
      <blockquote>{quote}</blockquote>
    </div>
  );
};

export default QuoteDisplay;
