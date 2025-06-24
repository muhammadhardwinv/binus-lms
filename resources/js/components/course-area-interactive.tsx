'use client';

import * as React from 'react';

export function CourseAreaInteractive() {
    const sliderRef = React.useRef<HTMLDivElement>(null);

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        const direction = e.deltaY > 0 ? 'down' : 'up';
        console.log('Scroll direction:', direction);
        // Optional: React to scroll direction
        // Example: trigger animation, load more, etc.
    };

    return (
        <div>
            <h3></h3>
        </div>
    );
}
