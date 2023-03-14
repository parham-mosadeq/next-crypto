import { Box, Text, Button } from '@chakra-ui/react';

const Paginate = ({
  dispatch,
  handleNextPage,
  handlePrevPage,
  currentPage,
}) => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center'>
      <Button onClick={() => handlePrevPage()}>prev</Button>
      {/* <Button onClick={() => dispatch(handlePrevPage())}>prev</Button> */}
      <Text as='p' textAlign='center' mx={2}>
        {currentPage <= 9 ? currentPage : (currentPage = 10)}
      </Text>
      <Button onClick={() => handleNextPage()}>next</Button>
      {/* <Button onClick={() => dispatch(handleNextPage())}>next</Button> */}
    </Box>
  );
};

export default Paginate;
