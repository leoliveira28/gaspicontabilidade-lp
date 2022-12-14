import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container, Button, Center } from '@chakra-ui/react';
import { FcAssistant, FcDocument, FcOk, FcDepartment } from 'react-icons/fc';
import React from 'react';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align={'center'} justify={'center'}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600} >{title}</Text>
      <Text color={'gray.600'} textAlign={'center'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={'4'}
    //h={{base: 'full', md:'100vh', lg:'100vh'}}
    >
      <Container maxW={'6xl'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcDepartment} w={10} h={10} />}
          title={'Você sabe o quanto paga de impostos?'}
          text={
            'Além de entender como funciona seus impostos, você confere qual o melhor enquadramento vai te atender. Confira nosso simulador!'
          }
        />
        <Feature
          icon={<Icon as={FcDocument} w={10} h={10} />}
          title={'Indicação premiada'}
          text={
            'Faça uma indicação e ganhe 50% de desconto na proxima mensalidade!'
          }
        />
        <Feature
          icon={<Icon as={FcOk} w={10} h={10} />}
          title={'Transferência de um jeito rápido e fácil'}
          text={
            'Abertura e transferências de um jeito rápido e fácil. Basta enviar os documentos necessários, que o resto é conosco. Sua empresa aberta em até 15 dias.'
          }
        />
                <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Atendimento'}
          text={
            'Entregamos o melhor que um escritório de contabilidade pode oferecer. Atendimento via WhatsApp em até 30 minutos com uma linguagem descomplicada para você focar no que realmente te interessa.'
          } />
      </SimpleGrid>
      </Container>
      <Center mt='50px'>
              <Button as='a' href='#contact'
                bg={'blue.500'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Simulador de impostos
              </Button>
            </Center>
    </Box>
  );
}