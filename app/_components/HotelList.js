import { unstable_noStore } from "next/cache";
import { getHotels } from "../_lib/data-service";
import HotelCard from "./HotelCard";

export async function HotelList({ filter }) {
	// unstable_noStore();

	const hotels = await getHotels();

	if (hotels.length <= 0) return null;

	let displayedHotels;

	if (filter === "all") displayedHotels = hotels;

	if (filter === "small")
		displayedHotels = hotels.filter((hotel) => hotel.maxCapacity <= 3);

	if (filter === "medium")
		displayedHotels = hotels.filter(
			(hotel) => hotel.maxCapacity >= 4 && hotel.maxCapacity <= 7
		);

	if (filter === "large")
		displayedHotels = hotels.filter((hotel) => hotel.maxCapacity >= 8);

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
			{displayedHotels.map((hotel) => (
				<HotelCard hotel={hotel} key={hotel.id} />
			))}
		</div>
	);
}
