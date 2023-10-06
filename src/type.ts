export type SideBarsState = {
    isActive: boolean;
    isLeftBar: boolean;
    isRigthBar: boolean;
};

export type SideBarType = "right" | "left";

export type Task = {
    id: number;
    title: string;
};
