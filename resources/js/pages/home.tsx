import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-black">Welcome to Home Page!</h1>
            </div>
        </>
    );
}
