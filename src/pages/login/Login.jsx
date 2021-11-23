import "./login.css";

export default function Login() {
	return (
		<div className="login">
			<span className="loginTitle">Login</span>
			<form className="loginForm">
				<label>Email</label>
				<input
					placeholder="Enter your email"
					type="text"
					className="loginInput"
				/>
				<label>Password</label>
				<input
					placeholder="Enter your email"
					type="text"
					className="loginInput"
				/>
				<button className="loginButton">Login</button>
			</form>
			<button className="loginRegisterButton">Register</button>
		</div>
	);
}
