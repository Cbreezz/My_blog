import { Box, Button, Flex } from "@chakra-ui/react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageButtons = () => {
    const pageButtons = [];

    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <Button
          key={i}
          colorScheme={currentPage === i ? "blue" : "gray"}
          onClick={() => onPageChange(i)}
          mr={2}
        >
          {i}
        </Button>
      );
    }

    return pageButtons;
  };

  return (
    <Flex justify="center" mt={8}>
      {renderPageButtons()}
    </Flex>
  );
};

export default Pagination;