import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <h1>React + Vite + JavaScript</h1>
      <Outlet />
    </>
  );
}

export default RootLayout;
