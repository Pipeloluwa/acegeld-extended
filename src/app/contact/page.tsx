"use client";
import { useEffect } from 'react';
import { CardBackgroundComponent } from '../components/shared-components/CardBackgroundComponent'
import { useDispatch } from 'react-redux'
import { setNavValue } from '../state_management/reducers/client-reducers/navValue'
import { TourComponent } from '../components/contact-components/TourComponent';
import { TeamExpertComponent } from '../components/contact-components/TeamExpertComponent';

export default function Contact() {
    const dispatch= useDispatch();
    
    useEffect(() => {
        dispatch(setNavValue({ action: "Contact" }));
    }, []);



    return (
        <div className="-mt-[80px] pb-[120px] gap-y-24 flex flex-col">
            <CardBackgroundComponent imagePath='/images/pictures/pages/contact.webp' title='Contact Us' />

            <TourComponent />

            <TeamExpertComponent />

        </div>
    )
}
