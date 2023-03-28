import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  StatArrow,
  Stat,
} from "@chakra-ui/react";
import { useDetails } from "../../Context/DetailsContext";

function TablePage() {
  const { currency } = useDetails();

  return (
    <div className="w-full px-4 py-3">
      <Stat>
        <TableContainer>
          <Table variant="striped" colorScheme="teal" size="lg">
            <TableCaption>CryptoMarket in INR</TableCaption>
            <Thead>
              <Tr>
                <Th>NAME</Th>
                <Th>ID</Th>
                <Th isNumeric>Current Price</Th>
                <Th isNumeric>Market Cap</Th>
                <Th isNumeric>Change(24hr)</Th>
              </Tr>
            </Thead>

            <Tbody>
              {currency.map(
                (
                  name,
                  id,
                  current_price,
                  price_change_24h,
                  market_cap,
                  image
                ) => (
                  <Tr key={id}>
                    <Td className="flex items-center">
                      <img
                        src={currency[id].image}
                        alt=""
                        className="h-14 w-14"
                      />
                      <p className="mx-3">{currency[id].name}</p>
                    </Td>
                    <Td>{currency[id].id}</Td>
                    <Td isNumeric>{currency[id].current_price} ₹</Td>
                    <Td isNumeric>{currency[id].market_cap}</Td>
                    <Td
                      isNumeric
                      className={
                        currency[id].price_change_24h < 0
                          ? "text-red-600"
                          : "text-green-500"
                      }>
                      {currency[id].price_change_24h < 0 ? (
                        <StatArrow type="decrease" />
                      ) : (
                        <StatArrow type="increase" />
                      )}
                      {currency[id].price_change_24h}
                    </Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Stat>
    </div>
  );
}

export default TablePage;
