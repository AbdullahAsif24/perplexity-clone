import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import React from 'react'

const ChatInputBox = () => {
    return (
        <div className='flex flex-col h-screen items-center justify-center w-full'>
            <Image src={"/logo.png"} alt='logo' width={"260"} height={"250"} />
            <div className='p-5 w-full max-w-2xl border rounded-2xl'>
                <input type="text" placeholder="Ask Anything" className='w-full p-4 outline-none' />
                <div>
                    <Tabs defaultValue="account" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">Make changes to your account here.</TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default ChatInputBox