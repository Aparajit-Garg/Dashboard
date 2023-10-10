import React, { FC } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import dark from "@/theme/dark";
import light from "@/theme/light";
import Header from "@/components/Header/Header";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
	const [mode, setMode] = React.useState<"light" | "dark">("dark");
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
			},
		}),
		[]
	);

	const darkTheme = React.useMemo(
		() =>
			createTheme({
				...dark,
			}),
		[mode]
	);

	const lightTheme = React.useMemo(
		() =>
			createTheme({
				...light,
			}),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
				<SessionProvider session={session}>
					<CssBaseline />
                    <Header ColorModeContext={ColorModeContext} />
					<Component {...pageProps} />
				</SessionProvider>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
