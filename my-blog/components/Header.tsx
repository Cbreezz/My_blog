import { Flex, Box, Heading, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function Header() {
  return (
    <Flex
      bg="#D9D9D9" // Background color similar to the image
      p={4}
      align="center"
      justify="space-between"
    >
      {/* Left Section: Logo and Title */}
      <Flex align="center">
        <Box mr={3}>
          {/* Placeholder for logo */}
          <Box bg="black" h="40px" w="40px" borderRadius="md"></Box>
        </Box>
        <Box>
          <Heading as="h1" size="lg" fontFamily="cursive" mb={-1}>
            Blog
          </Heading>
          <Box fontSize="sm">Posts</Box>
        </Box>
      </Flex>

      {/* Center Section: Navigation */}
      <Box>
        <Heading as="h3" size="md" fontWeight="normal">
          Blogs
        </Heading>
      </Box>

      {/* Right Section: Search and Button */}
      <Flex align="center">
        <InputGroup size="md" mr={3}>
          <Input placeholder="Text" borderColor="black" />
          <InputRightElement pointerEvents="none">
            <SearchIcon color="black" />
          </InputRightElement>
        </InputGroup>
        <Button bg="#A9A9A9" color="white" _hover={{ bg: "#8C8C8C" }}>
          Create Blog Post
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
