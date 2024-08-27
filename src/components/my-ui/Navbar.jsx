/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dfsZhNKVQ3G
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-background border-b">
            <div className="flex items-center justify-between h-16 px-4 md:px-6">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <MountainIcon className="w-6 h-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                        Home
                    </Link>
                    <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                        Dashboard
                    </Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                        Products
                    </Link>
                    <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground" prefetch={false}>
                        Contact
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <MenuIcon className="w-6 h-6" />
                            <span className="sr-only">Toggle navigation</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="md:hidden">
                        <div className="grid gap-4 p-4">
                            <Link
                                href="#"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                                prefetch={false}
                            >
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                                prefetch={false}
                            >
                                About
                            </Link>
                            <Link
                                href="#"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                                prefetch={false}
                            >
                                Products
                            </Link>
                            <Link
                                href="#"
                                className="text-sm font-medium text-muted-foreground hover:text-foreground"
                                prefetch={false}
                            >
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}