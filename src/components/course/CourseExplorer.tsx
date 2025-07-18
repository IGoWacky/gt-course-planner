'use client';

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { majors, minors } from "@/lib/constants"

export function CourseCombobox() {
    const [majorOpen, setMajorOpen] = React.useState(false)
    const [majorValue, setMajorValue] = React.useState("")
    
    const [minorOpen, setMinorOpen] = React.useState(false)
    const [minorValue, setMinorValue] = React.useState("")

    return (
        <div className="flex flex-row justify-between gap-4">
            {/* Major Combobox */}
            <Popover open={majorOpen} onOpenChange={setMajorOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={majorOpen}
                        className="justify-between w-[100px] flex-grow"
                    >
                        {majorValue
                            ? majors.find((major) => major.value === majorValue)?.label
                            : "Select major..."}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search major..." />
                        <CommandList>
                            <CommandEmpty>No major found.</CommandEmpty>
                            <CommandGroup>
                                {majors.map((major) => (
                                    <CommandItem
                                        key={major.value}
                                        value={major.value}
                                        onSelect={(currentValue) => {
                                            setMajorValue(currentValue === majorValue ? "" : currentValue)
                                            setMajorOpen(false)
                                        }}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                majorValue === major.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {major.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            {/* Minor Combobox */}
            <Popover open={minorOpen} onOpenChange={setMinorOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={minorOpen}
                        className="w-[200px] justify-between flex-grow"
                    >
                        {minorValue
                            ? minors.find((minor) => minor.value === minorValue)?.label
                            : "Select minor..."}
                        <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search minor..." />
                        <CommandList>
                            <CommandEmpty>No minor found.</CommandEmpty>
                            <CommandGroup>
                                {minors.map((minor) => (
                                    <CommandItem
                                        key={minor.value}
                                        value={minor.value}
                                        onSelect={(currentValue) => {
                                            setMinorValue(currentValue === minorValue ? "" : currentValue)
                                            setMinorOpen(false)
                                        }}
                                    >
                                        <CheckIcon
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                minorValue === minor.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {minor.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}