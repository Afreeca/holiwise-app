export const DOCS_DATA = [
  {
    title: "1. Introduction",
    subsections: [
      {
        title: "Purpose of the Document",
        content: [
          "The purpose of this document is to provide a comprehensive overview of the web application designed for organising a group trip. It aims to outline the features and functionalities currently implemented, identify existing limitations and areas for improvement, and propose potential enhancements.",
        ],
      },
      {
        title: "Scope",
        content: [
          "Define the scope of the document, specifying what is covered and any limitations.",
        ],
      },
    ],
  },
  {
    title: "2. Assumptions",
    subsections: [
      {
        title: "Assumptions List",
        content: [
          "Folders are essentially groups and are used interchangeably throughout the application.",
          "The decision was made to not implement any storage solution or in-memory data persistence as the use-case does not need one. Therefore, data is not retained between refresh or sessions.",
          "It is assumed that users already have some friends registered in the application, making it easier for prototyping the process of adding users to groups and voting.",
          "A user can:",
          "create multiple groups/folders",
          "add multiple locations for voting",
          "vote for other users, so we can visualise multiple votes on a location",
        ],
      },
    ],
  },
  {
    title: "3. Features and Functionalities",
    subsections: [
      {
        title: "View All Locations",
        content: [
          "Description: Users can browse all available travel locations.",
        ],
      },
      {
        title: "Save Locations",
        content: [
          "Description: Users can save their favourite locations for future reference.",
        ],
      },
      {
        title: "Create Groups and Add Users",
        content: [
          "Description: Users can create groups and add users to these groups.",
        ],
      },
      {
        title: "Drag and Drop Saved Locations to Groups",
        content: [
          "Description: Users can drag and drop saved locations into the groups they created.",
        ],
      },
      {
        title: "Voting on Locations",
        content: [
          "Description: Group members can vote on the locations that have been dropped into their group folders.",
        ],
      },
    ],
  },
  {
    title: "4. Current Limitations and Areas for Improvement",
    subsections: [
      {
        title: "Drag and Drop Functionality",
        content: [
          "Current Issue: The drag and drop functionality does work well for desktop, but not work perfectly on mobile devices. there are many ways to implement it including using libraries like framer motion.",
          "Improvement Suggestion: Enhance the drag and drop feature for better mobile compatibility. Honestly I wouldn't use drag and drop for mobile. I do not believe it offers a great user experience. maybe just adding a click event or menu allowing the users to add location to groups.",
        ],
      },
      {
        title: "Design Decisions",
        content: [
          "Some design decisions are not optimised for mobile, such as drag and drop functionality, icon sizes, text sizes and even some layouts and processes like voting.",
          "Improvement Suggestion: Redesign icons and text sizes for better mobile usability.",
        ],
      },
      {
        title: "Sub-routing Navigation",
        content: [
          "Lack of clear navigation indicating where the user is within the application. example I could have added a breadcrumbs to the saved page and voting page as well so it shows the user its current location on the sub-route.",
          "Improvement Suggestion: Implement sub-routing navigation on the root page for better user orientation.",
        ],
      },
      {
        title: "Voting Prototype",
        content: [
          "A more robust and real voting functionality requires user registration and login. and more important when adding users to the groups, this should be an asynchronous invitation that has to be accepted by the user and with a proper process to notify the user.",
          "Improvement Suggestion: Implement a registration and login system to allow users to vote properly.",
        ],
      },
      {
        title: "User Management in Groups",
        content: [
          "Current Issue: Missing functionality to add or remove users after group creation.",
          "Improvement Suggestion: Add features to allow users to manage group after creation.",
        ],
      },
      {
        title: "Icons and Text Sizes",
        content: ["Icons and text sizes are not ideal for mobile."],
      },
    ],
  },
  {
    title: "5. Accessibility Considerations",
    subsections: [
      {
        title: "General Accessibility",
        content: [
          "I did not follow and make sure the application meets standard accessibility guidelines React accessibility.",
        ],
      },
    ],
  },
  {
    title: "6. Security Considerations",
    subsections: [
      {
        title: "User Authentication",
        content: ["Implement secure user registration and login processes."],
      },
      {
        title: "Group Management",
        content: [
          "Ensure only authenticated and authorised users can add/remove members from groups and vote.",
        ],
      },
    ],
  },
  {
    title: "7. Future Enhancements",
    subsections: [
      {
        title: "Future Improvements",
        content: [
          "If I had more time available, the following improvements could be made:",
        ],
      },
      {
        title: "List",
        content: [
          "Improve overall desktop and mobile responsiveness for smoother user experience.",
          "Implement user authentication for secure access and personalised features. e.g. with users, we could capture user location and personalise some information like: average flight cost would be different for each user.",
          "Implement a simple 'non-real time' notification system to inform users about group invitations and voting updates, and later on a real-time one.",
          "Add advanced group/folder management features.",
          "Explore alternative drag-and-drop solutions for better mobile compatibility.",
          "Add component tests and usability testing to get more feedback and improve the user experience and interface.",
        ],
      },
    ],
  },
  {
    title: "8. Conclusion",
    subsections: [
      {
        title: "Conclusion",
        content: [
          "In my opinion, this feature is one of the most important aspects of the travel process. Group travelling entails numerous edge cases and considerations, ranging from organising bachelorette parties to simple boys or girls trips.",
          "Features I would like to see as a user and someone who loves to organise group trips include:",
          "- Groups management",
          "- User location integration, so we can personalise key information like flight cost or the best country to meet up in case members live in different countries.",
          "- Ability to add your budget, aiding other members in decision-making and understanding your decisions.",
          "- Monzo or Revolut integration to record country expenses, providing valuable insights into expenditure.",
          "- Keeping a history of previous group trips for future reference or for creating content such as blogs.",
          "- Potential for additional features such as charging users for storing videos and images about the trip.",
          "The objective is to create a single place where users can manage and share everything related to their group travel experiences.",
        ],
      },
      {
        title: "Author",
        content: ["Adilson Mendes"],
      },
    ],
  },
];
