import { Routes, Route, useNavigate } from 'react-router-dom';
import { Box, Heading, Button, Text } from '@chakra-ui/react';

function App() {
  return (
    <Box p={4}>
      <Heading mb={4}>Meu Projeto com React Router e Chakra UI</Heading>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Box>
  );
}

function Home() {
  const navigate = useNavigate()
  return (
    <Box textAlign="center">
      <Heading>Página Inicial</Heading>
      <Text>Bem-vindo à Página Inicial!</Text>
      <Button colorScheme="teal" mt={4} as="a" onClick={() => navigate('/sobre')}>
        Ir para Sobre
      </Button>
    </Box>
  );
}

function Sobre() {
  const navigate = useNavigate()
  return (
    <Box textAlign="center">
      <Heading>Página Sobre</Heading>
      <Text>Informações sobre o projeto.</Text>
      <Button colorScheme="blue" mt={4} as="a" onClick={() => navigate('/')}>
        Voltar para Home
      </Button>
    </Box>
  );
}

export default App;
