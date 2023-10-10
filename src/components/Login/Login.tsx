import { Avatar, Button } from "@mui/material";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
                <Button variant="contained" color="error" onClick={() => signOut()}>Sign out</Button>
			</>
		);
	}
	return (
		<>
			Please login <br />
			<Button variant={'contained'} color='success' onClick={() => signIn()}>Sign in</Button>
		</>
	);
};

export default Login;
