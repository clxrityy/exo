import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./Theme";
import { Suspense } from "react";
import { Button } from "../ui/button";

export async function CmsNavigation() {
    return (
        <div className="w-screen flex justify-between px-2 py-2">
            <Link href={"/"}>
            <Button variant={"ghost"} size={"icon"}>
                <ArrowLeft />
                <span className="sr-only">
                    Go back to the main site
                </span>
            </Button>
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
                <ThemeToggle />
            </Suspense>
        </div>
    )
}