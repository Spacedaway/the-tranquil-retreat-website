import { getBooking, getHotel } from "../../../../_lib/data-service";
import { DeleteReservationForm } from "../../../../_components/DeleteReservationForm";

export async function generateMetadata({ params }) {
	const booking = await getBooking(params.id);

	return {
		title: `Edit Reservation ${booking.id}`,
	};
}

export default async function Page({ params }) {
	const bookingId = params.id;
	const reservation = await getBooking(bookingId);
	const { hotelId } = reservation;
	const hotel = await getHotel(hotelId);
	const { maxCapacity } = hotel;

	return (
		<div>
			<h2 className="font-semibold text-2xl text-accent-400 mb-7">
				Edit Reservation #{bookingId}
			</h2>

			<DeleteReservationForm maxCapacity={maxCapacity} bookingId={bookingId} />
		</div>
	);
}
