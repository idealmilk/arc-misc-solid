import { useRoutes, Router, Link } from 'solid-app-router';

import { useCarbonIntensity } from './context/carbonIntensity';

import { routes } from './routes';

export const App = () => {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <div class='App'>
        <main className='page-wrap'>
          <Routes />
        </main>
      </div>
    </Router>
  );
};

export default App;
