import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import HomePage from "./home";
import { MessengerChat } from "react-messenger-chat-plugin";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  
  return (
    <>
      <Head>
        
        <title>Dreamers University</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MessengerChat pageId="1552348765040416" />
      <HomePage></HomePage>

      
    </>
  );
}
