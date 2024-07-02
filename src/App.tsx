import React from 'react';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import ErrorBoundary from "./ErrorBoundary";
import AppRoutes from "./AppRoutes";
import Loading from "./components/UI/Loading/Loading";

import { persistor, store } from "./redux/store";

import './assets/styles/scss/index.scss';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}> {/* wrapper for react-query */}
        <Provider store={store}> {/* wrapper for redux-toolkit */}
          <PersistGate loading={<Loading />} persistor={persistor}> {/* wrapper for persistor */}
            <AppRoutes/>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
