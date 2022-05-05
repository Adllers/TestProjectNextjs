import { Stack } from "@chakra-ui/react";
import { GiBeachBag, GiTShirt, GiConverseShoe } from "react-icons/gi";
import NavLink from "./NavLink";
import NavSection from "./NavSection";


export function SidebarNav() {
    return (

        <Stack spacing="12" align="flex-start"> 
            <NavSection title="PRODUTOS">
                <NavLink  icon={GiTShirt}>Roupas</NavLink>
                <NavLink  icon={GiConverseShoe}>Calçados</NavLink>
                <NavLink  icon={GiBeachBag}>Acessórios</NavLink>
            </NavSection>
        </Stack>
        
    );
}