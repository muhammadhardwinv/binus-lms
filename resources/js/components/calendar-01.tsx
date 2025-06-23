import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function Calendar01() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
      <Calendar mode="single" defaultMonth={date} selected={date} onSelect={setDate} className="mt-8 h-[60vh] flex-1 rounded-md border shadow-sm" />
  );
}
