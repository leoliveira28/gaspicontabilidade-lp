import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={'url(https://img.freepik.com/fotos-gratis/close-up-do-teclado-e-vidros-com-executivos-fundo_1098-3635.jpg?w=1380&t=st=1662850971~exp=1662851571~hmac=593da7526c41d586d5f09dd37f10b0e58efb2659f8d9ba0414b8bd795fb38447)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Somos um escritório de contabilidade completo a serviço do seu negócio.
              Venha e experimente a qualidade do atendimento da Gaspi Contabilidade.
            </Text>
            <Text
              color={'white'}
              fontWeight={300}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: 'xl', md: '2xl' })}>
              Fazemos a transferência da sua contabilidade sem complicações.
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'blue.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
                Simulador de impostos
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }