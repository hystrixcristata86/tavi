import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <main>
        <Outlet />
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default MainLayout;
