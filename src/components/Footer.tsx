'use client';

import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      width="100%"
      px={[4, 8, 16]} 
      py={[8, 12]} 
      bg="#848EA00D"
      color="white"
    >
      <Flex direction="column" flex="1" align={['center', 'flex-start']} gap={2}>
        <Image
          src="/logo.png"
          alt="Logo"
          mb={2}
        />
        <Text color={'black'} fontSize={['sm', 'md', 'md']} textAlign={['center', 'left']}>
        © 2024 Recruito AI . All rights reserved.        </Text>
      </Flex>

      <Flex mt={5} direction="column" flex="1" align={['center', 'flex-end']} gap={4}>
        <Flex gap={4} justify={['center', 'flex-end']}>
            <Image
              src="/social/iconoir_facebook.png" // Replace with your Facebook image URL
              alt="Facebook"
              boxSize={['24px', '24px']} // Responsive size
            />
          <Link href="https://twitter.com" isExternal>
            <Image
              src="/social/ant-design_x-outlined.png" // Replace with your Twitter image URL
              alt="Twitter"
              boxSize={['24px', '24px']} // Responsive size
            />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <Image
              src="/social/fa6-brands_instagram.png" // Replace with your Instagram image URL
              alt="Instagram"
              boxSize={['24px', '24px']} // Responsive size
            />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Image
              src="/social/basil_linkedin-outline.png" // Replace with your LinkedIn image URL
              alt="LinkedIn"
              boxSize={['24px', '24px']} // Responsive size
            />
          </Link>
        </Flex>
        <Text color={'black'} fontSize={['sm', 'md']} textAlign={['center', 'right']}>
           Terms   Privacy
        </Text>
      </Flex>
    </Flex>
  );
}
