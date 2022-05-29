# Saleswhale Teams Clone

In this exercise, craft and implement a page from one of the Saleswhale apps. Link to a mockup on [figma](https://www.figma.com/file/4FkR6E9uO8inAth3r4pVNf/SW-Frontend-UI-Test?node-id=0%3A1). You will need to sign up for a figma account to make full use of the available functionality.

The task is to implement a react app that looks as close as possible to the mockup. In addition to the layout, the following functionality is also expected:

1. When the user clicks the All tab, they should see All Teams
2. When the user clicks the Favorites tab, they should only see their Favorited Teams
3. When the user clicks on the Archived tab, they should only see Archived teams.

Interface with a mock API response is expected and can be found at `src\mock-data.json`. Loading the data directly from the file is not required.

<p align="center">
  <a href="https://www.figma.com/file/4FkR6E9uO8inAth3r4pVNf/SW-Frontend-UI-Test?node-id=0%3A1">
    <img src="/image/figma_screenshot.jpg" alt="Figma" width="800" />
  </a>
</p>

## Getting Started

### Prerequisites

- node.js v14.x
- npm v6.14.x

### Installing build

```shell
# Clone Repository
git clone https://github.com/DavidLHW/saleswhale-teams-clone.git
```

```shell
# Change directory
cd saleswhale-teams-clone
```

```shell
# Install dependencies with clean install
npm ci
```

```shell
# Make build
npm run build
```

```shell
# Serve build with a static server
npx serve -s build
```

## Usage

### Locale

> Located in `/src/locale/index.ts`

The locale file specifies the string used throughout the web app. Its purpose is to allow easy reconfiguration of the string texts in the app.

### Config

> Located in `/src/config/teams.ts`

#### `category`

Specifies the total number of team categories and their string representation (order-sensitive).

#### `activity`

Specifies the string rendering behavior in respect to the type of actions in the activity component.
