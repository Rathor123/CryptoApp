import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BounceLoader } from "react-spinners";

function Loding() {
  return (
    <>
      <Flex align="center" justify="center" minHeight="70vh">
        <Box>
          <BounceLoader color="#36d7b7" size={150} />
          <Text textAlign={"center"} m={"10px 0"}>
            Loding...
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default Loding;
