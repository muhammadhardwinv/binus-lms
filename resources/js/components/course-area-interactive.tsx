'use client';

import { Card, CardContent } from '@/components/ui/card';
import * as React from 'react';

export const description = 'An interactive area chart';

export function CourseAreaInteractive() {
    const sliderRef = React.useRef<HTMLDivElement>(null);

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        const direction = e.deltaY > 0 ? 'down' : 'up';
        console.log('Scroll direction:', direction);
    };

    return (
        <div className="grid grid-cols-12 gap-6 px-1 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs sm:flex-wrap lg:px-6 dark:*:data-[slot=card]:bg-card">
            {/* Box 3 (Left) */}

            <div className="col-span-8 h-[50vh] overflow-hidden rounded-lg border bg-muted/20 p-2">
                <a href="" className="text-md mt-4 mb-4 block text-center font-semibold tabular-nums @[250px]/card:text-3xl">
                    Active Courses
                </a>
                <div
                    className="flex h-full space-x-4 overflow-x-auto p-2 whitespace-nowrap"
                    ref={sliderRef}
                    onWheel={(e) => {
                        if (sliderRef.current) {
                            sliderRef.current.scrollLeft += e.deltaY;
                            e.preventDefault();
                        }
                    }}
                >
                    <div className="shrink-0"></div>

                    {Array.from({ length: 30 }).map((_, index) => (
                        <div key={index} className="w-[calc(100%/3-1rem)] shrink-0">
                            <Card>
                                <CardContent className="flex h-[32vh] items-center justify-center p-6">
                                    <span className="text-md font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
