'use client'
import { useEffect } from "react";
import { CardBackgroundComponent } from "../components/shared-components/CardBackgroundComponent";
import { PolicyTermsComponent } from "../components/shared-components/PolicyTermsComponent";
import { setNavValue } from "../state_management/reducers/client-reducers/navValue";
import { termsServiceData } from "../variables/termsServiceVariables";
import { useDispatch } from "react-redux";


export default function TermsOfService() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavValue({ action: "" }));
    }, []);


    return (

        <div className="-mt-[80px] pb-[120px] gap-y-24 flex flex-col">
            <CardBackgroundComponent imagePath='/images/pictures/pages/term.webp' title='Terms Of Service' />

            <PolicyTermsComponent data={termsServiceData} />

        </div>

    );
}