'use client';

import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils'; // optional class merging helper
import { Link, usePage } from '@inertiajs/react';
import { type Icon } from '@tabler/icons-react';

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon?: Icon;
    }[];
}) {
    const { url } = usePage(); // Get current path from Inertia

    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    {items.map((item) => {
                        const isActive = url.startsWith(item.url);

                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    tooltip={item.title}
                                    className={cn(
                                        'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                                        isActive ? 'bg-primary font-semibold text-white' : 'text-muted-foreground hover:bg-muted',
                                    )}
                                >
                                    <Link href={item.url}>
                                        {item.icon && <item.icon className="h-4 w-4" />}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        );
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
}
