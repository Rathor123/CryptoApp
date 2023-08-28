import { Box, Heading, Text, keyframes } from "@chakra-ui/react";
import React from "react";
import background from "../assests/background.gif";

const MyAnimation = keyframes`
0%,40%,100% {
  transform: translateY(0)
}
20% {
  transform: translateY(-20px)
}
  `;

function Home() {
  const NewAnimation = `${MyAnimation} infinite 2s`;
  return (
    <Box
      h={"80vh"}
      backgroundImage={`url(${background})`}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <Box w={"40vw"} position={"relative"} m={"0 0 0 20px"} top={"100px"}>
        <Heading as="h2" fontSize={"5rem"} animation={NewAnimation}>
          Rajesh Rathor
        </Heading>
        <Text p={"20px 0 0 0"} w={"full"}>
          "Diving into the blockchain abyss, crypto reshapes finance's future."
          "Digital gold's allure grows as crypto transcends traditional
          markets."
        </Text>
      </Box>
    </Box>
  );
}

export default Home;
