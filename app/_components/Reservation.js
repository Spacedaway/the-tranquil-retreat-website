import { auth } from "../_lib/auth";
import { getBookedDatesByHotelId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export async function Reservation({ hotel }) {
	const [settings, bookedDates] = await Promise.all([
		getSettings(),
		getBookedDatesByHotelId(hotel.id),
	]);

	const session = await auth();
	const user = session?.user;

	return (
		<div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
			<DateSelector
				settings={settings}
				bookedDates={bookedDates}
				hotel={hotel}
			/>
			{user ? <ReservationForm hotel={hotel} user={user} /> : <LoginMessage />}
		</div>
	);
}
