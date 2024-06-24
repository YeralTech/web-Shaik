import React from "react";
import { BreadCrumb } from 'primereact/breadcrumb';
import { IoHome } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

const BlogArticle = () => {
    const location = useLocation();
    const blog = location.state?.blog;

    if (!blog) {
        return <p>Artículo no encontrado</p>;
    }

    const items = [
        { label: 'Blog', url: '/blog' },
        { label: blog.titleBlog, url: '#' }
    ];

    const home = { icon: <IoHome />, url: '/' };

    return (
        <>
            <BreadCrumb model={items} home={home} className="flex text-primary-primary px-8  my-6  w-2/3 h-8 justify-center" />
            <section className="flex flex-col justify-center items-center w-auto h-auto px-10 py-10 gap-6">
              
                <h1 className="text-4xl font-bold text-primary-background rounded">{blog.titleBlog}</h1>
                <img className="w-80 rounded-sm" src={blog.imgBlog} alt="" />
                <p className="w-1/2 text-primary-background text-lg pb-10 font-normal text-justify" dangerouslySetInnerHTML={{ __html: blog.blogDescription }} />
            </section>
        </>
    );
}

export { BlogArticle };
