'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Box,
  Image,
  SimpleGrid
} from '@chakra-ui/react'


export default function Home() {
  return (
    <Container maxW={'3xl'} mt={20}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 8 }}
        py={{ base: 5, md: 8 }}
        >
      <Box
        position="absolute"
        top="0"
        right="0"
        zIndex="-1" // Ensures the image is beneath all other components
      >
        <Image src="/boxBg.png" alt="Background Image" />
      </Box>
      <Box
        position="absolute"
        bottom="300"
        left="-50"
        zIndex="-1" 
      >
        <Image src="/boxBg.png" alt="Bottom Left Image" />
      </Box>
        <Heading
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight="110%"
        textAlign="center"
        >
        Revolutionize Your Hiring Process with{' '}
        <Box as="span" display="inline-flex" alignItems="center">
            <Text
            as="span"
            sx={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontSize: '54px',
                fontWeight: 600,
                lineHeight: '65.88px',
                textAlign: 'center',
                bgGradient: 'linear(273.36deg, #1F67E7 1.01%, #1AD7BE 99.63%)',
                bgClip: 'text',
                color: 'transparent',
                textUnderlinePosition: 'from-font',
            }}
            >
            Recruito AI
            </Text>
            <Image
            src="/Group 1.png"
            alt="Logo"
            height="25px"
            width="26px"
            marginLeft="4px"
            position="relative"
            top="-10px"
            />
        </Box>
        </Heading>
        <Box 
        display="inline-flex"
        alignItems="center"
        w={{ base: '100%', md: '460px' }} 
        h={{ base: 'auto', md: '48px' }}
        >
            <Text color={'gray.500'} maxW={'1xl'}>
            Your fully automated hiring assistant that sources, screens, and interviews candidates effortlessly
            </Text>
        </Box>
        <Stack spacing={4} direction={{base:'column' , md:'row' , lg:'row'}}>
          <Button rounded={'full'} px={6}>
          Start Your Free Trial
          </Button>
          <Button
                display="inline-flex"
                rounded={'full'}
                alignItems="center"
                justifyContent="center"
                bgGradient="linear(273.36deg, #1F67E7 1.01%, #1AD7BE 99.63%)"
                color="white"
                fontWeight="600"
                fontSize="lg"
                px="6"
                py="4"
                borderRadius="md"
                _hover={{
                    bgGradient: 'linear(273.36deg, #1AD7BE 1.01%, #1F67E7 99.63%)',
                }}
                >
                <Image
                    src="/Group 5.png"
                    alt="Logo"
                    height="20px"
                    marginRight="8px" 
                />
                <Text>Request A Demo</Text>
           </Button>
        </Stack>
      </Stack>
    <Stack
      position="relative"
      mx="auto" 
      width={{ base: '100%', md: '100%', lg: '120%' }} 
      height={{ base: 'auto', md: '500px', lg: '600px' }} 
      justifyContent={{ base: 'center',md:'center' , lg: 'center' }} 
      alignItems={{ base:'center' , md:'center' ,lg:'end'}}
      spacing={{ base: 4, md: 0 }} 
      padding={3}
    >
      {/* Center Image */}
      <Box 
      position="relative" 
      zIndex="1" 
      width={{ base: '100%', md: '100%' , lg :'120%' }} // Full width for all screen sizes
      >
        <Image
          src="/center.png"
          alt="Center Image"
          objectFit="contain"
          width={{ base: '100%', md: '100%' }} // Full width for all screen sizes
        //   mx="auto" // Center horizontally
        />
      </Box>

      {/* Left Image */}
      <Box
        position={{ base: 'absolute', md: 'absolute' }} 
        bottom={{ base: '-10%', md:'-45%' , lg: '-20%' }} 
        left={{ base: '30%', md: '35%' , lg:'-15%' }} 
        transform={{
          base: 'translate(-50%, 50%)',
          md: 'translate(-50%, -50%)',
        }} 
        zIndex="2"
        width={{ base: '30%', md: '30%' ,lg:'30%' }}
      >
        <Image
          src="/left.png"
          alt="Left Image"
          objectFit="contain"
          width="100%"
        />
      </Box>

      {/* Right Image */}
      <Box
        position={{ base: 'absolute', md: 'absolute' }} 
        bottom={{ base: '-10%', md: '-45%' , lg:'-6%' }}
        right={{ base: '30%', md:'35%' , lg: '-1%' }} 
        transform={{
          base: 'translate(50%, 50%)',
          md: 'translate(50%, -50%)',
        }} 
        zIndex="2"
        width={{ base: '30%', md: '30%' , lg:'30%' }}
      >
        <Image
          src="/right.png"
          alt="Right Image"
          objectFit="contain"
          width="100%"
        />
      </Box>
    </Stack>
    <Flex
      direction="column"
      align="center"
      justify="center"
      maxW="1200px"
      mx="auto"
      py={10}
      px={4}
      mt={12}
    >
      {/* Paragraph */}
      <Box mb={6}>
        <Text
          fontSize={{ base: 'lg', md: '14px' }}
          textAlign="center"
          maxW="800px"
          mx="auto"
          color="gray.700"
        >
Trusted by the world leading organisations
        </Text>
      </Box>

      {/* Images */}
      <SimpleGrid
        columns={{ base: 3, md: 6 }} // 3 columns on mobile, 6 on desktop
        spacing={4}
        w="100%"
      >
        <Box>
          {/* <Image src="/socialMedia/1.png" alt="Image 1" /> */}
          <Text
            fontSize={{ md: '30px' }}
            fontWeight="bold"
            bgGradient="linear(to-r, lightgray, gray, #f5f5f5)"           
            bgClip="text"
            color="transparent" /* Ensures only the gradient is visible */
          >
            GSK
          </Text>
        </Box>
        <Box mt={2}>
          <Image src="/socialMedia/2.png" alt="Image 2" />
        </Box>
        <Box>
          <Image src="/socialMedia/3.png" alt="Image 3" />
        </Box>
        <Box mt={3}>
          <Image src="/socialMedia/4.png" alt="Image 4" />
        </Box>
        <Box mt={3}>
          <Image src="/socialMedia/1.png" alt="Image 5" />
        </Box>
        <Box>
          <Text
            fontSize={{ md: '30px' }}
            fontWeight="bold"
            bgGradient="linear(to-r, lightgray, gray, #f5f5f5)"           
            bgClip="text"
            color="transparent" /* Ensures only the gradient is visible */
          >
            GSK
          </Text>
        </Box>
      </SimpleGrid>
    </Flex>
    </Container>
  )
}