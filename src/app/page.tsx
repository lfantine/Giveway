'use client'
import GivewayForm from "@/components/Form/Component";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SettingsCard from "@/components/Settings/Component";
import { Dispatch, SetStateAction, useState } from "react";

export type PlatformType = 'Instagram'|'X'|'Facebook';
export interface CardProps {
  lastPost: number;
  hasComment: boolean;
  hasLike: boolean;
  platform: PlatformType;
  setLastPost: Dispatch<SetStateAction<number>>;
  setHasComment: Dispatch<SetStateAction<boolean>>;
  setHasLike: Dispatch<SetStateAction<boolean>>;
  setPlatform: Dispatch<SetStateAction<PlatformType>>;
  children?:React.ReactNode;
  className?:string;
}

export default function Home() {
  const [hLike, setHasLike] = useState(true);
  const [hComment, setHasComment] = useState(true);
  const [lPost, setlastPost] = useState(0);
  const [platform, setPlatform] = useState<PlatformType>('Instagram');
  return (
    <main className="min-h-screen bg-accent grid">
      <div className="h-fit w-[800px] m-auto">
        <Tabs defaultValue="search" className="m-auto w-full h-fit">
          <TabsList className="m-auto">
            <TabsTrigger value="search">Search</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="search" className="w-full">
            <GivewayForm
              hasLike={hLike}
              hasComment={hComment}
              lastPost={lPost}
              platform={platform}
              setHasLike={setHasLike}
              setHasComment={setHasComment}
              setLastPost={setlastPost}
              setPlatform={setPlatform}
            ></GivewayForm>
            </TabsContent>
          <TabsContent value="settings" className="w-full">
            <SettingsCard
              hasLike={hLike}
              hasComment={hComment}
              lastPost={lPost}
              platform={platform}
              setHasLike={setHasLike}
              setHasComment={setHasComment}
              setLastPost={setlastPost}
              setPlatform={setPlatform}
            ></SettingsCard>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
