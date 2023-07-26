'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {

    let router = useRouter();

    router.push('/import');

    return (
        <h1>Redirecting...</h1>
    )
}