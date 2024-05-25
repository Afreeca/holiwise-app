"use client";

import constate from "constate";
import { useState } from "react";

const useGlobal = () => {
  const [favourites, setFavourites] = useState([
    {
      id: 1,
      name: "Bali, Indonesia",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhandluggageonly.co.uk%2Fwp-content%2Fuploads%2F2015%2F08%2FIMG_1123.jpg&f=1&nofb=1&ipt=54d863202b16f0749e2dd2a2a14d37069f3ed6d720705475b8e8813699a942e2&ipo=images",
      averageFlightCost: "$600",
      shortRent: "$30 per night",
      foodPrice: "$10 - $20 per meal",
      drinkPrice: "$2 - $5 per drink",
      temperature: "25-30°C (77-86°F) all year round",
      safety: "Generally safe for tourists",
      popularity: "Very popular tourist destination",
      review: "4.5/5",
      partyLife: "Vibrant nightlife scene",
      nature: "Beautiful beaches, lush landscapes",
      holidayType: "Beach holiday, cultural experiences",
    },
  ]);

  const setFavourite = (location) => {
    const item = getLocationById(location.id);
    if (!item) {
      setFavourites((prev) => [...prev, location]); // Add location to favourites
    } else {
      setFavourites((prev) => prev.filter((fav) => fav.id !== location.id)); // Remove location from favourites
    }
  };

  const getLocationById = (id) => {
    return favourites.some((location) => location.id === id);
  };

  return {
    favourites,
    toggleFavourite: setFavourite,
    getFavourite: getLocationById,
  };
};

export const [GlobalContextProvider, useGlobalContext] = constate(useGlobal);
