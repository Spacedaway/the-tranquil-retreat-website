import HotelCard from "../_components/HotelCard";
import { getHotels } from "../_lib/data-service";

export const metadata = {
	title: "Hotels",
};

export default async function Page() {
	// CHANGE
	const hotels = await getHotels();

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

			{hotels.length > 0 && (
				<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
					{hotels.map((hotel) => (
						<HotelCard hotel={hotel} key={hotel.id} />
					))}
				</div>
			)}
		</div>
	);
}