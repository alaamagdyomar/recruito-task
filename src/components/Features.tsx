'use client';
import {
  Box,
  Button,
  Heading,
  Stack,
  Flex,
  Text,
  Image
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Features() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
    <Box maxW="1200px" mx="auto" p={6} position={'relative'}>
      {/* Button */}
      <Flex justify="center" mb={6}>
        <Button
          variant="outline"
          border="1px solid gray"
          borderRadius="md"
          px={4}
          py={2}
          fontWeight="bold"
        >
          Features
        </Button>
      </Flex>

      {/* Header */}
      <Flex justify="center" textAlign="center" mb={10}>
        <Heading
          fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
          fontWeight="bold"
        >
          Streamline your recruitment with our advanced features
        </Heading>
      </Flex>

      {/* Feature Rows */}
      <Flex
        alignItems="start"
        justifyContent="space-between"
        height={'100%'}
        >
        {/* Text Section */}
        <Box flex={1} p={4}>
            <Text
            fontSize="44px"
            fontWeight="600"
            lineHeight="53.68px"
            textAlign="left"
            color="black"
            mb={4}
            >
            Candidate Sourcing & Job Posting
            </Text>
            <Text
            fontSize="14px"
            fontWeight="400"
            lineHeight="24px"
            textAlign="left"
            >
            Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed.
            </Text>
        </Box>

            <Box 
            flex={1} 
            position="relative" 
            width="100%" 
            height="100%" 
            >
            {/* Top Image (Above the Background Images) */}
            <Box
                position="absolute"
                top="-10%"
                left="50%"
                transform="translate(-50%, 0)"
                zIndex={2} /* Higher z-index to overlay other images */
                boxShadow="lg"
                rounded="md"
            >
                <Image
                src="/cards/Group9.png" /* Replace with your image path */
                alt="Top Image"
                boxSize="200px" /* Adjust size as needed */
                objectFit="cover"
                rounded="md"
                />
            </Box>

            {/* Left Background Image */}
            <Box
                position="absolute"
                top="30px"
                left="2%"
                zIndex={1} /* Lower z-index */
                boxShadow="lg"
                rounded="md"
            >
                <Image
                src="/cards/Group9.png" /* Replace with your image path */
                alt="Left Background Image"
                boxSize="180px" /* Adjust size as needed */
                objectFit="cover"
                rounded="md"
                />
            </Box>

            {/* Right Background Image */}
            <Box
                position="absolute"
                top="30px"
                right="2%"
                zIndex={1} /* Lower z-index */
                boxShadow="lg"
                rounded="md"
            >
                <Image
                src="/cards/Group9.png" /* Replace with your image path */
                alt="Right Background Image"
                boxSize="180px" /* Adjust size as needed */
                objectFit="cover"
                rounded="md"
                />
            </Box>
            </Box>

    </Flex>       
    </Box>
    <Box maxW="1200px" mx="auto" p={6} position={'relative'}>
    
    {/* Feature Rows */}
    <Flex
      alignItems="start"
      justifyContent="space-between"
      height={'100%'}
      >
          <Box 
          flex={1} 
          position="relative" 
          width="100%" 
          height="100%" 
          >
          {/* Top Image (Above the Background Images) */}
          <Box
              position="absolute"
              top="-10%"
              left="50%"
              transform="translate(-50%, 0)"
              zIndex={2} /* Higher z-index to overlay other images */
              boxShadow="lg"
              rounded="md"
          >
              <Image
              src="/cards/Group9.png" /* Replace with your image path */
              alt="Top Image"
              boxSize="200px" /* Adjust size as needed */
              objectFit="cover"
              rounded="md"
              />
          </Box>

          {/* Left Background Image */}
          <Box
              position="absolute"
              top="30px"
              left="2%"
              zIndex={1} /* Lower z-index */
              boxShadow="lg"
              rounded="md"
          >
              <Image
              src="/cards/Group9.png" /* Replace with your image path */
              alt="Left Background Image"
              boxSize="180px" /* Adjust size as needed */
              objectFit="cover"
              rounded="md"
              />
          </Box>

          {/* Right Background Image */}
          <Box
              position="absolute"
              top="30px"
              right="2%"
              zIndex={1} /* Lower z-index */
              boxShadow="lg"
              rounded="md"
          >
              <Image
              src="/cards/Group9.png" /* Replace with your image path */
              alt="Right Background Image"
              boxSize="180px" /* Adjust size as needed */
              objectFit="cover"
              rounded="md"
              />
          </Box>
          </Box>
 {/* Text Section */}
 <Box flex={1} p={4}>
          <Text
          fontSize="44px"
          fontWeight="600"
          lineHeight="53.68px"
          textAlign="left"
          color="black"
          mb={4}
          >
          Candidate Sourcing & Job Posting
          </Text>
          <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="24px"
          textAlign="left"
          >
          Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed.
          </Text>
      </Box>
  </Flex>       
  </Box>
     <Box maxW="1200px" mx="auto" p={6} position={'relative'}>
       {/* Feature Rows */}
     <Flex
       alignItems="start"
       justifyContent="space-between"
       height={'100%'}
       >
       {/* Text Section */}
       <Box flex={1} p={4}>
           <Text
           fontSize="44px"
           fontWeight="600"
           lineHeight="53.68px"
           textAlign="left"
           color="black"
           mb={4}
           >
           Candidate Sourcing & Job Posting
           </Text>
           <Text
           fontSize="14px"
           fontWeight="400"
           lineHeight="24px"
           textAlign="left"
           >
           Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed.
           </Text>
       </Box>

           <Box 
           flex={1} 
           position="relative" 
           width="100%" 
           height="100%" 
           >
           {/* Top Image (Above the Background Images) */}
           <Box
               position="absolute"
               top="-10%"
               left="50%"
               transform="translate(-50%, 0)"
               zIndex={2} /* Higher z-index to overlay other images */
               boxShadow="lg"
               rounded="md"
           >
               <Image
               src="/cards/Group9.png" /* Replace with your image path */
               alt="Top Image"
               boxSize="200px" /* Adjust size as needed */
               objectFit="cover"
               rounded="md"
               />
           </Box>

           {/* Left Background Image */}
           <Box
               position="absolute"
               top="30px"
               left="2%"
               zIndex={1} /* Lower z-index */
               boxShadow="lg"
               rounded="md"
           >
               <Image
               src="/cards/Group9.png" /* Replace with your image path */
               alt="Left Background Image"
               boxSize="180px" /* Adjust size as needed */
               objectFit="cover"
               rounded="md"
               />
           </Box>

           {/* Right Background Image */}
           <Box
               position="absolute"
               top="30px"
               right="2%"
               zIndex={1} /* Lower z-index */
               boxShadow="lg"
               rounded="md"
           >
               <Image
               src="/cards/Group9.png" /* Replace with your image path */
               alt="Right Background Image"
               boxSize="180px" /* Adjust size as needed */
               objectFit="cover"
               rounded="md"
               />
           </Box>
           </Box>

   </Flex>       
   </Box>
   <Box maxW="1200px" mx="auto" p={6} position={'relative'}>
    
    {/* Feature Rows */}
    <Flex
      alignItems="start"
      justifyContent="space-between"
      height={'100%'}
      >
          <Box 
          flex={1} 
          position="relative" 
          width="100%" 
          height="100%" 
          >
          {/* Top Image (Above the Background Images) */}
          <Box
              position="absolute"
              top="-10%"
              left="50%"
              transform="translate(-50%, 0)"
              zIndex={2} /* Higher z-index to overlay other images */
              boxShadow="lg"
              rounded="md"
          >
              <Image
              src="/cards/Group9.png" /* Replace with your image path */
              alt="Top Image"
              boxSize="200px" /* Adjust size as needed */
              objectFit="cover"
              rounded="md"
              />
          </Box>

          {/* Left Background Image */}
          <Box
              position="absolute"
              top="30px"
              left="2%"
              zIndex={1} /* Lower z-index */
              boxShadow="lg"
              rounded="md"
          >
              <Image
              src="/cards/Group9.png" /* Replace with your image path */
              alt="Left Background Image"
              boxSize="180px" /* Adjust size as needed */
              objectFit="cover"
              rounded="md"
              />
          </Box>

          {/* Right Background Image */}
          <Box
              position="absolute"
              top="30px"
              right="2%"
              zIndex={1} /* Lower z-index */
              boxShadow="lg"
              rounded="md"
          >
              <Image
              src="/cards/Group9.png" /* Replace with your image path */
              alt="Right Background Image"
              boxSize="180px" /* Adjust size as needed */
              objectFit="cover"
              rounded="md"
              />
          </Box>
          </Box>
 {/* Text Section */}
 <Box flex={1} p={4}>
          <Text
          fontSize="44px"
          fontWeight="600"
          lineHeight="53.68px"
          textAlign="left"
          color="black"
          mb={4}
          >
          Candidate Sourcing & Job Posting
          </Text>
          <Text
          fontSize="14px"
          fontWeight="400"
          lineHeight="24px"
          textAlign="left"
          >
          Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed.
          </Text>
      </Box>
  </Flex>       
  </Box>
  <Box maxW="1200px" mx="auto" p={6} position={'relative'}>
       {/* Feature Rows */}
     <Flex
       alignItems="start"
       justifyContent="space-between"
       height={'100%'}
       >
       {/* Text Section */}
       <Box flex={1} p={4}>
           <Text
           fontSize="44px"
           fontWeight="600"
           lineHeight="53.68px"
           textAlign="left"
           color="black"
           mb={4}
           >
           Candidate Sourcing & Job Posting
           </Text>
           <Text
           fontSize="14px"
           fontWeight="400"
           lineHeight="24px"
           textAlign="left"
           >
           Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed.
           </Text>
       </Box>

           <Box 
           flex={1} 
           position="relative" 
           width="100%" 
           height="100%" 
           >
           {/* Top Image (Above the Background Images) */}
           <Box
               position="absolute"
               top="-10%"
               left="50%"
               transform="translate(-50%, 0)"
               zIndex={2} /* Higher z-index to overlay other images */
               boxShadow="lg"
               rounded="md"
           >
               <Image
               src="/cards/Group9.png" /* Replace with your image path */
               alt="Top Image"
               boxSize="200px" /* Adjust size as needed */
               objectFit="cover"
               rounded="md"
               />
           </Box>

           {/* Left Background Image */}
           <Box
               position="absolute"
               top="30px"
               left="2%"
               zIndex={1} /* Lower z-index */
               boxShadow="lg"
               rounded="md"
           >
               <Image
               src="/cards/Group9.png" /* Replace with your image path */
               alt="Left Background Image"
               boxSize="180px" /* Adjust size as needed */
               objectFit="cover"
               rounded="md"
               />
           </Box>

           {/* Right Background Image */}
           <Box
               position="absolute"
               top="30px"
               right="2%"
               zIndex={1} /* Lower z-index */
               boxShadow="lg"
               rounded="md"
           >
               <Image
               src="/cards/Group9.png" /* Replace with your image path */
               alt="Right Background Image"
               boxSize="180px" /* Adjust size as needed */
               objectFit="cover"
               rounded="md"
               />
           </Box>
           </Box>

   </Flex>       
   </Box> 
    </>
  );
}
