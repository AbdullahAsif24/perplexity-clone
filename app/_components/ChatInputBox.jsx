import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Atom, AudioLines, Cpu, Globe, Mic, Paperclip, SearchCodeIcon } from "lucide-react"
import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AiModelsOptions } from "@/sevices/Shared"

const ChatInputBox = () => {
    return (
        <div className='flex flex-col h-screen items-center justify-center w-full'>
            <Image src={"/logo.png"} alt='logo' width={"260"} height={"250"} />

            <div className='flex justify-between items-end p-3 w-full max-w-2xl border rounded-2xl mt-10'>
                <Tabs defaultValue="search" className="w-[400px]">
                    <TabsContent value="search">
                        <input type="text" placeholder="Ask Anything" className='w-full p-4 outline-none' />
                    </TabsContent>
                    <TabsContent value="research">
                        <input type="text" placeholder="Research Anything" className='w-full p-4 outline-none' />
                    </TabsContent>

                    <div>
                        <TabsList>
                            <TabsTrigger value="search" className={"text-primary"}> <SearchCodeIcon /> Search</TabsTrigger>
                            <TabsTrigger value="research" className={"text-primary"}> <Atom /> Research</TabsTrigger>
                        </TabsList>
                    </div>
                </Tabs>

                <div className="flex gap-3 items-center">

                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="ghost">
                                <Cpu className="text-gray-500 h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator /> */}
                            {AiModelsOptions.map((model,index)=>(
                                <DropdownMenuItem key={index}>
                                    <div className="m-1">
                                        <h2 className="text-sm">{model.name}</h2>
                                        <p className="text-xs text-gray-500">{model.desc}</p>
                                    </div>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="ghost">
                        <Globe className="text-gray-500 h-5 w-5" />
                    </Button>
                    <Button variant="ghost">
                        <Paperclip className="text-gray-500 h-5 w-5" />
                    </Button>
                    <Button variant="ghost">
                        <Mic className="text-gray-500 h-5 w-5" />
                    </Button>
                    <Button>
                        <AudioLines className="text-white h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ChatInputBox