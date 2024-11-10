"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarGroup, SidebarGroupLabel, 
    // SidebarMenuAction, SidebarMenuSub, useSidebar 
} from "@/components/ui/sidebar";
import { useSearch } from "@/hooks/useSearch";
import { Search } from "lucide-react";
import { useState } from "react";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
// import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";

export function NavSearch() {
    // const { isMobile } = useSidebar();
    const { type, search, setSearchSuccess } = useSearch();
    const [query, setQuery] = useState<string>("");
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const handleSearch = (input: string) => {
        setQuery(input);
        search(input);
    }

    const handleToggleSearch = () => {
        if (isSearching) {
            setSearchSuccess([]);
            setQuery("");
        }
        setIsSearching(!isSearching);
    }

    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                Search
            </SidebarGroupLabel>
            <SidebarMenu>

                <SidebarMenuItem>
                    {
                        !isSearching && type === "idle" ?
                            <SidebarMenuButton tooltip={"search"} onClick={handleToggleSearch}>
                                <Search /> Search
                            </SidebarMenuButton>
                            : <div className="flex flex-row justify-between mx-2 gap-2">
                                <Input placeholder="Search" value={query} onChange={(e) => handleSearch(e.target.value)} className="dark:bg-zinc-900" />
                                <Button onClick={handleToggleSearch} className="dark:bg-zinc-950/50 focus:ring focus:ring-blue-500/75 focus:ring-offset-2" variant={"outline"}><Search /></Button>
                            </div>
                    }

                </SidebarMenuItem>

            </SidebarMenu>
        </SidebarGroup>
    )
}