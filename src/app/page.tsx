"use client";

import { useRouter } from "next/navigation";

export default function Page() {
	let router = useRouter();

	router.push("/import");

	return <h1>Redirecting...</h1>;
}
