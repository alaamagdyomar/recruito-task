'use client';

import { Box, Button, Flex, Image, Text, Icon } from '@chakra-ui/react';

export default function ResponsiveFlexContainer() {
  return (
    <Flex
      direction={['column', 'column', 'row']} // Column for mobile/tablet, row for desktop
      align="center"
      justify="space-between"
      width="100%"
      gap={[8, 8, 4]}
      pb={5}
      mb={45}
    >
      {/* Left Section */}
      <Flex flex="1" justify="center" display={['none', 'none', 'flex']}>
        {/* Hide this section on mobile and tablet */}
        <Image
          src="/boxes.png" // Replace with your image URL
          alt="Left Section Image"
          boxSize={['200px', '250px', '300px']} // Responsive size
          objectFit="cover"
          rounded="xl"
        />
      </Flex>

      {/* Middle Section */}
      <Flex
        flex="1"
        direction="column"
        align="center"
        textAlign="center"
        gap={4}
      >
        <Icon
          borderRadius={'full'}
          fontSize="60px"
          bgGradient="linear(273.36deg, #1F67E7 1.01%, #1AD7BE 99.63%)"
          color="linear(273.36deg, #1F67E7 1.01%, #1AD7BE 99.63%)"
        >
          <svg viewBox="0 0 32 32">
            <g fill="currentColor">
              <path d="M16,11.5a3,3,0,1,0-3-3A3,3,0,0,0,16,11.5Z" />
              <path d="M16.868.044A8.579,8.579,0,0,0,16,0a15.99,15.99,0,0,0-.868,31.956A8.579,8.579,0,0,0,16,32,15.99,15.99,0,0,0,16.868.044ZM16,26.5a3,3,0,1,1,3-3A3,3,0,0,1,16,26.5ZM16,15A8.483,8.483,0,0,0,8.788,27.977,13.986,13.986,0,0,1,16,2a6.5,6.5,0,0,1,0,13Z" />
            </g>
          </svg>
        </Icon>
        <Text fontSize={['md', 'lg', '44px']} fontWeight="bold" color="gray.700">
          Ready to enhance your hiring process?
        </Text>
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
      </Flex>

      {/* Right Section */}
      <Flex flex="1" justify="center" display={['none', 'none', 'flex']}>
        {/* Hide this section on mobile and tablet */}
        <Image
          src="/boxes.png" // Replace with your image URL
          alt="Right Section Image"
          boxSize={['200px', '250px', '300px']} // Responsive size
          objectFit="cover"
          rounded="xl"
        />
      </Flex>
    </Flex>
  );
}
