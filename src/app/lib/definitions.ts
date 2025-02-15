export enum Majors {
    A,
    B,
};

export type Pardner = {
    id: number;
    username: string;
    password: string;
    major: Majors;
    activeRelationship: Relationship;
    inactiveRelationships: Relationship[];
    };

export type Hitchin = {
    id: number;
    name: string;
    exp: number;
    activeRelationship: Relationship;
    inactiveRelationships: Relationship[];
    moveOutTime: Date;
    targetArchetype: Target;
    };


export type Target = {
    id: number;
    major: Majors;
    };

export type Relationship = {
    id: number;
    pardner: Pardner;
    hitchin: Hitchin;
    active: boolean;
}