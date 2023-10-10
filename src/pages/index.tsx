import Head from "next/head";
import { Inter } from "next/font/google";
import Dashboard from "./dashboard";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import Login from "@/components/Login/Login";
import { useSession } from "next-auth/react";
import scss from "@/styles/Home.module.scss"
import { FC } from "react";

// const inter = Inter({ subsets: ["latin"] });

const Home: FC = () => {
    const {data: session} = useSession()
	return (
		<>
			<Head>
				<title> Dashboard </title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={scss.main}>
                {
                    session && (
                    <>
                        <SideMenu />
                        <Dashboard />
                    </>
                    )
                }
                <Login />
            </main>
		</>
	);
}

export default Home; 