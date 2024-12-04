import { getHotels } from "../_lib/data-service";
import HotelCard from "./HotelCard";

export async function HotelList() {
	const hotels = await getHotels();

	if (hotels.length <= 0) return null;

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
			{hotels.map((hotel) => (
				<HotelCard hotel={hotel} key={hotel.id} />
			))}
		</div>
	);
}
