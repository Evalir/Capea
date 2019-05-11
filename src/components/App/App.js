import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <div style={{ height: '100%' }}>
      <Navbar />
      <div>klk</div>
    </div>
  );
}

export default connect()(App);
