import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import GlobalStyles from './components/GlobalStyles';
import RootLayout from './layouts/Root';
import HomePage from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
    </Route>,
  ),
);

function App() {
  return (
    <GlobalStyles>
      <RouterProvider router={router} />
    </GlobalStyles>
  );
}

export default App;
