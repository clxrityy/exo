import { ThemeToggle } from "./Theme";

export function Topbar() {
    return (
        <div className="w-screen flex justify-end absolute px-2 py-2">
            <ThemeToggle />
        </div>
    )
}