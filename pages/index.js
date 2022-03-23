import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";
import Map from "./component/Map";
import Link from "next/link";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect (()=>{
    return onAuthStateChanged (auth ,user => {
      if (user) {
        setUser({
        name : user.displayName,
        photoUrl : user.photoURL,
        })
      } else {
        setUser (null)
        router.push ('/login')
      }
    })
  },[])

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)}
            />  </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtunImage
                href=""
                src="https://i.ibb.co/cyvcpfF/uberx.png"
              />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtunImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtunImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>where to</InputButton>
      </ActionItems>
    </Wrapper>
  );
}
const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-5
`;

const Header = tw.div`
flex justify-between items-center 
`;


const UberLogo = tw.img`
 h-28
`;

const Profile = tw.div`
flex items-center

`;
const Name = tw.div`
mr-5 w-25 text-xl 
`;
const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-400 p-px cursor-pointer 
`;

const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-2 h-32 items-center justify-center rounded-lg trasnform hover:scale-105 transition text-xl
`;

const ActionButtunImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;