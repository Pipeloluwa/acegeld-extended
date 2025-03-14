"use client";
import { useEffect } from "react";
import { AboutComponent } from "./components/home-components/AboutComponent";
import { HouseComponent } from "./components/home-components/HouseComponent";
import { HousesSlideComponent } from "./components/home-components/HousesSlideComponent";
import { ProjectComponent } from "./components/home-components/ProjectComponent";
import { ServiceComponent } from "./components/home-components/ServiceComponent";
import { WelcomeComponent } from "./components/home-components/WelcomeComponent";
import { setNavValue } from "./state_management/reducers/client-reducers/navValue";
import { useDispatch } from "react-redux";
import { estateFeaturesGeneralData } from "./variables/estateVariables";
import { EstateFeatureComponent } from "./components/home-components/EstateFeatureComponent";

export default function Home() {
  const dispatch= useDispatch();
  
  useEffect(() => {
    dispatch(setNavValue({action: "Home"}));
  }, []);

  
  return (
    <div className="-mt-[80px] lg:gap-y-40 gap-y-24 flex flex-col">

      <WelcomeComponent />
      
      <HousesSlideComponent />

      <AboutComponent />

      <ProjectComponent />

      <ServiceComponent />
      
      <HouseComponent />

      <EstateFeatureComponent estate_features={estateFeaturesGeneralData}/>

    </div>
  );
}
