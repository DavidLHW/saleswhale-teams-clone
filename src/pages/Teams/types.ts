import { Action, Category } from "config/teams";

//Server
export type ServerSchema = {
  teams: Array<{
    id: number;
    name: string;
    image: string;
    description: string;
    campaigns_count: number;
    leads_count: number;
    is_favorited: boolean;
    is_archived: boolean;
    created_at?: string;
  }>;
  activities: Array<{
    id: number;
    person: {
      id: number;
      name: string;
      avatar: string;
    };
    action: string;
    target: string;
    created_at: string;
  }>;
  current_user: {
    id: number;
    name: string;
    avatar: string;
    notifications_count: number;
  };
};

//Component
export type Team = {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  campaignsCount: number;
  leadsCount: number;
  category: Category;
  createdAt?: string;
};

export type Activity = {
  id: string;
  name: string;
  imgSrc: string;
  action: Action;
  target: string;
  createdAt: string;
};

export type User = {
  id: string;
  name: string;
  imgSrc: string;
  notifications: number;
};

export type ComponentSchema = {
  teams: Team[];
  activity: Activity[];
  user?: User;
};
