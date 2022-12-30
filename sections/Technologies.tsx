import Image from "next/image";
import php from "../public/php.webp";
import python from "../public/python.webp";
import nodeJs from "../public/node-js.webp";
import dotnet from "../public/dotnet.webp";
import react from "../public/react.webp";
import angular from "../public/angular.webp";
import vue from "../public/vue.webp";
import nextjs from "../public/nextjs.webp";
import Gatsby from "../public/Gatsby.webp";
import svelte from "../public/svelte.svg";
import wordpress from "../public/wordpress.webp";
import netlify from "../public/netlify.webp";
import ghost from "../public/ghost.webp";
import aws from "../public/aws.webp";
import digitalOcean from "../public/digital-ocean.webp";
import firebase from "../public/firebase.webp";
import Link from "next/link";

const Technologies = () => {
    return (
        <section className="bg-white py-16 md:py-24 border-b border-slate-100">
            <div className="container">
                <div className="max-w-2xl">
                    <h5 className="text-blue-600 font-semibold">Technologies</h5>
                    <h4 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">From PHP to Node.js.</h4>
                    <p className="mt-4 mb-6">We work with all the latest technologies and deliver your project on time. We have skilled
                        developers who are well-versed in a wide range of platforms and frameworks, which makes them
                        the best choice to go with.
                    </p>
                    <Link href="/contact-us" className="font-semibold text-blue-600 hover:text-blue-700">Start Discussion Now <span className="opacity-90 ml-1">→</span></Link>
                </div>
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 md:gap-y-12">
                    <div>
                        <Image alt="PHP Development" src={php} blurDataURL={`/_next/image?url=${php}&w=16&q=1`} height="48" width="91" className="!h-10 w-auto mb-6" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">PHP</h3>
                        <p className="mt-2 text-sm">A popular general-purpose scripting language that is especially suited to web development.</p>
                    </div>
                    <div>
                        <Image alt="Python Development" src={python} blurDataURL={`/_next/image?url=${python}&w=16&q=1`} height="48" width="156" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">Python</h3>
                        <p className="mt-2 text-sm">A programming language that lets you work quickly and integrate systems more effectively.</p>
                    </div>
                    <div>
                        <Image alt="Node.js Development" src={nodeJs} blurDataURL={`/_next/image?url=${nodeJs}&w=16&q=1`} height="48" width="48" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">Node.js</h3>
                        <p className="mt-2 text-sm">A JavaScript runtime built on Chrome's V8 JavaScript engine.</p>
                    </div>
                    <div>
                        <Image alt=".NET Development" src={dotnet} blurDataURL={`/_next/image?url=${dotnet}&w=16&q=1`} height="48" width="48" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">.NET</h3>
                        <p className="mt-2 text-sm">An open source developer platform, created by Microsoft, for building many different types
                            of applications.
                        </p>
                    </div>
                    <div>
                        <Image alt="React js Development" src={react} blurDataURL={`/_next/image?url=${react}&w=16&q=1`} height="48" width="48" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">React</h3>
                        <p className="mt-2 text-sm">A JavaScript library for building user interfaces.</p>
                    </div>
                    <div>
                        <Image alt="Angular js Development" src={angular} blurDataURL={`/_next/image?url=${angular}&w=16&q=1`} height="48" width="48" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">Angular</h3>
                        <p className="mt-2 text-sm">A framework for building single-page client applications using HTML and TypeScript.</p>
                    </div>
                    <div>
                        <Image alt="Vue js Development" src={vue} blurDataURL={`/_next/image?url=${vue}&w=16&q=1`} height="48" width="48" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h4 className="font-semibold">Vue.js</h4>
                        <p className="mt-2 text-sm">An approachable, performant and versatile framework for building web user interfaces.</p>
                    </div>
                    <div>
                        <Image alt="Next js Development" src={nextjs} blurDataURL={`/_next/image?url=${nextjs}&w=16&q=1`} height="48" width="78" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">Next.js</h3>
                        <p className="mt-2 text-sm">A React framework that gives you building blocks to create web applications &amp; static
                            sites.
                        </p>
                    </div>
                    <div>
                        <Image alt="Gatsby js Development" src={Gatsby} blurDataURL={`/_next/image?url=${Gatsby}&w=16&q=1`} height="48" width="48" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">Gatsby</h3>
                        <p className="mt-2 text-sm">A blazing fast modern static site generator based on React.</p>
                    </div>
                    <div>
                        <Image alt="Svelte js Development" src={svelte} blurDataURL={`/_next/image?url=${svelte}&w=16&q=1`} height="48" width="78" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">Svelte</h3>
                        <p className="mt-2 text-sm">A front-end, open-source JavaScript framework with a radical new approach to building user
                            interfaces.
                        </p>
                    </div>
                    <div>
                        <Image alt="WordPress Development" src={wordpress} blurDataURL={`/_next/image?url=${wordpress}&w=16&q=1`} height="48" width="48" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">WordPress</h3>
                        <p className="mt-2 text-sm">A content management system (CMS) written in PHP that uses a MySQL database.</p>
                    </div>
                    <div>
                        <Image alt="Netlify Platform &amp; Netlify CMS Development" src={netlify} blurDataURL={`/_next/image?url=${netlify}&w=16&q=1`} height="48" width="48" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h4 className="font-semibold">Netlify</h4>
                        <p className="mt-2 text-sm">The platform developers love for building highly-performant and dynamic websites,
                            e-commerce stores and web applications.
                        </p>
                    </div>
                    <div>
                        <Image alt="Ghost CMS Development" src={ghost} blurDataURL={`/_next/image?url=${ghost}&w=16&q=1`} height="48" width="131" className="!h-10 w-auto mb-6" loading="lazy" decoding="async" />
                        <h4 className="font-semibold">Ghost CMS</h4>
                        <p className="mt-2 text-sm">A powerful CMS for new-media creators to publish, share, and grow a business around their
                            content.
                        </p>
                    </div>
                    <div>
                        <Image alt="AWS Platform Migration &amp; Development" src={aws} blurDataURL={`/_next/image?url=${aws}&w=16&q=1`} height="48" width="62" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">AWS</h3>
                        <p className="mt-2 text-sm">The world's most comprehensive and broadly adopted cloud platform.</p>
                    </div>
                    <div>
                        <Image alt="Digital Ocean Platform Migration &amp; Development" src={digitalOcean} blurDataURL={`/_next/image?url=${digitalOcean}&w=16&q=1`} height="48" width="64" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h4 className="font-semibold">Digital Ocean</h4>
                        <p className="mt-2 text-sm">A cloud hosting provider that offers cloud computing services to business entities.</p>
                    </div>
                    <div>
                        <Image alt="Firebase Development" src={firebase} blurDataURL={`/_next/image?url=${firebase}&w=16&q=1`} height="50" width="39" className="!h-12 w-auto mb-4" loading="lazy" decoding="async" />
                        <h3 className="font-semibold">Firebase</h3>
                        <p className="mt-2 text-sm">A Backend-as-a-Service that provides variety of tools &amp; services for quality apps.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Technologies;