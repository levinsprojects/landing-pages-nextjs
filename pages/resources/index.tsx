import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import ServicesHero from '../../sections/Services-Hero';
import data from "../../data/resources.json";
import SectionWrapper from '../../components/SectionWrapper';
import SectionDetailPanel from '../../components/SectionDetailPanel';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({ blog }: { blog :Blog}) => {

    const bannerImg = `/blogs/${blog.bannerImage}`;
    const blogURL = `/blog/${blog.slug}`;
    const shortDesc = blog.content?.slice(0,140);
    return (
        <div>
            <Link
                href={blogURL}
                className="inline-block bg-slate-100 w-full"
            >
                <Image alt={blog.title} title={blog.title} className="object-cover w-full h-72" width="410" height="288" src={bannerImg} blurDataURL={`/_next/image?url=${bannerImg}&w=16&q=1`} placeholder="blur" />
            </Link>
            <h4 className="font-semibold text-base mt-4">
                <Link
                    href={blogURL}
                    className="hover:text-blue-600"
                >{blog.title}</Link>
            </h4>
            <p className="mt-3 line-clamp-2">{shortDesc}</p>
            <Link
                href={blogURL}
                className="font-semibold text-blue-600 inline-block mt-4"
            >
                Read Blog <span className="opacity-75 ml-2">→</span>
            </Link>
        </div>
    );
};

const Page = ({ blogs }: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <>
            <ServicesHero data={data.hero} />
            <SectionWrapper>
                <>
                    <SectionDetailPanel 
                        className={"text-xl font-bold text-slate-900"}
                        heading="Blog Posts" 
                        content={["Whenever we get free quality time, we share what we have learnt new. You can learn from our experiences and use that knowledge to build something great."]}
                    ></SectionDetailPanel>
                    <div
                        className='mt-10 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 pt-10 text-sm'
                    >
                        {
                            blogs.map((blog,ind)=>{
                                return <BlogCard key={ind} blog={blog}/>
                            })
                        }
                    </div>
                </>
            </SectionWrapper>
        </>
    );
};

interface BlogMeta {
    title: string,
    createdAt: string,
    category: string,
    bannerImage: string,
}

interface Blog extends BlogMeta {
    content: string;
    slug:string;
};

const blogsDirectory = path.join(process.cwd(), '/data/blogs');


export const getStaticProps: GetStaticProps<{ blogs: Blog[] }> = async (
    context
) => {
    try{
        const filenames = await fs.readdirSync(blogsDirectory);

        const blogs = filenames.map((fileName) => {
            const fileNamePath = fs.readFileSync(
                blogsDirectory + `/${fileName}`,
                'utf8'
            );
            const { data: frontmatter, content } = matter(fileNamePath);
            return {
                ...frontmatter,
                content,
                slug: fileName.replace('.md', '')
            } as Blog;
        });
        return {
            props: { blogs },
        };
    }catch(e){
        return {
            notFound: true,
        };
    }
};

export default Page;