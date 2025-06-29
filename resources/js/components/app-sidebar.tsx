'use client';

import {
    IconArticle,
    IconCalendarEvent,
    IconCamera,
    IconChartBar,
    IconDashboard,
    // IconDatabase,
    IconFileAi,
    IconFileDescription,
    // IconFileWord,
    IconFolder,
    IconGraph,
    IconHelp,
    IconInnerShadowTop,
    IconListDetails,
    // IconReport,
    IconSearch,
    IconSettings,
    IconUsers,
} from '@tabler/icons-react';
import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link } from '@inertiajs/react';

const data = {
    user: {
        name: 'Sofia Davis',
        email: 'sofia.davis@g.c',
        avatar: '/avatars/shadcn.jpg',
    },
    navMain: [
        {
            title: 'Dashboard',
            url: 'dashboard',
            icon: IconDashboard,
        },
        {
            title: 'Courses',
            url: 'courses',
            icon: IconArticle,
        },
        {
            title: 'Forums',
            url: '#',
            icon: IconUsers,
        },
        {
            title: 'Evaluation',
            url: '#',
            icon: IconGraph,
        },
        {
            title: 'Events',
            url: '#',
            icon: IconCalendarEvent,
        },
    ],
    navSecondary: [
        {
            title: 'Settings',
            url: '#',
            icon: IconSettings,
        },
        {
            title: 'Get Help',
            url: '#',
            icon: IconHelp,
        },
        {
            title: 'Search',
            url: '#',
            icon: IconSearch,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
                            <Link href="dashboard">
                                <img src="assets/logo-bits.png" className="h-10 w-10" alt="BITS Logo" />
                                <span className="text-xl font-bold">BITS</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavDocuments items={data.documents} /> */}
                <NavSecondary items={data.navSecondary} className="mt-auto" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
