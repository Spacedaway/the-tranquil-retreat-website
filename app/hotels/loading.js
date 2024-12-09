import { Spinner } from "../_components/Spinner";

function Loading() {
	return (
		<div className="grid place-items-center">
			<Spinner />
			<p className="text-xl text-primary-200">Loading Hotels data...</p>
		</div>
	);
}
export default Loading;
