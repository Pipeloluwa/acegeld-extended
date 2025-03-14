export interface IProjectsHouseBaseType {
    title: string;
    description: string;
    picture: string;
}


export interface IProjectsHouseType {
    title: string;
    projectsHouseType: IProjectsHouseBaseType[]
}


export interface IHouseUpClose {
    link_3d: string;
    picture: string[];
}

export interface IThreeD {
    link_3d: string;
}


export interface IProjectUpClose {
    picture: string[];
}


export interface IHouseTypeBaseData {
    description: string;
    surface_area: number;
    parking_spaces: number;
    "maid's quarters": number;
    bedrooms: number;
    bathrooms: number;
    living_rooms: number;
    picture: string;
    link_3d: string;
    house_up_close: string[];
    "more_house_type_projects": IProjectsHouseBaseType[]
}


export interface IHouseTypeData {
    [key: string]: IHouseTypeBaseData;
}



export interface IHouseTypeInfo {
    title: string;
    houseData: IHouseTypeBaseData;
}




export interface IEstateBaseData {
    title: string;
    description: string;
    icon: JSX.Element;
}


export interface IEstateData {
    "estate_features": IEstateBaseData[];
}


export interface IProjectBaseData {
    description: string;
    picture: string;
    location: string;
    "estate_features": {
        title: string;
        description: string;
        icon: JSX.Element;
    }[];
    project_up_close: string[];
    "more_projects": IProjectsHouseBaseType[]
}


export interface IProjectData {
    [key: string]: IProjectBaseData;
}


export interface IProjectInfo {
    title: string;
    projectData: IProjectBaseData;
}