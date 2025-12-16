"use client";

import * as React from "react";
import { ChevronDownIcon, CirclePlus, CircleX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const DatePicker = () => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="flex h-8.5 items-center justify-between "
        >
          {date ? (
            <CircleX className="h-4 w-4 shrink-0 opacity-50" />
          ) : (
            <CirclePlus className="h-4 w-4 shrink-0 opacity-50" />
          )}

          <span className="flex-1 text-center font-normal leading-none">
            {date ? date.toLocaleDateString() : "Create At"}
          </span>
        </Button>
 
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDate(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
