export async function GET(request, { params }) {
	return Response.json({
		message: "Hello from the account API!",
	});
}
