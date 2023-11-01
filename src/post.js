import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import InputOptions from './InputOptions'
import { Chat, Send, Share, ThumbUp } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllPostsAsync, selectAllPosts } from './postsSlice'


function Post() {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    useEffect(() => {
        dispatch(fetchAllPostsAsync())
    }, [dispatch])
    return (
        <div className='p-4 mb-3 '>
            <div className="mt-6 gap-x-6 gap-y-10 xl:gap-x-8">
                {posts.map((post) => (
                    <div className="flex mb-3">

                        <div className="border outline px-3 py-3">
                            <div className='flex'>
                                <Avatar />
                                <h2>{post.id} UserName</h2>
                            </div>
                            {/* <h2>Title: {post.title}</h2> */}
                            <p className="text-sm font-medium text-gray-900">Body: {post.body}</p>
                            <div>{post.reactions} Likes</div>
                            <div className='flex justify-evenly text-center cursor-pointer px-3 gap-2 pt-4 overline'>

                                <div className='hover:bg-slate-300'>
                                    <InputOptions Icon={ThumbUp} title="Like" />

                                </div>
                                <div className='hover:bg-slate-300'>
                                    <InputOptions Icon={Chat} title="Comment" />

                                </div>
                                <div className='hover:bg-slate-300'>
                                    <InputOptions Icon={Share} title="Repost" />

                                </div>
                                <div className='hover:bg-slate-300'>
                                    <InputOptions Icon={Send} title="Send" />

                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default Post 