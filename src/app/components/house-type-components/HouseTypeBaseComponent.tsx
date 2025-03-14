"use client"
import React, { useEffect } from 'react'
import { CardBackgroundComponent } from '../shared-components/CardBackgroundComponent'
import { HouseTypeInfoComponent } from './HouseTypeInfoComponent'
import { HouseUpCloseComponent } from './HouseUpCloseComponent'
import { setNavValue } from '@/app/state_management/reducers/client-reducers/navValue'
import { IHouseTypeInfo } from '@/app/interfaces/ITypeData'
import { MoreHouseTypes } from './MoreHouseTypes'
import { HouseSameTypeComponent } from './HouseSameTypeComponent'
import { useDispatch } from 'react-redux'




export const HouseTypeBaseComponent:React.FC<IHouseTypeInfo> = (houseTypeData) => {
    const dispatch= useDispatch();
    
    useEffect(() => {
        dispatch(setNavValue({ action: "House Types" }));
    }, []);

    
    return (
        <div className="-mt-[80px] pb-[120px] gap-y-24 flex flex-col">

            <CardBackgroundComponent imagePath='/images/pictures/pages/house.webp' title='House' />

            <HouseTypeInfoComponent title={houseTypeData.title} houseData={houseTypeData.houseData} />

            <HouseUpCloseComponent link_3d={houseTypeData.houseData.link_3d} picture={houseTypeData.houseData.house_up_close}/>

            <HouseSameTypeComponent title={houseTypeData.title} projectsHouseType={houseTypeData.houseData.more_house_type_projects}/>
            
            <MoreHouseTypes title={houseTypeData.title}/>


        </div>
    )
}
