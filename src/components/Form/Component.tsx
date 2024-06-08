'use client'

import { cn } from "@/lib/utils";
import React, { useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Card from "../Card/Component";
import { Button } from "../ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CardProps, PlatformType } from "@/app/page";
import { platform } from "os";
import { cva } from "class-variance-authority";
  
const loadingVariant = {
    'true': "grid",
    'false': "flex flex-col overflow-x-hidden overflow-y-scroll gap-2",
}

const userFile: { [key: number]: userFound } = {
    1: {
        username: "Alex(dre)",
        picture: "https://media.istockphoto.com/id/1187347911/fr/photo/jeune-employ%C3%A9-de-poste-heureux-effectuant-la-livraison-au-district-r%C3%A9sidentiel.jpg?s=612x612&w=0&k=20&c=KMA51ln2J-S-S5juLVMXp12tq471ubqj8xw-6Nc5AKA="
    },
    2: {
        username: "Bechir",
        picture: "https://assets-fr.imgfoot.com/media/cache/1200x1200/ok-40.jpg"
    },
    3: {
        username: "Tom",
        picture: "https://upload.wikimedia.org/wikipedia/commons/5/57/Chicken_-_melbourne_show_2005.jpg"
    },
    4: {
        username: "Baba",
        picture: "https://i.pinimg.com/736x/4c/ae/8d/4cae8dcbfbded6d95c4f719a2e0c8fd9.jpg"
    },
    5: {
        username: "Abou",
        picture: "https://st.depositphotos.com/7319880/57109/i/450/depositphotos_571095462-stock-illustration-happy-young-man-graduating-from.jpg"
    },
    6: {
        username: "Pat",
        picture: "https://lelephant-larevue.fr/wp-content/uploads/2016/04/capture-decran-2017-05-23-a-10.51.42-1024x681-1-571x380.png"
    },
    7: {
        username: "Alex(der)",
        picture: "https://f.maformation.fr/edito/sites/3/2020/02/chauffeur-livreur.jpg"
    },
    8: {
        username: "Loan",
        picture: "https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgal.2Fvar.2Fgal.2Fstorage.2Fimages.2Fmedia.2Fimages.2Factu.2Fphotos_on_ne_parle_que_de_ca.2Frocco_siffredi3.2F1629430-1-fre-FR.2Frocco_siffredi.2Ejpg/420x420/quality/80/le-secret-de-la-jeunesse-de-rocco-siffredi.jpg"
    },
}

interface userFound {
    username: string;
    picture: string;
}

export default function GivewayForm({
    children,
    className,
    platform,
    setPlatform,
    hasLike,
    hasComment,
    lastPost,
}: CardProps) {
    const [isLoading , setIsLoading] = useState(false);
    const [users, setUsers] = useState<userFound[]>([]);
    const submit = async () => {
        console.log("platform = " + platform);
        console.log("has liked = " + hasLike.valueOf());
        console.log("has comment = " + hasComment.valueOf());
        console.log("last post = " + lastPost);
        setIsLoading(true);
        setUsers(Object.values(userFile));
        setTimeout(() => setIsLoading(false), 2000);
        return ;
    }
    return (
        <Card>
            <nav className="h-16 w-full bg-red-300v flex flex-row justify-start items-center gap-4">
                <div className="h-fit w-fit font-display text-lg font-semibold ml-4">Search</div>
                <div className="flex-1 h-full flex flex-row items-center ">
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
                </div>
                <RequestButton className="mr-2" submit={submit}></RequestButton>
            </nav>
            <div className="flex-1 w-full grid p-2">
                <div className={"bg-accent h-full w-full m-auto rounded-md shadow-slate-300 shadow-inner max-h-72"}>
                    <div className={cn(loadingVariant[isLoading.toString() as 'true' | 'false'] , "h-full w-full py-2 px-4")}>
                    {isLoading
                    ?   <div role="status" className="m-auto">
                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    : users.map((user: userFound, index: number) => {
                        return (
                            <div key={index} className="px-2 h-fit w-full group flex flex-row hover:bg-white py-2 rounded-md">
                                <div className="flex-1 flex flex-row h-full items-center ml-2 gap-2">
                                    <img src={user.picture} className="rounded-full h-8 w-8 object-cover"></img>
                                    <div className="flex-1 h-fit font-normal">{user.username}</div>
                                </div>
                                <Button className="hidden group-hover:block h-fit w-fit p-1 mr-2 bg-black text-white">Choose</Button>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </Card>   
    );
}

export function RequestButton({className, submit}:{className?:string, submit:()=>void}) {
    
    return (
        <AlertDialog>
            <AlertDialogTrigger className="mr-4 bg-neutral-900 p-2 rounded-md text-white hover:bg-neutral-700">Search</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Search a User with actual settings ?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone and will perform
                    a request using Instagram / Twitter Api.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={submit}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}