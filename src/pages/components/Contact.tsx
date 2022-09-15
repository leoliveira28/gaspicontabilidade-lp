import { Box, Container, FormControl, FormLabel, Heading, Input, Text, Stack, Button, SimpleGrid } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box p={["8", "4"]} h={{ base: "full", md: "100vh", lg: "100vh" }}>
        <Container maxW={'lg'} py={16} as={Stack} spacing={10}>
        <Heading>
            Simulador de impostos
        </Heading>
        <Text>
            Preencha as informações abaixo
        </Text>
        
      <FormControl isRequired>
        <Stack spacing={5}>
        <FormLabel>Nome</FormLabel>
        <Input placeholder="Nome" />
        <FormLabel>Celular</FormLabel>
        <Input type="number" placeholder="Celular" />
        <FormLabel>E-mail</FormLabel>
        <Input type="email" placeholder="E-mail" />
        <FormLabel>CEP</FormLabel>
        <Input placeholder="CEP" />
        <Button colorScheme={'blue'}>Enviar</Button>
        </Stack>
      </FormControl>

      </Container>
    </Box>
  );
}
