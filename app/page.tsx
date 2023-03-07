"use client";

import { MapIcon, XMarkIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import React, { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import Model from "@components/Model";
import Rig from "@components/Rig";
import Image from "next/image";
import Link from "next/link";
import { SEO_DESCRIPTION } from "@lib/constants";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import TwitterIcon from "../icons/TwitterIcon";
import { createPortal } from "react-dom";

export default function Home() {
    return (
        <>
            <Canvas camera={{ position: [0, -10, 65], fov: 50 }} dpr={[1, 2]}>
                <pointLight
                    position={[100, 100, 100]}
                    intensity={0.8}
                    color="#c3af6c"
                />
                <hemisphereLight
                    color="#ffffff"
                    groundColor="#c3af6c"
                    position={[-7, 25, 13]}
                    intensity={0.85}
                />
                <Suspense fallback={null}>
                    <group position={[0, 10, 0]}>
                        <Rig>
                            <Model url="/compressed.glb" />
                        </Rig>

                        <ContactShadows
                            rotation-x={Math.PI / 2}
                            position={[0, -35, 0]}
                            opacity={0.25}
                            width={100}
                            height={100}
                            blur={2}
                            far={50}
                        />
                    </group>
                </Suspense>
            </Canvas>

            <div className="absolute top-0 left-0 w-full flex items-start justify-between p-4 md:p-10">
                <Link
                    href="/"
                    className="relative w-[100px] h-[105.86px] md:w-[160px] md:h-[169.4px]"
                >
                    <Image
                        src="/logo.png"
                        alt="Jumeira"
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </Link>

                <ContactUs />
            </div>

            <div className="absolute bottom-0 container flex flex-col p-4 md:p-10 left-1/2 -translate-x-1/2 w-full">
                <h2
                    className="text-md md:text-lg text-white tracking-normal"
                    style={{
                        textShadow: "0 0px 2px black",
                    }}
                >
                    {SEO_DESCRIPTION}
                </h2>

                <div className="mx-auto mt-5">
                    <SocialMedia />
                </div>
            </div>
        </>
    );
}

function SocialMedia() {
    const links = useMemo(
        () => [
            {
                title: "Facebook",
                href: "https://www.facebook.com/jumeirauniversity",
                target: "_blank",
                icon: (
                    <div className="bg-white rounded-lg overflow-hidden">
                        <FacebookIcon className="text-[#c3af6c] w-7 h-7 rouned-xl" />
                    </div>
                ),
            },
            {
                title: "Twitter",
                href: "https://twitter.com/JumeiraUni",
                target: "_blank",
                icon: (
                    <div className="bg-white rounded-lg overflow-hidden">
                        <TwitterIcon className="text-[#c3af6c] w-7 h-7 rouned-xl" />
                    </div>
                ),
            },
            {
                title: "Linked In",
                href: "https://www.linkedin.com/company/jumeira-university/",
                target: "_blank",
                icon: (
                    <div className="bg-white rounded-lg overflow-hidden">
                        <LinkedinIcon className="text-[#c3af6c] w-7 h-7 rouned-xl" />
                    </div>
                ),
            },
            {
                title: "Instagram",
                href: "https://www.instagram.com/jumeirauni/",
                target: "_blank",
                icon: (
                    <div className="bg-white rounded-lg overflow-hidden">
                        <InstagramIcon className="text-[#c3af6c] w-7 h-7" />
                    </div>
                ),
            },
            {
                title: "Email Address",
                href: "mailto: info@ju.ac.ae",
                target: "_blank",
                icon: (
                    <div className="rounded-lg overflow-hidden w-7 h-7 bg-[#c3af6c] flex">
                        <EnvelopeIcon className="w-6 h-6 rouned-xl m-auto text-white" />
                    </div>
                ),
            },
        ],
        []
    );

    return (
        <div className="flex gap-4">
            {links.map((link, i) => (
                <a key={i} href={link.href}>
                    {link.icon}
                </a>
            ))}

            <Map />
        </div>
    );
}

function Map() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div>
                <button
                    onClick={() => setOpen(true)}
                    className="rounded-lg overflow-hidden w-7 h-7 bg-[#c3af6c] flex"
                >
                    <MapIcon className="w-6 h-6 rouned-xl m-auto text-white" />
                </button>
            </div>

            {open &&
                createPortal(
                    <div
                        className="absolute top-0 left-0 z-10 flex w-full h-full bg-black bg-opacity-25 overflow-y-auto"
                        onClick={() => setOpen(false)}
                    >
                        <div className="relative bg-white rounded-lg overflow-hidden m-auto max-w-full w-full h-screen md:w-[800px] md:h-[700px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.691780178394!2d55.255038600000006!3d25.146109199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69093cf1905d%3A0xc204395cca339c7!2zSnVtZWlyYSBVbml2ZXJzaXR5INis2KfZhdi52Kkg2KzZhdmK2LHYpw!5e0!3m2!1sen!2sae!4v1678172659679!5m2!1sen!2sae"
                                className="rounded-lg overflow-hidden border-none w-full h-full"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>

                            <div className="absolute top-4 right-4">
                                <button
                                    type="button"
                                    className="text-black border bg-white  border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center"
                                >
                                    <XMarkIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}

function ContactUs() {
    return (
        <div>
            {/* <button className="text-white bg-[#c3af6c] hover:bg-[#c3af6c]/90 focus:ring-4 focus:outline-none focus:ring-[#c3af6c]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#c3af6c]/55 mr-2 mb-2">
                <EnvelopeIcon className="mr-2 h-5 w-5" />
                Contact Us
            </button> */}
            <a
                href="mailto: info@ju.ac.ae"
                className="text-white bg-[#c3af6c] hover:bg-[#c3af6c]/90 focus:ring-4 focus:outline-none focus:ring-[#c3af6c]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#c3af6c]/55 mr-2 mb-2"
            >
                <EnvelopeIcon className="mr-2 h-5 w-5" />
                Contact Us
            </a>
        </div>
    );
}
