import { Box, Container, Stack, Heading, FormControl, FormLabel, Input, Button, Text } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"
import Navbar from "../components/Navbar"
import { useRouter } from 'next/router'


const QuantoCusta = () => {
    const router = useRouter()
    const [funcionarios, setFuncionarios] = useState('')
    const [socios, setSocios] = useState('')
    const [atividade, setAtividade] = useState('')
    const [abertura, setAbertura] = useState('')
    const [tranferencia, setTransferencia] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!funcionarios || !socios)
          return toast.error("Por favor, verifique seus dados");
        const hubspotResponse = await submitHubspotForm(
            funcionarios,
            socios,
            atividade,
            abertura,
            tranferencia
        );
        setFuncionarios('')
        setSocios('')
        setAtividade('')
        setAbertura('')
        setTransferencia('')
        router.push('/')
        };
        // HUBSPORT SUBMISSION FORM DATA 
    const submitHubspotForm = async (funcionarios, socios, atividade, abertura, tranferencia) => {
        const portalId = "23158671";
        const formGuid = "fd1b2a94-09b5-4a39-9c78-724c07250e26";
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
                name: "funcionarios",
                value: funcionarios,
              },
              {
                name: "socios",
                value: socios,
              },
              {
                name: "atividade",
                value: atividade,
              },
              {
                name: "abertura",
                value: abertura,
              },
              {
                name: "tranferencia",
                value: tranferencia,
              },
            ],
          },
          config
        );
        return response;
      };
    return (
        <>
        <Navbar />
        <Box id={'contact'} p={["8", "4"]} h={{ base: "full", md: "100vh", lg: "100vh" }} >
            <Container maxW={'lg'} py={16} as={Stack} spacing={10} alignItems="center" >
                <Heading>
                    Receba seu Orçamento
                </Heading>
                <Text>
                    Preencha as informações abaixo
                </Text>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired background='gray.100' p='20px' borderRadius='20px' w='370px'>
                        <Stack spacing={5}>
                            <FormLabel>Quantos Funcionarios</FormLabel>
                            <Input
                                placeholder="Quantos Funcionarios?"
                                type='number'
                                value={funcionarios}
                                onChange={(e) => {
                                    setFuncionarios(e.target.value)
                                } } />
                            <FormLabel>Quantos Socios</FormLabel>
                            <Input type="number" placeholder="Quantos Socios"
                                value={socios}
                                onChange={(e) => {
                                    setSocios(e.target.value)
                                } } />
                            <FormLabel>Atividade</FormLabel>
                            <Input type="text" placeholder="Atividade"
                                value={atividade}
                                onChange={(e) => {
                                    setAtividade(e.target.value)
                                } } />
                            <FormLabel>Abertura de empresa?</FormLabel>
                            <Input placeholder="Sim ou não?"
                                value={abertura}
                                onChange={(e) => {
                                    setAbertura(e.target.value)
                                } } />
                            <FormLabel>Transferência de Contabilidade?</FormLabel>
                            <Input placeholder="Sim ou não?"
                                value={tranferencia}
                                onChange={(e) => {
                                    setTransferencia(e.target.value)
                                } } />
                            <Button colorScheme={'blue'} type={'submit'}>Receber Orçamento</Button>
                        </Stack>
                    </FormControl>
                </form>

            </Container>
        </Box>
        </>
        )
}

export default QuantoCusta