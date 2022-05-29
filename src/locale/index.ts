export default {
  header: {
    brand: "NARWHAL",
    title: "Teams",
    greeting: "Hello, {{ 1 }}",
  },
  team: {
    dashboard: {
      title: "Teams",
      create: "CREATE NEW TEAM",
      searchPlaceholder: "Search team name...",
      category: {
        all: "All",
        favourite: "Favourite",
        archived: "Archived",
      },
    },
    activity: {
      title: "Activity",
      category: {
        increaseQuota: "{{ 1 }} increased {{ 2 }}'s quota.",
        addLead: "{{ 1 }} added new leads to {{ 2 }}.",
        archiveTeam: "{{ 1 }} archived the team {{ 2 }}.",
      },
    },
    team: {
      title: "All Teams",
      pageInfo: "Showing {{ 1 }} out of {{ 2 }} teams",
      createdOn: "Created on {{ 1 }}",
      archivedOn: "Archived on {{ 1 }}",
      count: {
        campaigns: "Campaigns",
        leads: "Leads",
      },
      menu: {
        archive: "Archive card",
        favourite: "Add to favourite",
        removeFavourite: "Remove favourite",
      },
    },
  },
};
