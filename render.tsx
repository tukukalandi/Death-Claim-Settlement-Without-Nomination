import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.tsx';
import { slides } from './src/slides.tsx';

try {
  for (let i = 0; i < slides.length; i++) {
    const Slide = slides[i];
    renderToString(<Slide />);
  }
  console.log("RENDER ALL SLIDES SUCCESS");
} catch (e) {
  console.error("RENDER ERROR", e);
}
