import { Container } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./Dashboard";
import theme from "./theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" py="20">
        <Dashboard />
      </Container>
    </ChakraProvider>
  );
};

export default App;
