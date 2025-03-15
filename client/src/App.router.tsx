import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from 'react-router';
import App from './App';
import Landing from './pages/landing/Landing';
import NotFound from './pages/not-found/NotFound';
import { PageRoute } from './types';

export const AppRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path={PageRoute.LANDING}
      element={<App />}
      handle={{
        crumb: () => '',
      }}>
      <Route
        index
        element={<Landing />}
        handle={{
          crumb: () => 'Landing',
        }}
      />
      <Route
        path="*"
        handle={{
          crumb: () => 'Not Found',
        }}
        element={<NotFound />}
      />
    </Route>
  )
);
