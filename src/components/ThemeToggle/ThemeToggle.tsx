import { Box, IconButton, useMediaQuery, useTheme } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from "react";

export type ThemeToggleButtonProps = {
    ColorModeContext: React.Context<{ toggleColorMode: () => void; }>
}


const ThemeToggle = (props: ThemeToggleButtonProps) => {

    const mobileCheck = useMediaQuery('(min-width: 500px)');
    const { ColorModeContext = React.createContext({ toggleColorMode: () => {} })} = props;
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				bgcolor: "background.default",
				color: "text.primary",
				borderRadius: 1,
				p: 3,
			}}
		>
			{theme.palette.mode} mode
			<IconButton
				sx={{ ml: 1 }}
				onClick={colorMode.toggleColorMode}
				color="inherit"
			>
				{theme.palette.mode === "dark" ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		</Box>
	);
};

export default ThemeToggle;
