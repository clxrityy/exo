"use client"

import * as React from "react"
import {
  AppWindow,
  BookDashed,
  BrickWall,
  CalendarCheck2,
  Clock,
  Eye,
  Tag,
  UserRoundSearch,
} from "lucide-react"

import { NavMain } from "@/components/layout/sidebar/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavSearch } from "./nav-search"
import Image from "next/image"
import Link from "next/link"

const data = {
  navMain: [
    {
      title: "Feed",
      url: "/#feed",
      icon: BookDashed,
      isActive: true,
      items: [ // blog categories mapped
        {
          title: "Tags",
          url: "/tags",
          icon: Tag
        },
        {
          title: "Recent",
          url: "/#feed",
          icon: Clock
        },
        {
          title: "Authors",
          url: "/authors",
          icon: UserRoundSearch
        }
      ],
    },
    {
      title: "Studio",
      url: "/studio",
      icon: AppWindow,
      items: [
        {
          title: "Structure",
          url: "/studio/structure",
          icon: BrickWall
        },
        {
          title: "Vision",
          url: "/studio/vision",
          icon: Eye,
        },
        {
          title: "Schedules",
          url: "/studio/schedules",
          icon: CalendarCheck2
        }
      ]
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link className="flex flex-row gap-2 items-center justify-end font-bold uppercase font-suse tracking-widest grayscale-[75%] hover:grayscale-0 transition-colors duration-100 ease-out" href="/">
          <Image src={"/apple-touch-icon.png"} alt="Exo" width={25} height={25} />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSearch />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
