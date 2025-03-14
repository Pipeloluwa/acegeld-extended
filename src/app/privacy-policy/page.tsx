'use client'
import { PolicyTermsComponent } from "../components/shared-components/PolicyTermsComponent";
import { privacyPolicyData, privacyPolicyDescription } from "../variables/privacyPolicyVariables";
import { CardBackgroundComponent } from "../components/shared-components/CardBackgroundComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavValue } from "../state_management/reducers/client-reducers/navValue";


export default function PrivacyPolicy() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavValue({ action: "" }));
    }, []);
    
    return (
        <div className="-mt-[80px] pb-[120px] gap-y-24 flex flex-col">
            <CardBackgroundComponent imagePath='/images/pictures/pages/policy.webp' title='Privacy Policy' />

            <PolicyTermsComponent description={privacyPolicyDescription} data={privacyPolicyData} />

        </div>

    );
}