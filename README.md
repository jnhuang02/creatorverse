# WEB103 Prework - Creatorverse

Submitted by: **Justin Huang**

About this web app: **Creatorverse is a React-based web application that allows users to browse, view, add, edit, and delete content creators. It uses Supabase as a backend to store creator details such as name, URL, description, and image.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed as cards instead of a simple list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

- [x] Responsive grid layout for displaying creator cards
- [x] Navigation between pages without reload using `react-router-dom`
- [x] Default avatar if no imageURL used


## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **Kap** for macOS

## Notes

One of the main challenges was setting up Supabase correctly, especially making sure `.env` variables were properly configured and imported in Vite.  
Another challenge was fixing module import/export issues in React components.

## License

Copyright [2025] [Justin Huang]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
