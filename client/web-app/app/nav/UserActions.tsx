'use client';
import { Dropdown } from "flowbite-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiCog, HiUser } from "react-icons/hi";

type Props = {
  user: Partial<User>
}

export default function UserActions({ user }: Props) {
  return (
    <Dropdown inline label={`Welcome ${user.name}`}>
      <Dropdown.Item icon={HiUser}>
        <Link href="/">
          My Auctions
        </Link>
      </Dropdown.Item>

      <Dropdown.Item icon={AiFillTrophy}>
        <Link href="/">
          Auctions wons
        </Link>
      </Dropdown.Item>
     <Dropdown.Item icon={AiFillCar}>
        <Link href="/">
         Sell my car
        </Link>
      </Dropdown.Item>
      <Dropdown.Item icon={HiCog}>
        <Link href="/session">
          Session (dev only)
        </Link>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item icon={AiOutlineLogout} onClick={()=>signOut({callbackUrl:'/'})}>
          Log out
      </Dropdown.Item>
      </Dropdown>
  )
}
