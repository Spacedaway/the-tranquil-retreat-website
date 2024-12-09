import { getBookedDatesByHotelId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

export async function Reservation({ hotel }) {
	const [settings, bookedDates] = await Promise.all([
		getSettings(),
		getBookedDatesByHotelId(hotel.id),
	]);

	return (
		<div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
			<DateSelector
				settings={settings}
				bookedDates={bookedDates}
				hotel={hotel}
			/>
			<ReservationForm hotel={hotel} />
		</div>
	);
}
