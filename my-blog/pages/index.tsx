import { useState } from "react";
import { Box, Flex, Heading, Text, Input, Button, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { blogData } from "../data/blogData";
import Pagination from "../components/Pagination";

const POSTS_PER_PAGE = 6;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogData.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const displayedPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <Box bg="white" minHeight="100vh">
      <Flex
        as="header"
        align="center"
        justify="space-between"
        p={4}
        borderBottom="1px solid #454545"
        width="100%" // Fill the width of the viewport
        height="83px"
        gap={0}
        borderTop="1px solid #454545"
        borderLeft="0"
        borderRight="0"
      >
        <Heading size="md" fontFamily="Georgia, 'Times New Roman', Times, serif" fontWeight="bold">
          Blog Posts
        </Heading>
        <Flex align="center">
          <Input
            placeholder="Search"
            mr={4}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button colorScheme="blue">Search</Button>
        </Flex>
      </Flex>

      <Grid
        templateColumns="repeat(3, 337px)" // Fixed width for each column to match Figma
        gap="206px" // Horizontal gap between columns (left of second box - left of first box)
        p="64px" // Padding to match the left position of the first box
        gridTemplateRows="387px" // Fixed height for each row to match Figma
      >
        {displayedPosts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <Box
              bg="#D9D9D9"
              color="black"
              p={6}
              borderRadius={8}
              border="1px solid #000000"
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              width="337px" // Fixed width for consistency
              height="387px" // Fixed height for consistency
            >
              <Heading size="md" mb={2}>
                {post.title}
              </Heading>
              <Text mb={2}>{post.date}</Text>
              <Text noOfLines={3}>{post.excerpt}</Text>
            </Box>
          </Link>
        ))}
      </Grid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Box
        as="footer"
        bg="#D9D9D9"
        p={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading size="md">Blog Posts</Heading>
        <Text>Copyright © 2024 BlogPost</Text>
      </Box>
    </Box>
  );
}
