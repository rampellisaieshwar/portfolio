import * as React from "react"
import { Slot as RadixSlot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

const Slot = React.forwardRef<
  React.ElementRef<typeof RadixSlot>,
  React.ComponentPropsWithoutRef<typeof RadixSlot>
>(({ className, ...props }, ref) => {
  return <RadixSlot ref={ref} className={cn(className)} {...props} />
})
Slot.displayName = "Slot"

export { Slot }
