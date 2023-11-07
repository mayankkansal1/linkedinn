import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import InputOptions from './InputOptions'
import { Article, CalendarMonth, Image } from '@mui/icons-material'
import Post from './post'
import { addToPostAsync } from './postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
// import { useForm } from 'react-hook-form'
// import { selectLoggedInUser } from './auth/authSlice'

function Feed() {
    // const [input, setInput] = useState([]);
    const dispatch = useDispatch()
    // const user = useSelector(selectLoggedInUser)
    // const handlePost = (e) => {
    //     e.preventDefault()
    //     dispatch(addToPostAsync())
    // }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    console.log(errors)
    return (
        <div className='pt-5'>
            <div className='bg-white p-2 pb-2 border mb-5 rounded'>
                <div className='flex border rounded-3xl solid p-2 pl-4'>
                    <Avatar />
                    <form className='flex w-full'
                        onSubmit={handleSubmit((data) => {
                            dispatch(addToPostAsync({
                                body: data.body

                            }))
                            console.log(data)
                        })}
                    >
                        <input className='border-none ml-2 font-semibold outline-0 rounded-lg w-full'
                            id='body'
                            {...register('body')}
                            type='text'
                            placeholder='Start a post Here' />
                        <button
                            // onClick={handlePost}
                            type='submit'>Send</button>
                    </form>
                </div>
                <div className='flex justify-between  px-3 text-center mt-3 cursor-pointer '>
                    <div className='text-blue-300 hover:bg-slate-300 rounded-3xl p-2'>

                        <InputOptions Icon={Image} title="Media" />
                    </div>
                    <div className='text-amber-800 hover:bg-slate-300 rounded-3xl p-2'>
                        <InputOptions Icon={CalendarMonth} title="Event" />
                    </div>
                    <div className='text-orange-500 hover:bg-slate-300 rounded-3xl p-2'>
                        <InputOptions Icon={Article} title="Write Article" />
                    </div>
                </div>
            </div>
            <Post name="Mayank Kansal" description="Description" message="This is a Message"></Post>

        </div>
    )
}

export default Feed