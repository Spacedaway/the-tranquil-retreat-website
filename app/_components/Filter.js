"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function Filter() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathName = usePathname();

	const activeFilter = searchParams.get("capacity") ?? "all";

	const handleFilter = (filter) => {
		const params = new URLSearchParams(searchParams);

		params.set("capacity", filter);
		router.replace(`${pathName}?${params.toString()}`, { scroll: false });
	};

	return (
		<div className="border border-primary-800 flex">
			<Button
				activeFilter={activeFilter}
				handleFilter={handleFilter}
				filter="all"
			>
				All Hotels
			</Button>
			<Button
				filter="small"
				activeFilter={activeFilter}
				handleFilter={handleFilter}
			>
				2&mdash; 3 guests
			</Button>
			<Button
				activeFilter={activeFilter}
				handleFilter={handleFilter}
				filter="medium"
			>
				4&mdash; 7 guests
			</Button>
			<Button
				filter="large"
				activeFilter={activeFilter}
				handleFilter={handleFilter}
			>
				8&mdash; 12 guests
			</Button>
		</div>
	);
}

function Button({ children, activeFilter, handleFilter, filter }) {
	return (
		<button
			className={`px-5 py-2 hover:bg-primary-700 ${
				activeFilter === filter && "bg-primary-700 text-primary-50"
			}`}
			onClick={() => handleFilter(filter)}
		>
			{children}
		</button>
	);
}
