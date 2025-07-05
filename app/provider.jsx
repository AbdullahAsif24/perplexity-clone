"use client"
import { supabase } from '@/sevices/supabase'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'

const Provider = ({children}) => {
    const { user } = useUser()
    console.log(user);
    

    useEffect(()=>{
        user && CreateNewUser()
        console.log(user);
        
    }, [user])

    const CreateNewUser = async () => {
        // if user already exist



        let { data: Users, error } = await supabase.from('Users').select('*').eq("email", user?.primaryEmailAddress.emailAddress);
            
            console.log(Users);
            
        if (Users.length == 0) {

            const { data, error } = await supabase.from('Users').insert([
                    { 
                        name: user.fullName,
                        email: user?.primaryEmailAddress.emailAddress
                     },
                ]).select();

                console.log(data)

        }

    }
    return (
        <div className="w-full">
            {children}
        </div>
    )
}

export default Provider
