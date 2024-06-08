import { cn } from "@/lib/utils";
import React from "react";


export default function Card(
    {children, className} : {children?:React.ReactNode, className?:string}
) {
    return (
        <div className={cn("min-w-fit max-w-6xl w-[800px] min-h-96 overflow-x-hidden overflow-y-scroll max-h-[900px] bg-white rounded-md shadow-sm shadow-slate-400 flex flex-col", className)}>
            {children}
        </div>
    )
}