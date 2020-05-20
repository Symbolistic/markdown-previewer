import React from 'react';
import MarkdownPreviewer from './MarkdownPreviewer'
import './style.css'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div id="grid-container">
      <Header />
      <MarkdownPreviewer />
      <Footer />
    </div>
    );
}

export default App;
