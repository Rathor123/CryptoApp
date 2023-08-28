import { Box, Text } from "@chakra-ui/react";
import React from "react";

function ErrorComponent() {
  return (
    <Box
      color={"red.700"}
      fontSize={"3rem"}
      alignItems={"center"}
      textAlign={"center"}
      w={"50vw"}
      m={"auto"}
      textTransform={"capitalize"}
    >
      " ❌Oops! An error occurred while fetching the data. Please try again
      later. "
    </Box>
  );
}

export default ErrorComponent;
