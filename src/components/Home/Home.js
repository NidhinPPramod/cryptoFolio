import React from "react";
import "./Home.css";
import { Bars3Icon } from "@heroicons/react/24/solid";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  Select,
  
} from "@chakra-ui/react";
import { useDetails } from "../../Context/DetailsContext";

function Home({ table }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { currency, getCoinDetails, coin } = useDetails();


  return (
    <div className="home-page">
      <div className="navbar w-100 py-4 px-4 border rounded-b-xl drop-shadow-xl flex items-center">
        <Bars3Icon className="h-8 w-8 hover:scale-105" onClick={onOpen} />
        <div className="flex justify-center w-full text-white">
          <p className="text-5xl">CryptoFolio</p>
        </div>
      </div>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Coin Details</DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col  min-h-full items-center ">
              <div className="overflow-auto max-h-96 my-3">
                <Select
                  placeholder="Select Coin"
                  onChange={(e) => getCoinDetails(e.target.value)}>
                  {currency.map((name, id) => (
                    <option key={id} value={currency[id].id}>
                      {currency[id].name}
                    </option>
                  ))}
                </Select>
              </div>
              {coin ? (
                <div className="min-h-32 w-full bg-slate-100 drop-shadow-xl">
                  <div className="flex flex-col justify-center items-center my-3">
                    <img className="h-10 w-10" src={coin?.image?.thumb} alt="" />
                    <p>{coin?.name}</p>
                  </div>
                  <div className="flex justify-center">
                    <h1 className="font-mono text-lg">GLOBAL RANK:{coin?.market_cap_rank}</h1>
                  </div>
                  <div className="py-4 my-2 px-3 overflow-auto max-h-96">
                    {coin?.description?.en}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {table}
    </div>
  );
}

export default Home;
