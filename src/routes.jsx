import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/Page404';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    { path: '*', element: <NotFound replace /> },
  ]);
}
