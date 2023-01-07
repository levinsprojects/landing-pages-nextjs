import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import md from 'markdown-it';
import matter from "gray-matter";
import Image from 'next/image';

interface BlogMeta {
    title: string,
    createdAt: string,
    category: string,
    bannerImage: string,
}

interface Blog extends BlogMeta{
    content : string;
};

const blogsDirectory = path.join(process.cwd(), '/data/blogs');

export const getStaticPaths: GetStaticPaths = async () => {
    const filenames = await fs.readdirSync(blogsDirectory);

    return {
        paths: filenames.map((filename) => ({
            params: { slug: filename.replace('.md', '') },
        })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps<{ data: Blog }> = async (
    context
) => {
    const { params } = context;

    if (!params) {
        return {
            notFound: true,
        };
    }

    try {
        const fileName = fs.readFileSync(
            blogsDirectory + `/${params.slug}.md`,
            'utf8'
        );
        const { data: frontmatter, content } = matter(fileName);
        console.log("====>matter(fileName)", matter(fileName));
        const objectData = {
            ...frontmatter as BlogMeta,
            content
        }

        return {
            props: { data: objectData },
        };
    } catch (e) {
        return {
            notFound: true,
        };
    }
};

const Page = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {
        title,
        createdAt,
        category,
        content,
        bannerImage,
     } = data;

    console.log("====>data", data);

    return (
        <section className="py-20">
            <article className="container">
                <header className="max-w-3xl mx-auto pt-16 pb-10 md:text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h1>
                    <div id="meta" className="mt-5 font-medium text-sm text-slate-500"><time>{createdAt}</time> <span className="mx-4 text-[0.5rem] text-slate-300">●</span> <span>{category}</span></div>
                </header>
                <div className="max-w-5xl mx-auto mb-16">
                    <Image alt={title} src={`/blogs/${bannerImage}`} blurDataURL={`/_next/image?url=${bannerImage}&w=16&q=1`} height="600" width="1024" className="w-full h-[600px] object-cover rounded-xl shadow-xl" loading="lazy" decoding="async" />
                </div>
                <div className="prose prose-blue max-w-3xl mx-auto mt-10" dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
            </article>
        </section>
    );
};

export default Page;
