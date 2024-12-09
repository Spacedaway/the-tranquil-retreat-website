import { Suspense } from "react";
import { Hotel } from "../../_components/Hotel";
import { Reservation } from "../../_components/Reservation";
import { Spinner } from "../../_components/Spinner";
import { getHotel } from "../../_lib/data-service";

export async function generateMetadata({ params }) {
	const hotel = await getHotel(params.hotelId);

	return {
		title: `Hotel ${hotel.name}`,
	};
}

export default async function Page({ params }) {
	const hotel = await getHotel(params.hotelId);
	const { name } = hotel;

	return (
		<div className="max-w-6xl mx-auto mt-8">
			<Hotel hotel={hotel} />
			<div>
				<h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
					Reserve {name} today. Pay on arrival.
				</h2>
				<Suspense fallback={<Spinner />}>
					<Reservation hotel={hotel} />
				</Suspense>
			</div>
		</div>
	);
}
