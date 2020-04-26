import React from 'react';


import 'antd/dist/antd.css'
import Index from './components/shortener_url';
import AppLayout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Index />
      </AppLayout>
    </div>
  );
}

export default App;
