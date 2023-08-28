import React, { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import {
  Box,
  Button,
  HStack,
  Image,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import Loding from "./Loding";
import ErrorComponent from "./ErrorComponent";

function Coins() {
  const [coindata, setcoindata] = useState([]);
  const [loder, setloder] = useState(true);
  const [errormsg, seterromsg] = useState(false);

  const [CurrencyValue, SetCurrencyValue] = useState("inr");
  const [changepage, Setchangepage] = useState(1);

  const page = (value) => {
    Setchangepage(value);
  };

  const currencySymbol =
    CurrencyValue === "inr" ? "₹" : CurrencyValue === "eur" ? "€" : "$";

  const CurrencyChange = (value) => {
    SetCurrencyValue(value);
  };
  const btnarray = new Array(130).fill(1);
  useEffect(() => {
    const fetchcoins = async () => {
      try {
        const getcoinsdata = await axios.get(
          `${server}/coins/markets?vs_currency=${CurrencyValue}&per_page=100&page=${changepage}`
        );
        const jsoncoins = getcoinsdata.data;
        setcoindata(jsoncoins);

        setloder(false);
      } catch (error) {
        seterromsg(true);
      }
    };
    fetchcoins();
  }, [CurrencyValue, page]);

  if (errormsg) return <ErrorComponent />;

  return (
    <>
      <RadioGroup value={CurrencyValue} onChange={CurrencyChange}>
        <Radio value="INR">INR </Radio>
        <Radio value="USD">USD </Radio>
        <Radio value="eur">EURO </Radio>
      </RadioGroup>

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
                key={i.id}
                name={i.name}
                current_price={i.current_price}
                currencySymbol={currencySymbol}
              />
            );
          })
        )}
      </Box>
      <HStack overflowX={"auto"} w={"full"} m={"15px"}>
        {btnarray.map((value, index) => {
          return (
            <Button
              key={index}
              onClick={() => page(index + 1)}
              bgColor={"blackAlpha.900"}
              color={"white"}
            >
              {index + 1}
            </Button>
          );
        })}
      </HStack>
    </>
  );
}

const Exchangedata = ({ name, image, current_price, currencySymbol }) => (
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
      <Image
        src={image}
        boxSize="100px"
        borderRadius="50%"
        alt={name}
        marginRight="10px"
      />
      <Box>
        <Text fontWeight="bold">{name}</Text>
        <Text>{`${currencySymbol} ${current_price}`}</Text>
      </Box>
    </Box>
  </>
);
export default Coins;
