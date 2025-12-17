"use client";


import { ChevronDown, CirclePlus, CircleX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";

interface Option {
    label: string;
    value: string | number;    
    count?: number;
}

interface MultiSelectProps {
    options: Option[];
    value: (string | number)[];
    onChange: (value: (string | number)[]) => void;
    placeholder?: string;
}

export function MultiSelect({
    options,
    value,
    onChange,
    placeholder = "Status",
}: MultiSelectProps) {
    const toggleValue = (val: string | number) => {
                if (value.includes(val)) {
            onChange(value.filter((v) => v !== val));
        } else {
            onChange([...value, val]);
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="flex h-8.5 items-center justify-between "
                >
                    {
                        value.length > 0 ? (
                            <CircleX className="h-4 w-4 shrink-0 opacity-50" />
                        ) : (
                            <CirclePlus className="h-4 w-4 shrink-0 opacity-50" />
                        )
                    }

                    <span className="flex-1 text-center font-normal leading-none">
                        {placeholder}
                    </span>
                </Button>

            </PopoverTrigger>

            <PopoverContent className="w-auto p-0" align="start">
                <Command>
                    <CommandInput placeholder={placeholder} />
                    <CommandEmpty>No results</CommandEmpty>

                    <CommandGroup>
                        {options.map((option) => (
                            <CommandItem
                                key={option.value}
                                onSelect={() => toggleValue(option.value)}
                            >
                                <div className="flex items-center w-full">
                                    <Checkbox
                                        checked={value.includes(option.value)}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleValue(option.value);
                                        }}
                                        className="mr-2"
                                    />
                                    <span className="truncate">{option.label}</span>
                                    {typeof option.count === "number" && (
                                        <span className="ml-auto text-xs text-slate-500">
                                            {option.count}
                                        </span>
                                    )}
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>

                {value.length > 0 && (
                    <div className="px-3 py-2 border-t">
                        <Button
                            variant="ghost"
                            className="w-full justify-center text-sm"
                            onClick={() => onChange([])}
                        >
                            Clear filters
                        </Button>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    );
}
