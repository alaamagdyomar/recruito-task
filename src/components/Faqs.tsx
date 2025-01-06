import {
    Flex,
    Button,
    Container,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ChevronDownIcon } from '@chakra-ui/icons';
  
  export default function ResponsiveAccordion() {
    return (
      <Flex
        direction="column"
        minH="100vh"
        align="center"
        justify="start"
        bgGradient="linear(to-b, #848EA0, rgba(132, 142, 160, 0.2))"
        width="100%"
      >
        <Flex justify="center" mb={20} mt={28}>
          <Button
            variant="outline"
            borderColor="#004CD3"
            borderRadius="full"
            fontWeight="bold"
            color="#004CD3"
          >
            Faqs
          </Button>
        </Flex>
        <Container
          width={["90%", "80%", "60%"]} // Responsive widths for mobile, tablet, and desktop
          maxW="container.lg"
          rounded="lg"
          p={4} // Optional padding for spacing
        >
          <Accordion allowMultiple>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text textAlign={'left'} fontSize="md">What is an AI Agent?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. Key capabilities include:
                - Natural Language Processing to interpret resumes and candidate responses
                - Adaptive Learning to improve accuracy and efficiency over time
                - Task Automation to handle repetitive or time-consuming steps
                - Data-Driven Insights for better predictions and decisions
                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text textAlign={'left'} fontSize="md">What are the Benefits of Using Recruito’s AI Agent?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">

                </Text>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                p={4}
              >
                <Text textAlign={'left'} fontSize="md">Next Steps?</Text>
                <ChevronDownIcon fontSize="24px" />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text color="gray.600">
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Flex>
    );
  }
  