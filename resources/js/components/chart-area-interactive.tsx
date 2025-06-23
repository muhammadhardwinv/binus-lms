'use client';

import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import * as React from 'react';

export const description = 'An interactive area chart';
export function CalendarDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow-sm" captionLayout="dropdown" />;
}
export function ChartAreaInteractive() {
    return (
        <div className="grid grid-cols-1 justify-between gap-10 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-3 dark:*:data-[slot=card]:bg-card">
            <Carousel
                opts={{
                    align: 'start',
                }}
                orientation="vertical"
                className="col-span-1 w-full max-w-xl @5xl/main:col-span-1"
            >
                <CarouselContent className="-mt-1 h-[240px]">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <CarouselItem key={index} className="pt-1 md:basis-1/2">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="justify-stART ml-8 flex w-xl items-center p-6">
                                        <span className="justify-font-semibold flex text-2xl">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Carousel
                opts={{
                    align: 'start',
                }}
                orientation="vertical"
                className="col-span-1 w-full max-w-xl @5xl/main:col-span-1"
            >
                <CarouselContent className="-mt-1 h-[240px]">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <CarouselItem key={index} className="pt-1 md:basis-1/2">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="justify-stART ml-8 flex w-xl items-center p-6">
                                        <span className="justify-font-semibold flex text-2xl">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <CalendarDemo />
        </div>
    );
}
