// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import { QueryClient, QueryClientProvider, setLogger } from "react-query";

import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

setLogger({
  log: console.log,
  warn: console.warn,
  // ✅ no more errors on the console
  error: () => {},
});

const customRender = (ui, { ...renderOpts } = {}) => {
  const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );

  return render(ui, { wrapper, ...renderOpts });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
