/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LPszTZyBwI8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import Link from "next/link"

export default function Component() {
    return (
        <section className="w-full py-12">
            <div className="px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_700px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Discover the perfect products for you
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Explore our wide selection of high-quality products and find the perfect fit for your needs.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="#"
                                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                    <Image
                        src="https://i.ibb.co/9TBbcpp/769.jpg"
                        width="550"
                        height="550"
                        alt="Hero"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                    />
                </div>
            </div>
        </section>
    )
}