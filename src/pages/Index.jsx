import { Box, Container, Heading, SimpleGrid, Text, Image, Button } from "@chakra-ui/react";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="2xl" textAlign="center" my={10}>
        ChemiCo Store
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} p={5} shadow="md" borderWidth="1px">
            <Image src={product.image} alt={product.name} borderRadius="md" />
            <Heading as="h3" size="lg" mt={4}>
              {product.name}
            </Heading>
            <Text mt={2}>{product.description}</Text>
            <Text fontSize="xl" fontWeight="bold" my={2}>
              ${product.price}
            </Text>
            <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid">
              Add to Cart
            </Button>
            <Button leftIcon={<FaInfoCircle />} colorScheme="gray" variant="outline" ml={2}>
              Details
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

const products = [
  {
    id: 1,
    name: "Sodium Chloride",
    description: "High purity, food grade salt, 99.9% NaCl.",
    price: "5.99",
    image: "https://images.unsplash.com/photo-1697282354839-66aaa7d3ca33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2RpdW0lMjBjaGxvcmlkZXxlbnwwfHx8fDE3MTM4OTg1Njh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Sulfuric Acid",
    description: "Concentrated sulfuric acid, 98% H2SO4, for industrial use.",
    price: "15.99",
    image: "https://images.unsplash.com/photo-1650279836061-e37b8bea9a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdWxmdXJpYyUyMGFjaWR8ZW58MHx8fHwxNzEzODk4NTY5fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Acetone",
    description: "Pure acetone, suitable for laboratory and industrial use.",
    price: "8.99",
    image: "https://images.unsplash.com/photo-1634737377397-9a4827354f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhY2V0b25lfGVufDB8fHx8MTcxMzg5ODU2OXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

export default Index;
