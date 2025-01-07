'use client';

import {
  Avatar,
  Box,
  chakra,
  Flex,
  useColorModeValue,
  Stack,
  Container,
  Button,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Brandon P.',
    role: 'Chief Marketing Officer',
    content:
      'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
    avatar:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Krysta B.',
    role: 'Entrepreneur',
    content:
      "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
    avatar:
      'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Darcy L.',
    role: 'Movie star',
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Darcy L.',
    role: 'Movie star',
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Darcy L.',
    role: 'Movie star',
    content:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
];

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar } = props;
  return (
    <Flex
      boxShadow="lg"
      width={{base:'300px' ,md:'450px' , lg:'600px'}}
      height="auto"
      direction="column"
      rounded="xl"
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      border="1px solid transparent"
      mb={10}
    >
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Flex direction="column">
          <chakra.p fontFamily="Work Sans" fontWeight="bold" fontSize="16px">
            {name}
          </chakra.p>
          <chakra.span fontFamily="Inter" fontWeight="medium" color="gray.500" fontSize="14px">
            {role}
          </chakra.span>
        </Flex>
        <Avatar src={avatar} height="80px" width="80px" />
      </Flex>
      <chakra.p fontFamily="Inter" fontWeight="medium" fontSize="15px" color="gray.700">
        {content}
      </chakra.p>
    </Flex>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Flex direction="column" align="center" justify="center" width="full" p={[4, 8, 12]}>
    <Stack spacing={4} as={Container} mb={30} mt={20} maxW={'3xl'} textAlign={'center'}>
      <Flex justify="center" mb={6}>
        <Button
          variant="outline"
          borderColor="#004CD3"
          borderRadius="full"   
          px={4}
          py={2}
          fontWeight="bold"
          color={'#004CD3'}
        >
          Testimonials
        </Button>
      </Flex>
        <Text mb={10} color={'black'} fontWeight={'bold'} fontSize={{ base: 'sm', lg: '44px' }}>
        Unlock the advantages of using Recruito AI for your hiring needs.
        </Text>
      </Stack>  
      <Flex
        overflow="hidden"
        width="100%"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Flex
          transform={`translateX(calc(50% - ${(currentIndex * 324) + 150}px))`} // Center active card
          transition="transform 0.5s"
          width={`${testimonials.length * 324}px`} // Dynamic container width
          gap="24px" // Spacing between cards
        >
          {testimonials.map((cardInfo, index) => (
            <Box key={index} flex="0 0 auto" display="flex" justifyContent="center">
              <TestimonialCard {...cardInfo} />
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex mt={6} justifyContent="center">
        {testimonials.map((_, index) => (
          <Box
            key={index}
            as="button"
            height="10px"
            width="10px"
            mx={2}
            rounded="full"
            bg={index === currentIndex ? 'blue.500' : 'gray.300'}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Flex>
    </Flex>
  );
}
