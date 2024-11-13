import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Auth0ProviderWithNaviagte from './auth/Auth0ProviderWithNaviagte';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'sonner';

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
            <Toaster
              visibleToasts={1}
              position="bottom-right"
              // richColors
              duration={4000}
              theme='dark'
            />
        </Auth0ProviderWithNaviagte>
      </QueryClientProvider>
    </Router>
  </StrictMode>,
);

