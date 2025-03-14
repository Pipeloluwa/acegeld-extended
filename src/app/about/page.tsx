"use client";
import { useEffect } from 'react';
import { CardBackgroundComponent } from '../components/shared-components/CardBackgroundComponent'
import { InfoComponent } from '../components/about-components/InfoComponent'
import { CoreTeamComponent } from '../components/about-components/CoreTeamComponent'
import { useDispatch } from 'react-redux'
import { setNavValue } from '../state_management/reducers/client-reducers/navValue'

export default function About() {
    const dispatch= useDispatch();
    
    useEffect(() => {
        dispatch(setNavValue({ action: "About" }));
    }, []);



    return (
        <div className="-mt-[80px] pb-[120px] gap-y-24 flex flex-col">
            <CardBackgroundComponent imagePath='/images/pictures/pages/about.webp' title='About Us' />

            <InfoComponent />

            <CoreTeamComponent />

        </div>
    )
}
