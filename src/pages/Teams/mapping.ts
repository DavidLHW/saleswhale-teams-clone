import { Action, Category } from "config/teams";
import type { ServerSchema, ComponentSchema } from "./types";

function getCategory(is_favourited: boolean, is_archived: boolean): Category {
  if (is_favourited) return "favourites";
  if (is_archived) return "archived";
  return "normal";
}

function getAction(action: string): Action {
  switch (action) {
    case "increased_quota":
      return "increaseQuota";
    case "added_leads":
      return "addLead";
    case "archived_team":
      return "archiveTeam";

    default:
      return "increaseQuota";
  }
}

export function mapToComponent(schema: ServerSchema) {
  const reactSchema: ComponentSchema = {
    teams: [],
    activity: [],
    user: undefined,
  };

  //Teams
  schema.teams.forEach((t) => {
    reactSchema.teams.push({
      id: t.id.toString(),
      name: t.name,
      imageSrc: t.image,
      description: t.description,
      campaignsCount: t.campaigns_count,
      leadsCount: t.leads_count,
      category: getCategory(t.is_favorited, t.is_archived),
      createdAt: t.created_at,
    });
  });

  //Activities
  schema.activities.forEach((a) => {
    reactSchema.activity.push({
      id: a.id.toString(),
      name: a.person.name,
      imgSrc: a.person.avatar,
      action: getAction(a.action),
      target: a.target,
      createdAt: a.created_at,
    });
  });

  //Current User
  reactSchema.user = {
    id: schema.current_user.id.toString(),
    name: schema.current_user.name,
    imgSrc: schema.current_user.avatar,
    notifications: schema.current_user.notifications_count,
  };

  return reactSchema;
}
