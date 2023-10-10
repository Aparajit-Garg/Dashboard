import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Dashboard from "./dashboard";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import Login from "@/components/Login/Login";
import { useSession } from "next-auth/react";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const {data: session} = useSession()
	return (
		<>
			<Head>
				<title> Dashboard </title>
				<meta name="description" content="Dashboard" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.main}`}>
                <Header />
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
