import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import { FaCalculator, FaRegFileAlt, FaUserCog, FaUserFriends, FaFolderOpen, FaUserCheck } from 'react-icons/fa'
import React from 'react';
  
  // Replace test data with your own
  const features = 
  [  {
      id: 1,
      title: 'Assessoria contabil',
      text: 'Relatórios contábeis mensais com foco gerencial para te ajudar na tomada de decisões',
      icon: FaCalculator
    },
    {
        id: 2,
        title: 'Assessoria tributária',
        text: 'Analisamos o melhor regime tributário para sua empresa ter a maior redução de impostos possíveis',
        icon: FaRegFileAlt
      },
      {
        id: 3,
        title: 'Assessoria trabalhista',
        text: 'Acompanhamos de perto seu negócio com foco na redução de riscos trabalhistas e previdenciários',
        icon: FaUserCog
      },
      {
        id: 4,
        title: 'Societário',
        text: 'Fazemos toda a legalização da sua empresa junto as repartições governamentais, estaduais e municipais',
        icon: FaUserFriends
      },
      {
          id: 5,
          title: 'Contabiliade',
          text: 'Vamos cuidar da contabilidade completa para você, cumprindo todas as obrigações perante aos órgãos públicos',
          icon: FaCalculator
        },
        {
          id: 6,
          title: 'Escrita fiscal',
          text: 'Lançamento, apuração de impostos e escrituração fiscal em todos os livros. Elaboração da emissão de guias de recolhimentos dos tributos federais, estaduais e municipais.',
          icon: FaFolderOpen
        },
        {
            id: 7,
            title: 'IRPF',
            text: 'O IRPF (Imposto de Renda Pessoa Física) é um dos impostos mais importantes para se declarar, por isso é importante contar com uma empresa comprometida e eficiente em fazer todo o acompanhamento necessário e evitar problemas com a receita.',
            icon: FaRegFileAlt
          },
          {
            id: 8,
            title: 'Regularidade fiscal',
            text: 'Analisamos todos os meses os dados gerais dos clientes verificando a existência de débitos junto aos órgãos federais, estaduais e municipais.',
            icon: FaUserCheck
          },
  ]
  
  export default function GridListWithHeading() {
    return (
      <Box p={8}
        //h={{base: 'full', md:'100vh', lg:'100vh'}}
        mb='10px'
        bg='#eeeeee'
      >
        <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={'3xl'}>Gaspi Contabilidade</Heading>
          <Text color={'gray.600'} fontSize={'xl'}>
            Estamos em São José do Rio Preto e através da internet
            oferecemos diversos serviços para nossos clientes,
            como abertura de empresa, assessoria contábil, assessoria fiscal e trabalhista.
          </Text>
        </Stack>
        <Container maxW={'6xl'} mt={20} mb={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
                <HStack key={feature.id} align={'top'}>
                  <VStack align={'start'}>
                  <Box color={'green.400'} px={2} ml={'60px'}>
                <Icon as={feature.icon} fontSize={26}/>
              </Box>
                    <Text fontWeight={600}>{feature.title}</Text>
                    <Text color={'gray.600'}>{feature.text}</Text>
                  </VStack>
                </HStack>
            ))}
          </SimpleGrid>
        </Container>
        </Box>
    );
  }