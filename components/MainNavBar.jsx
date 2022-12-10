import {
    Button,
    Link
} from "@chakra-ui/react";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react';

import {
    ChevronDownIcon,
} from "@chakra-ui/icons"

const MainNavBar = () => {
    return(
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Custom wordpress posts
            </MenuButton>
            <MenuList>
                <MenuItem>
                    <Link href="/contacts">Contacts</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                    <Link href="/addresses">Addresses</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                    <Link href="/textiles">Textiles</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                    <Link href="/">Home</Link>
                </MenuItem>
            </MenuList>
        </Menu>
    );
};
export default MainNavBar;