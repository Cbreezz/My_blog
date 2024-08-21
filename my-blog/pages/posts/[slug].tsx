import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { blogData } from "../../data/blogData";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Box>
        <Heading>Error: Blog post not found</Heading>
      </Box>
    );
  }

  return (
    <Box>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        p={4}
        borderBottom="1px solid #454545"
      >
        <Heading size="md">Blog Posts</Heading>
        <Box>
          <Heading size="md">Search</Heading>
        </Box>
      </Flex>

      <Box p={8}>
        <Heading size="2xl">{post.title}</Heading>
        <Text>{post.date}</Text>
        <Box mt={4}>{post.content}</Box>
        <Button
          colorScheme="blue"
          mt={4}
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </Box>

      <Box
        as="footer"
        bg="#D9D9D9"
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="md">Blog Posts</Heading>
        <Text>Copyright @2024 BlogPost</Text>
      </Box>
    </Box>
  );
}