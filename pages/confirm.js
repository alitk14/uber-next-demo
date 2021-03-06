import React from "react";
import tw from "tailwind-styled-components";
import Map from "./component/Map";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RideSelector from "./component/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0]);

  const getPickUpCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWxpdDE0IiwiYSI6ImNsMDd1ZmQ1cDA1czczamxmeWNxYWFwOHIifQ.LuqfdsSH3xezh8VVcDcptQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWxpdDE0IiwiYSI6ImNsMDd1ZmQ1cDA1czczamxmeWNxYWFwOHIifQ.LuqfdsSH3xezh8VVcDcptQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickUpCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search" >
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />

        <ConfirmButtonCotainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonCotainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`;

const ConfirmButtonCotainer = tw.div`
border-t-2 
`;

const Wrapper = tw.div`
flex flex-col h-screen
`;

const RideContainer = tw.div`
 flex-1 flex flex-col h-1/2
`;

const ButtonContainer = tw.div `
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer`
const BackButton = tw.img `
h-full object-contain
`