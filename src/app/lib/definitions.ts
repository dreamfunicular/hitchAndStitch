export type Pardner = {
    id: number;
    username: string;
    password: string;
    major: number;
    currentRelationship: number;
    pastRelationshipIDs: number[];
    authtoken: string;
    };

export type Hitchin = {
    id: number;
    name: string;
    exp: number;
    currentRelationshipID: number;
    pastRelationshipIDs: number[];
    moveOutTime: Date;
    target: number;
    };

export type Relationship = {
    id: number;
    pardnerID: number;
    hitchinID: number;
    active: boolean;
}