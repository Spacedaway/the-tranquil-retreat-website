"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}

export async function updateGuest(formData) {
	const alphanumericRegex = /^[a-zA-Z0-9]{6,12}$/;
	const session = await auth();

	if (!session) throw new Error("You must be logged in");

	const nationalID = formData.get("nationalID");
	const [nationality, countryFlag] = formData.get("nationality").split("%");

	if (!alphanumericRegex.test(nationalID))
		throw new Error(
			"National ID must be alphanumeric and between 6 and 12 characters"
		);

	const updateData = { nationality, countryFlag, nationalID };

	const { data, error } = await supabase
		.from("guests")
		.update(updateData)
		.eq("id", session.user.guestId)
		.select()
		.single();

	if (error) throw new Error("Guest could not be updated");

	revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
	const session = await auth();

	if (!session) throw new Error("You must be logged in");

	const guestBookings = await getBookings(session.user.guestId);
	const bookingExists = guestBookings.some(
		(booking) => booking.id === bookingId
	);

	if (!bookingExists) throw new Error("Reservation does not exist");

	const { data, error } = await supabase
		.from("bookings")
		.delete()
		.eq("id", bookingId)
		.single();

	if (error) throw new Error("Reservation could not be deleted");

	revalidatePath("/account/reservations");
}
