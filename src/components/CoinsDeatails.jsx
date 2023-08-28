import React, { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import { Box, Image, Text } from "@chakra-ui/react";
import Loding from "./Loding";
import ErrorComponent from "./ErrorComponent";

function CoinsDeatails() {
  const [coindata, setcoindata] = useState([]);
  const [loder, setloder] = useState(true);
  const [errormsg, seterromsg] = useState(false);

  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const getcoinsdata = await axios.get(`${server}/exchanges`);
        const jsoncoins = getcoinsdata.data;
        setcoindata(jsoncoins);

        setloder(false);
      } catch (error) {
        seterromsg(true);
      }
    };
    fetchcoins();
  }, []);

  if (errormsg) return <ErrorComponent />;

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        gap={"15px"}
        alignItems={{ base: "center", md: "start" }}
        justifyContent={"center"}
      >
        {loder ? (
          <Loding />
        ) : (
          coindata.map((i) => {
            return (
              <Exchangedata
                image={i.image}
                rank={i.trust_score_rank}
                key={i.id}
                name={i.name}
                url={i.url}
              />
            );
          })
        )}
      </Box>
    </>
  );
}

const Exchangedata = ({ name, image, url, rank }) => (
  <>
    <Box
      textAlign={"center"}
      padding="5px"
      margin="10px"
      display="flex"
      alignItems="center"
      flexDirection={"column"}
      h={"20vh"}
      w={"15vw"}
    >
      <a href={url} target="_blank">
        <Image
          src={image}
          boxSize="100px"
          borderRadius="50%"
          alt={name}
          marginRight="10px"
        />
        <Box>
          <Text fontWeight="bold">{rank}</Text>
          <Text fontWeight="bold">{name}</Text>
        </Box>
      </a>
    </Box>
  </>
);
export default CoinsDeatails;
