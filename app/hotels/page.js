import { Suspense } from "react";
import { HotelList } from "../_components/HotelList";
import Spinner from "../_components/Spinner";

export const metadata = {
	title: "Hotels",
};

export default function Page() {
	return (
		<div>
			<h1 className="text-4xl mb-5 text-accent-400 font-medium">
				Our Luxury Hotels
			</h1>
			<p className="text-primary-200 text-lg mb-10">
				Cozy yet luxurious hotels, located right in the heart of the Italian
				Dolomites. Imagine waking up to beautiful mountain views, spending your
				days exploring the dark forests around, or just relaxing in your private
				hot tub under the stars. Enjoy nature&apos;s beauty in your own little
				home away from home. The perfect spot for a peaceful, calm vacation.
				Welcome to paradise.
			</p>

			<Suspense fallback={<Spinner />}>
				<HotelList />
			</Suspense>
		</div>
	);
}
