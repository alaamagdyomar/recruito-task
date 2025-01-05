'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image
} from '@chakra-ui/react'


interface CardProps {
  heading: string
  description: string
  href: string
}

const Card = ({ heading, description, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'center'} spacing={2}>
      <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          >
            <Image
            src='/benifits/streamline_ai-cloud-spark.png'
            alt='bs'
            />
        </Flex>
        <Box mt={2}>
          <Heading textAlign={'center'} color={"white"} size={{base:'sm' , md:'21px', lg:'21px'}}>{heading}</Heading>
          <Text textAlign={'center'} mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  )
}

export default function Benifits() {
  return (
    <Box width={{base:'100%', md:'100%' , lg:'100%' }} p={{base:'4'}} bg={"#0B1928"} position={'relative'} overflow={{base:'hidden'}}>
        <>
        <Image
        position="absolute"
        src='/benifits/Gabrun-Hero-BG-5 1.png'
        top="0"
        left="0"
        zIndex={1}
        width={"300px"}
        height={"100%"}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="top left"
        alt='benifits'
      />
        <Image
        position="absolute"
        src='/benifits/Gabrun-Hero-BG-5 2.png'
        top="0"
        right="0"
        zIndex={1}
        width={"300px"}
        height={"100%"}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPosition="top left"
        alt='benifits'
      />
      <Stack spacing={4} as={Container}  maxW={'3xl'} textAlign={'center'}>
      <Flex justify="center" mb={6}>
        <Button
          variant="outline"
          borderColor="#1BD1C2"
          borderRadius="full"   
          px={4}
          py={2}
          fontWeight="bold"
          color={'#1BD1C2'}
        >
          Benifits
        </Button>
      </Flex>
        <Text color={'white'} fontWeight={'bold'} fontSize={{ base: 'sm', lg: '44px' }}>
        Unlock the advantages of using Recruito AI for your hiring needs.
        </Text>
      </Stack>

      <Container maxW={{base:'1xl' , md:'2xl' , lg:'5xl' }} mt={12}>
        <Flex color={'#848EA0'} flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Automate Processes'}
            description={'Let Recruito handle resume screening, scheduling, and interviews so you can focus on strategic decisions.'}
            href={'#'}
          />
          <Card
            heading={'Provide Instant Information'}
            description={'Quickly access relevant candidate data, ensuring no talent is overlooked in your search.'}
            href={'#'}
          />
          <Card
            heading={'Make Data-Driven Decisions'}
            description={'Utilize analytics to rank candidates based on key metrics, providing unbiased recommendations for your hiring team.'}
            href={'#'}
          />
        </Flex>
      </Container>
        </>
    </Box>
  )
}