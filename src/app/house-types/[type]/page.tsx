import { HouseTypeBaseComponent } from '@/app/components/house-type-components/HouseTypeBaseComponent';
import { IHouseTypeBaseData } from '@/app/interfaces/ITypeData';
import { houseTypeData } from '@/app/variables/houseVariables';
import { notFound } from 'next/navigation';





export default async function HouseTypes ({params}:any) {
    const {type}= await params;
    
    const fetchData= ():IHouseTypeBaseData => {
        try {
            const response:IHouseTypeBaseData= houseTypeData[type]
            if (!response){
                notFound();
            }

            return response;
        } catch (error) {
               notFound();
        }
    }

    const houseData = fetchData();



  return (
    <HouseTypeBaseComponent title={type} houseData={houseData}/>
  )
}
