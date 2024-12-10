import { auth } from "../_lib/auth";

export const metadata = {
	title: "Account",
};

async function AccountPage() {
	const session = await auth();
	console.log("🚀 ~ AccountPage ~ session:", session);
	const user = session?.user?.name.split(" ")[0];

	return (
		<div>
			<h2 className="font-semibold text-2xl text-accent-400 mb-7">
				Welcome, {user}!
			</h2>
		</div>
	);
}
export default AccountPage;
