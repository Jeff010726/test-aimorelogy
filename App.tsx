import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import News from './pages/News';
import Contact from './pages/Contact';
import About from './pages/About';
import { RoutePath } from './types';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.PRODUCTS} element={<Products />} />
          <Route path={RoutePath.BLOG} element={<Blog />} />
          <Route path={RoutePath.NEWS} element={<News />} />
          <Route path={RoutePath.CONTACT} element={<Contact />} />
          <Route path={RoutePath.ABOUT} element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;