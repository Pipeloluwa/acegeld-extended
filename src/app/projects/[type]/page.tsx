import { ProjectsBaseComponent } from '@/app/components/projects-components/ProjectsBaseComponent';
import { IProjectBaseData } from '@/app/interfaces/ITypeData';
import { projectsData } from '@/app/variables/projectsVariables';
import { notFound } from 'next/navigation';





export default async function HouseTypes ({params}:any) {
    const {type}= await params;
    
    const fetchData= ():IProjectBaseData => {
        try {
            const response:IProjectBaseData= projectsData[type]
            if (!response){
                notFound();
            }

            return response;
        } catch (error) {
               notFound();
        }
    }

    const projectDataResult = fetchData();



  return (
    <ProjectsBaseComponent title={type} projectData={projectDataResult}/>
  )
}
