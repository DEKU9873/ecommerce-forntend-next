"use client"

import * as React from "react"
import { ChevronsUpDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

interface ComboboxProps {
  items: { value: string; label: string }[]
  placeholder?: string
  value?: string
  onChange: (value: string) => void
  className?: string
}

export function Combobox({
  items,
  value,
  onChange,
  placeholder = "Select...",
  className
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const [width, setWidth] = React.useState(0)

  React.useEffect(() => {
    if (buttonRef.current) {
      setWidth(buttonRef.current.offsetWidth)
    }
  }, [buttonRef.current?.offsetWidth])

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          ref={buttonRef}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
        >
          <span className={value ? "" : "text-muted-foreground font-normal"}>
            {value
              ? items.find((item) => item.value === value)?.label
              : placeholder}
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-0" style={{ width }}>
        <Command>
          <CommandInput
            placeholder="Search..."
            value={search}
            onValueChange={setSearch}
          />
          <CommandList>
            {filteredItems.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}

            {filteredItems.map((item) => (
              <CommandItem
                key={item.value}
                value={item.label} 
                onSelect={() => {
                  onChange(item.value) 
                  setOpen(false)
                  setSearch("") 
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
