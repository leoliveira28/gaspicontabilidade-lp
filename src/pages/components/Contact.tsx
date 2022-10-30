import { Box, Container, FormControl, FormLabel, Heading, Input, Text, Stack, Button, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";


export default function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [cep, setCep] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!name || !email)
        return toast.error("Por favor, verifique seus dados");
      const hubspotResponse = await submitHubspotForm(
        name,
        phone,
        email,
        cep
      );
      setName('')
      setPhone('')
      setEmail('')
      setCep('')

      };
  // HUBSPORT SUBMISSION FORM DATA 
    const submitHubspotForm = async (name, phone, email, cep) => {
      const portalId = "23158671";
      const formGuid = "f8a569f0-dd6b-4037-af83-e290a41c5c59";
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const response = await axios.post(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        {
          portalId,
          formGuid,
          fields: [
            {
              name: "firstname",
              value: name,
            },
            {
              name: "phone",
              value: phone,
            },
            {
              name: "email",
              value: email,
            },
            {
              name: "cep",
              value: cep,
            },
          ],
        },
        config
      );
      return response;
    };
  
  return (
    <Box id={'contact'} p={["8", "4"]} h={{ base: "full", md: "100vh", lg: "100vh" }}>
        <Container maxW={'lg'} py={16} as={Stack} spacing={10}>
        <Heading>
            Simulador de impostos
        </Heading>
        <Text>
            Preencha as informações abaixo
        </Text>
      <form onSubmit={handleSubmit}>
      <FormControl isRequired >
        <Stack spacing={5}>
        <FormLabel>Nome</FormLabel>
        <Input
         placeholder="Nome"
         value={name}
         onChange={(e) => {
          setName(e.target.value)
         }} />
        <FormLabel>Celular</FormLabel>
        <Input type="number" placeholder="Celular"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value)
         }} />
        <FormLabel>E-mail</FormLabel>
        <Input type="email" placeholder="E-mail"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
         }} />
        <FormLabel>CEP</FormLabel>
        <Input placeholder="CEP" 
        value={cep}
        onChange={(e) => {
          setCep(e.target.value)
         }}/>
        <Button colorScheme={'blue'} type={'submit'}>Simular</Button>
        </Stack>
      </FormControl>
      </form>
      
      </Container>
    </Box>
  );


}

