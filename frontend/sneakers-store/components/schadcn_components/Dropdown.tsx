import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function Dropdown() {
    const [clicked_1, setClicked_1] = useState(false)
    const [clicked_2, setClicked_2] = useState(false)

    const handleClicked_1 = (e: React.MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault();
        setClicked_1(!clicked_1)
    };
    const handleClicked_2 = (e: React.MouseEvent<HTMLParagraphElement>) => {
        e.preventDefault();
        setClicked_2(!clicked_2)
    };
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="hover:text-blue-600" variant="outline">Marken</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" w-52">
                    <DropdownMenuLabel>Alle Marken</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel className=" cursor-pointer" onClick={handleClicked_1}>Damen</DropdownMenuLabel>
                    {clicked_1 &&
                        <>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    NIKE
                                    <DropdownMenuShortcut></DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    ADIDAS
                                    <DropdownMenuShortcut></DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    NEW BALANCE
                                    <DropdownMenuShortcut></DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </>
                    }
                    <DropdownMenuLabel className=" cursor-pointer" onClick={handleClicked_2}>Herren</DropdownMenuLabel>
                    {clicked_2 &&
                        <>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    NIKE
                                    <DropdownMenuShortcut></DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    ADIDAS
                                    <DropdownMenuShortcut></DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    PUMA
                                    <DropdownMenuShortcut></DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    NEW BALANCE
                                    <DropdownMenuShortcut></DropdownMenuShortcut>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </>
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
