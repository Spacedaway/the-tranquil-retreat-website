import { Josefin_Sans } from "next/font/google";

import "@/app/_styles/globals.css";

import Header from "./_components/Header";

const josefin = Josefin_Sans({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: {
		template: "%s / The Tranquil Retreat",
		default: "Welcome / The Tranquil Retreat",
	},
	description: "The Tranquil Retreat - a place to relax and unwind",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`bg-primary-950 flex flex-col text-primary-100 min-h-svh ${josefin.className}`}
			>
				<Header />
				<div className="flex-1 px-8 py-12">
					<main className="max-w-7xl mx-auto">{children}</main>
				</div>
			</body>
		</html>
	);
}
