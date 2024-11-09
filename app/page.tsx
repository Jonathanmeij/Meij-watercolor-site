/* eslint-disable @next/next/no-img-element */
// const options = { next: { revalidate: 3600 } };
import Navbar from "./components/navbar";

export default async function IndexPage() {
    return (
        <main>
            <div className="relative">
                <Navbar className="absolute top-0 z-50" />
                {/* <div className="h-[30rem] bg-black bg-opacity-50 w-full absolute" /> */}
                <img
                    alt="Watercolor painting of a bridge"
                    src={"/images/headerPicture.png"}
                    className="object-cover w-full h-[30rem] header-mask brightness-50 "
                />
            </div>
            <h1 className="text-4xl font-bold mb-8">Posts</h1>
        </main>
    );
}
