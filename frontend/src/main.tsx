import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Auth0ProviderWithNaviagte from './auth/Auth0ProviderWithNaviagte';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNaviagte>
          <AppRoutes />
        </Auth0ProviderWithNaviagte>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
);
