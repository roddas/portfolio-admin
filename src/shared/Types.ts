export type JSONResponseType = {
    data?: any;
    message?:
        | 'Information was updated successfully.'
        | 'Information was deleted successfully.'
        | 'Information was created successfully.'
        | 'Not Found'
        | 'Internal Server Error'
        | 'OK'
        | 'No Content';
    statusCode: 404 | 201 | 200 | 500 | 204;
};
export type AboutType = {
    id: string;
    fullName: string;
    occupation: string;
    localOfOccupation: string;
};

export type ProjectType = {
    id: string;
    title: string;
    projectDescription: string;
    state: string;
    link: string;
    image: string;
};

export type EducationType = {
    id: string;
    school: string;
    course: string;
    currentemester: string | null;
    graduated: boolean;
};

export type LanguagesAndToolsType = {
    id: string;
    toolImage: string;
};

export type SoftSkillsType = {
    id: string;
    softSkill: string;
};

export type SoftEngHardSkillsType = {
    id: string;
    hardSkill: string;
};

export type PentestHardSkillsType = {
    id: string;
    hardSkill: string;
};

export type WorkXPType = {
    id: string;
    company: string;
    role: string;
    description: string;
    startDate: Date;
    endDate: Date;
};

export type IdiomType = {
    id: string;
    language: string;
    written: string;
    spoken: string;
};
