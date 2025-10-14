import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Exchange from "./Exchange";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Exchange />
    </QueryClientProvider>
  );
};

export default App;
