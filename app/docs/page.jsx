import "tailwindcss/tailwind.css";

const TravelAppDocumentation = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 h-full">
      <h1 className="md:text-3xl text-lg font-bold text-center mb-8">
        Web Application Document for Travel Agency
      </h1>

      <div className="overflow-auto h-5/6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            1. Introduction
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Purpose of the Document
          </h3>
          <p className="mb-2">
            The purpose of this document is to provide a comprehensive overview
            of the web application designed for a travel agency. It aims to
            outline the features and functionalities currently implemented,
            identify existing limitations and areas for improvement, and propose
            potential enhancements.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">Scope</h3>
          <p className="mb-2">
            Define the scope of the document, specifying what is covered and any
            limitations.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            2. Assumptions
          </h2>
          <ul className="list-disc ml-6">
            <li>
              Folders are essentially groups and are used interchangeably
              throughout the application.
            </li>
            <li>
              The decision was made to not implement any storage solution or
              in-memory data persistence as the use-case does not need one.
              Therefore, data is not retained between refresh or sessions.
            </li>
            <li>
              It is assumed that users already have some friends registered in
              the application, making it easier for prototyping the process of
              adding users to groups and voting.
            </li>
            <ul>
              <li className="list-disc">
                A user can:
                <ul className="ml-8 list-disc">
                  <li>create multiple groups/folders</li>
                  <li>add multiple locations for voting</li>
                  <li>
                    vote for other users, so we can visualise multiple votes on
                    a location
                  </li>
                </ul>
              </li>
            </ul>

            {/* Add more assumptions as needed */}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            3. Features and Functionalities
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            View All Locations
          </h3>
          <p className="mb-2">
            Description: Users can browse all available travel locations.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Save Locations
          </h3>
          <p className="mb-2">
            Description: Users can save their favourite locations for future
            reference.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Create Groups and Add Users
          </h3>
          <p className="mb-2">
            Description: Users can create groups and add users to these groups.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Drag and Drop Saved Locations to Groups
          </h3>
          <p className="mb-2">
            Description: Users can drag and drop saved locations into the groups
            they created.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Voting on Locations
          </h3>
          <p className="mb-2">
            Description: Group members can vote on the locations that have been
            dropped into their group folders.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            4. Current Limitations and Areas for Improvement
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Drag and Drop Functionality
          </h3>
          <p className="mb-2">
            Current Issue: The drag and drop functionality does work well for
            desktop, but not work perfectly on mobile devices. there are many
            ways to implement it including using libraries like{" "}
            <a
              href="https://www.framer.com/motion/"
              className="text-blue-500 hover:underline"
            >
              framer motion
            </a>
          </p>
          <p className="mb-2">
            Improvement Suggestion: Enhance the drag and drop feature for better
            mobile compatibility. Honestly I wouldn&apos;t use drag and drop for
            mobile. I do not believe it offers a great user experience. maybe
            just adding a click event or menu allowing the users to add location
            to groups
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Design Decisions
          </h3>
          <p className="mb-2">
            Some design decisions are not optimised for mobile, such as drag and
            drop functionality, icon sizes, text sizes and even some layouts and
            processes like voting.
          </p>
          <p className="mb-2">
            Improvement Suggestion: Redesign icons and text sizes for better
            mobile usability
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Drag and Drop Functionality
          </h3>
          <p className="mb-2">
            replace drag and drop for a different method to a better and more
            optimised experience mobile devices.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Sub-routing Navigation
          </h3>
          <p className="mb-2">
            Lack of clear navigation indicating where the user is within the
            application. example I could have added a breadcrumbs to the saved
            page and voting page as well so it shows the user its current
            location on the sub-route
          </p>
          <p className="mb-2">
            Improvement Suggestion: Implement sub-routing navigation on the root
            page for better user orientation.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Voting Prototype
          </h3>
          <p className="mb-2">
            A more robust and real voting functionality requires user
            registration and login. and more important when adding users to the
            groups, this should be an asynchronous invitation that has to be
            accepted by the user and with a proper process to notify the user
          </p>

          <p className="mb-2">
            Improvement Suggestion: Implement a registration and login system to
            allow users to vote properly.
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            User Management in Groups
          </h3>
          <p className="mb-2">
            Current Issue: Missing functionality to add or remove users after
            group creation.
          </p>
          <p className="mb-2">
            Improvement Suggestion: Add features to allow users to manage group
            after creation.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Icons and Text Sizes
          </h3>
          <p className="mb-2">Icons and text sizes are not ideal for mobile.</p>
          <p className="mb-2">
            Improvement Suggestion: Adjust the design to improve readability and
            usability on mobile devices.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            5. Accessibility Considerations
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            General Accessibility
          </h3>
          <p className="mb-2">
            I did not follow and make sure the application meets standard
            accessibility guidelines{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://legacy.reactjs.org/docs/accessibility.html"
            >
              React accessibility
            </a>
            .
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            6. Security Considerations
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            User Authentication
          </h3>
          <p className="mb-2">
            Implement secure user registration and login processes.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Group Management
          </h3>
          <p className="mb-2">
            Ensure only authenticated and authorised users can add/remove
            members from groups and vote.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            7. Future Enhancements
          </h2>
          <p className="mb-2">
            If I had more time available, the following improvements could be
            made:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Improve overall desktop and mobile responsiveness for smoother
              user experience.
            </li>
            <li>
              Implement user authentication for secure access and personalised
              features. e.g. with users, we could capture user location and
              personalise some information like: average flight cost would be
              different for each user.
            </li>
            <li>
              Implement a simple &quot;non-real time&quot; notification system
              to inform users about group invitations and voting updates, and
              later on a real-time one.
            </li>
            <li>Add advanced group/folder management features.</li>
            <li>
              Explore alternative drag-and-drop solutions for better mobile
              compatibility.
            </li>
            <li>
              Add component tests and usability testing to get more feedback and
              improve the user experience and interface.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            8. Conclusion
          </h2>
          <p className="mb-2 font-semibold">Group feature</p>
          <p>
            In my opinion, this feature is one of the most important aspects of
            the travel process. Group travelling entails numerous edge cases and
            considerations, ranging from organising bachelorette parties to
            simple boys or girls trips.
          </p>
          <ul className="list-disc list-inside mb-2">
            <li>
              Features I would like to see as a user and someone who loves to
              organise group trips include:
              <ul className="list-disc list-inside">
                <li>Groups management</li>
                <li>
                  User location integration, so we can personalise key
                  information like flight cost or the best country to meet up in
                  case members live in different countries.
                </li>
                <li>
                  Ability to add your budget, aiding other members in
                  decision-making and understanding your decisions.
                </li>
                <li>
                  Monzo or Revolut integration to record country expenses,
                  providing valuable insights into expenditure.
                </li>
                <li>
                  Keeping a history of previous group trips for future reference
                  or for creating content such as blogs.
                </li>
                <li>
                  Potential for additional features such as charging users for
                  storing videos and images about the trip.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            The objective is to create a single place where users can manage and
            share everything related to their group travel experiences.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            9. Author
          </h2>
          <h2 className="text-xl font-semibold text-gray-700 mb-1">
            Adilson Mendes
          </h2>
        </section>
      </div>
    </div>
  );
};

export default TravelAppDocumentation;
