/* eslint-disable @next/next/no-img-element */
// const options = { next: { revalidate: 3600 } };
import { Container } from "./components/container";
import Navbar from "./components/navbar";

export default async function IndexPage() {
    return (
        <div>
            <main className="paper-bg min-h-screen h-full header-mask">
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
                <Container className="pb-24">
                    <h1 className="text-4xl font-bold mb-8">Over mij</h1>
                    <p className=" w-96">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                        fugiat iusto fuga praesentium optio, eaque rerum! Provident
                        similique accusantium nemo autem. Veritatis obcaecati tenetur iure
                        eius earum ut molestias architecto voluptate aliquam nihil,
                        eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid.
                        Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
                        laudantium molestias eos sapiente officiis modi at sunt excepturi
                        expedita sint? Sed quibusdam recusandae alias error harum maxime
                        adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
                        Officiis iure rerum voluptates a cumque velit quibusdam sed amet
                        tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat,
                        temporibus enim commodi iusto libero magni deleniti quod quam
                        consequuntur! Commodi minima excepturi repudiandae velit hic
                        maxime doloremque. Quaerat provident commodi consectetur veniam
                        similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                        pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                        excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                        Voluptatem quaerat non architecto ab laudantium modi minima sunt
                        esse temporibus sint culpa, recusandae aliquam numquam totam
                        ratione voluptas quod exercitationem fuga. Possimus quis earum
                        veniam quasi aliquam eligendi, placeat qui corporis!
                    </p>
                </Container>
            </main>
            <Container>
                <h1 className="text-4xl font-bold mb-8">Producten</h1>
                <p className=" w-96">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                    mollitia, molestiae quas vel sint commodi repudiandae consequuntur
                    voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                    fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
                    accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
                    molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
                    nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
                    error repudiandae fuga? Ipsa laudantium molestias eos sapiente
                    officiis modi at sunt excepturi expedita sint? Sed quibusdam
                    recusandae alias error harum maxime adipisci amet laborum.
                    Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
                    cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
                    doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
                    deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
                    velit hic maxime doloremque. Quaerat provident commodi consectetur
                    veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                    pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                    excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                    Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
                    temporibus sint culpa, recusandae aliquam numquam totam ratione
                    voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
                    aliquam eligendi, placeat qui corporis!
                </p>
            </Container>
        </div>
    );
}
