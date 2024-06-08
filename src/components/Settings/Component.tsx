import { Dispatch, SetStateAction } from "react";
import Card from "../Card/Component";
import { CardProps, PlatformType } from "@/app/page";
import { Checkbox } from "@/components/ui/checkbox"


import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { platform } from "os";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

export default function SettingsCard({
    lastPost,
    setLastPost,
    platform,
    setPlatform,
    hasLike,
    setHasLike,
    hasComment,
    setHasComment,
} : CardProps
) {
    return (
        <Card>
            <nav className="h-16 w-full bg-red-300v flex flex-row justify-start items-center gap-4">
                <div className="h-fit w-fit font-display text-lg font-semibold ml-4">Settings</div>
            </nav>
            <div className="flex-1 w-full grid p-2 border-t-[1px] border-slate-200">
                <div className="h-full w-full m-auto flex flex-col gap-4 max-h-72 overflow-y-scroll">
                    <ItemList className="mt-2">
                        <div className="flex-1 h-full flex-row flex gap-4 items-center text-md">
                            <div className="">Platform</div>
                        </div>
                        <Select onValueChange={(value: PlatformType) => setPlatform(value)}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder={platform.toString()} defaultValue={platform.toString()}/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Instagram">Instagram</SelectItem>
                                <SelectItem value="X">X</SelectItem>
                                <SelectItem value="Facebook">Facebook</SelectItem>
                            </SelectContent>
                        </Select>
                    </ItemList>
                    <ItemList>
                        <div className="flex-1 h-full flex-row flex gap-4 items-center text-md">
                            <div className="flex flex-row items-center gap-4"><div className="h-fit w-fit">From post number</div><div className="h-fit w-fit text-slate-400"> (0 for lastest post) </div></div>
                        </div>
                        <Input type="number" defaultValue={lastPost} min="0" max="10" className="max-w-20"></Input>
                    </ItemList>
                    <ItemList>
                        <div className="flex-1 h-full flex-row flex gap-4 items-center text-md">
                            <label className="text-md" htmlFor="hlike">Has LIKED the post</label>
                        </div>
                        <Checkbox id="hLike" checked={hasLike} onCheckedChange={(v:boolean) => setHasLike(v)}/>
                    </ItemList>
                    <ItemList>
                        <div className="flex-1 h-full flex-row flex gap-4 items-center text-md">
                            <label className="text-md" htmlFor="hComment">Has COMMENTED the post</label>
                        </div>
                        <Checkbox id="hComment" checked={hasComment} onCheckedChange={(v:boolean) => setHasComment(v)}/>
                    </ItemList>
                </div>
            </div>
        </Card>
    )
}

export function ItemList({children, className}:{children?:React.ReactNode, className?:string}) {
    return (
        <div className={cn("flex-row flex w-full pl-6 pr-6 justify-between h-8 items-center font-normal text-md", className)}>
            {children}
        </div>
    )
}