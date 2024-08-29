'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error("Error from /app/error.jsx:", error);
    }, [error]);

    return (
        <main className="flex h-full flex-col items-center justify-center min-h-screen">
            <h2 className="text-center text-3xl font-bold overflow-x-auto">{error?.message || 'Something went wrong!'}</h2>
            <button
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
                onClick={
                    // Attempt to recover by trying to re-render the invoices route
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    );
}