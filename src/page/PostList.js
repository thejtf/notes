import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import BlogPost from '../components/BlogPost';
import Footer from '../components/Footer'

// 笔记列表
function PostList(props) {

    document.title = props.title

    useEffect(()=>{
        // console.log('scrollTo(0, 0)');
        window.scrollTo(0, 0);

    }, [])


    return <div>

        <Nav />
        <BlogPost />
        <Footer />

    </div>


}

export default PostList;