import locale from "locale";

export type Category = "all" | "normal" | "favourites" | "archived";

export type Action = "increaseQuota" | "addLead" | "archiveTeam";

export const category: Array<{ display: string; type: Category }> = [
  {
    display: locale.team.dashboard.category.all,
    type: "all",
  },
  {
    display: locale.team.dashboard.category.favourite,
    type: "favourites",
  },
  {
    display: locale.team.dashboard.category.archived,
    type: "archived",
  },
];

export const activity: { [k in Action]: string } = {
  increaseQuota: locale.team.activity.category.increaseQuota,
  addLead: locale.team.activity.category.addLead,
  archiveTeam: locale.team.activity.category.archiveTeam,
};
