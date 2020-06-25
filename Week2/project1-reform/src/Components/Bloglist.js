import React from "react"
import Blogs from "./Blogs"
import Blogpost from "./Blogpost"

function Bloglist() {
    const BlogsComponent = Blogs.map(blog => <Blogpost title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date}/>)
    return (
        <main>
            {BlogsComponent}
        </main>
    )
}

export default Bloglist