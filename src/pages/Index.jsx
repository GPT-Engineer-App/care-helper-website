import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPhone, FaRegCalendarAlt, FaUserNurse } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Heading as="h1" size="xl">
          간병인 연결
        </Heading>
        <Button leftIcon={<FaPhone />} colorScheme="teal" variant="solid">
          연락하기
        </Button>
      </Flex>
      <Stack direction={{ base: "column", md: "row" }} spacing={10} py={10}>
        <Box flex="1">
          <Image src="https://images.unsplash.com/photo-1472066719480-ecc7314ed065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJlZ2l2ZXIlMjBoZWxwaW5nJTIwZWxkZXJseXxlbnwwfHx8fDE3MTM5MzM0MzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        </Box>
        <VStack flex="1" alignItems="flex-start" spacing={4}>
          <Heading as="h2" size="lg">
            전문 간병 서비스
          </Heading>
          <Text fontSize="lg">우리는 고령자 및 특별한 요구를 가진 개인을 위한 고품질의 자비로운 간병을 제공합니다. 귀하의 사랑하는 사람을 위한 완벽한 간병인을 찾는 데 도움을 드리겠습니다.</Text>
          <Button leftIcon={<FaUserNurse />} colorScheme="blue" size="lg">
            간병인 찾기
          </Button>
          <Button leftIcon={<FaRegCalendarAlt />} colorScheme="green" size="lg">
            방문 예약하기
          </Button>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Index;
