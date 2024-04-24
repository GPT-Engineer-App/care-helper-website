import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaRegCalendarAlt, FaUserNurse } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Heading as="h1" size="xl">
          Caregiver Connect
        </Heading>
        <Button leftIcon={<FaPhone />} colorScheme="teal" variant="solid">
          Contact Us
        </Button>
      </Flex>
      <Stack direction={{ base: "column", md: "row" }} spacing={10} py={10}>
        <Box flex="1">
          <Image src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBoZWxwaW5nJTIwZWxkZXJseXxlbnwwfHx8fDE3MTM5MzM0MzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        </Box>
        <VStack flex="1" alignItems="flex-start" spacing={4}>
          <Heading as="h2" size="lg">
            Professional Caregiving Services
          </Heading>
          <Text fontSize="lg">We provide high-quality, compassionate care for seniors and individuals with special needs. Let us help you find the perfect caregiver for your loved ones.</Text>
          <Button leftIcon={<FaUserNurse />} colorScheme="blue" size="lg">
            Find a Caregiver
          </Button>
          <Button leftIcon={<FaRegCalendarAlt />} colorScheme="green" size="lg">
            Schedule a Visit
          </Button>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Index;
