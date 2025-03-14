"use client"
import { interFont } from "@/app/fonts/fontsConfig";
import { ISubMenu } from "@/app/interfaces/ISubMenu";
import { rootUrl } from "@/app/variables/sharedVariables";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import Link from "next/link";
import { useState } from "react";




export const SubMenuComponent: React.FC<ISubMenu> = ({ menu, urlPath, navValueLocal, subMenus }) => {
    const [openMenu, setOpenMenu] = useState(false);


    return (
        <Menu
            open={openMenu}
            handler={setOpenMenu}
            allowHover
            offset={20}
        >
            <MenuHandler>
                <h4 className={`cursor-pointer ${menu === navValueLocal ? 'bg-white shadow-gray-500 text-orange-600' : ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-2xl transition-colors duration-300 ease-linear`}>
                    {menu}
                </h4>
            </MenuHandler>

            <MenuList
                className="w-[500px] p-4 grid grid-cols-2 gap-4  bg-black text-white"
                placeholder={''} onPointerEnterCapture onPointerLeaveCapture>

                {
                    subMenus.map((item, index) =>
                        <Link key={`${urlPath}${item.id}${index}`} href={`${rootUrl}/${urlPath}/${item.id}`}>
                            <MenuItem key={`${menu}${index}`} className={`${interFont.className} menu-hover-color`} placeholder={''} onPointerEnterCapture onPointerLeaveCapture>
                                {item.subMenu}
                            </MenuItem>
                        </Link>

                    )
                }


            </MenuList>
        </Menu>
    );
}