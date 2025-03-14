"use client"
import React, { useEffect } from 'react'
import { CardBackgroundComponent } from '../shared-components/CardBackgroundComponent'
import { useDispatch } from 'react-redux'
import { setNavValue } from '@/app/state_management/reducers/client-reducers/navValue'
import { IProjectInfo } from '@/app/interfaces/ITypeData'
import { MoreProjects } from './MoreProjects'
import { ProjectsUpCloseComponent } from './ProjectsUpCloseComponent'
import { ProjectsInfoComponent } from './ProjectsInfoComponent'
import { ProjectEstateFeatureComponent } from './ProjectEstateFeatureComponent'




export const ProjectsBaseComponent:React.FC<IProjectInfo> = (projectDataResponse) => {
    const dispatch= useDispatch();
    
    useEffect(() => {
        dispatch(setNavValue({ action: "Projects" }));
    }, []);

    
    return (
        <div className="-mt-[80px] pb-[120px] gap-y-24 flex flex-col">

            <CardBackgroundComponent imagePath='/images/pictures/pages/project.webp' title='Projects' />

            <ProjectsInfoComponent title={projectDataResponse.title} projectData={projectDataResponse.projectData} />

            <ProjectEstateFeatureComponent estate_features={projectDataResponse.projectData.estate_features}/>

            <ProjectsUpCloseComponent picture={projectDataResponse.projectData.project_up_close}/>

            <MoreProjects title={projectDataResponse.title}/>


        </div>
    )
}
