import { IconTrendingUp } from '@tabler/icons-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function SectionCards() {
    return (
        <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Indonesia Literatures</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Grade: A+</CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp />
                            Passed
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        <a href="#">View Details</a>
                    </div>
                    <div className="text-muted-foreground">Professor Andi</div>
                </CardFooter>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Entrepreneurship</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Grade: A-</CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp />
                            Passed
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        <a href="#">View Details</a>
                    </div>
                    <div className="text-muted-foreground">Professor Budi</div>
                </CardFooter>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Computer</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Grade: B+</CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp />
                            Passed
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        <a href="#">View Details</a>
                    </div>
                    <div className="text-muted-foreground">Professor Cody</div>
                </CardFooter>
            </Card>
            <Card className="@container/card">
                <CardHeader>
                    <CardDescription>Mathemathics</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">Grade: A-</CardTitle>
                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp />
                            Passed
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                        <a href="#">View Details</a>
                    </div>
                    <div className="text-muted-foreground">Professor Dean</div>
                </CardFooter>
            </Card>
        </div>
    );
}
