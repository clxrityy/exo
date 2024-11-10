"use client";

import { Button } from "@/components/ui/button";

export default function GlobalError({
    error,
    reset
}: {
    error: Error & { digest?: string },
    reset: () => void
}) {
    return (
        <html>
            <head>
                <title>
                    Error
                </title>
            </head>
            <body>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-3xl font-bold">
                        Error
                    </h2>
                    {
                        error && (
                            <pre className="text-red-500">
                                {JSON.stringify(error, null, 2)}
                            </pre>
                        )
                    }
                    <Button onClick={() => reset()}>
                        Try again
                    </Button>
                </div>
            </body>
        </html>
    )
}