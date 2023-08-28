import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Box
        h={"15vh"}
        w={"full"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"row"}
      >
        <HStack
          position={"absolute"}
          right={"10rem"}
          display={"flex"}
          w={"55vw"}
          justifyContent={"space-around"}
        >
          <Link to={"/"} fontSize="24px">
            <Text fontSize={"24px"}>Home</Text>
          </Link>
          <Link to={"/Coins"} fontSize="24px">
            <Text fontSize={"24px"}>Coin</Text>
          </Link>
          <Link to={"/CoinsDeatails"} fontSize="24px">
            <Text fontSize={"24px"}>CoinsDeatails</Text>
          </Link>
        </HStack>
      </Box>
    </>
  );
}

export default Header;
