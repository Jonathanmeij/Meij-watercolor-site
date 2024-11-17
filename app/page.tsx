/* eslint-disable @next/next/no-img-element */
// const options = { next: { revalidate: 3600 } };
import { Container } from "./components/container";
import Navbar from "./components/navbar";

export default async function IndexPage() {
    return (
        <main>
            <div className="relative">
                <Navbar className="absolute top-0 z-50" />
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 space-y-2 -translate-y-1/2
 z-10"
                >
                    <h1 className="text-4xl font-bold text-white max-w-md text-center text-balance ">
                        Huisportretten en uitgeprinte tekeningen
                    </h1>
                    <p className="text-white text-center text-lg">
                        Waterverf en digitale illustraties door Jaap
                    </p>
                </div>
                <div className="header-mask">
                    <img
                        alt="Watercolor painting of a bridge"
                        src={"/images/headerPicture.png"}
                        className="object-cover w-full h-[30rem] scale-150 sm:scale-100"
                    />
                    <div className="absolute top-0 bg-gradient-to-b to-black/50  via-30% via-black/50 from-black/80 h-full w-full"></div>
                </div>
            </div>
            <Container className="">
                <h1 className="text-4xl font-bold mb-8">Posts</h1>
            </Container>
        </main>
    );
}
