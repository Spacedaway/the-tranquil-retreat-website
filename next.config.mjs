/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pksarxjxhbyvkfakdvyd.supabase.co",
				pathname: "/storage/v1/object/public/hotel-images/**",
			},
		],
	},
};

export default nextConfig;
