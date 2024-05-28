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
            2. Features and Functionalities
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
            Description: Users can save their favorite locations for future
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
            3. Current Limitations and Areas for Improvement
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
            mobile compatibility. Honestly I wouldn't use drag and drop for
            mobile. I do not beleive it offers a great user experience. maybe
            just adding a clikc event or menu allowing the users to add location
            to groups
          </p>
          <h3 className="text-xl font-semibold text-gray-700 mb-1">
            Design Decisions
          </h3>
          <p className="mb-2">
            Some design decisions are not optimized for mobile, such as drag and
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
            optimize experience mobile devices.
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
            groups, this should be an asyncronous invitation that has to be
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
            Ensure only authenticated and authorized users can add/remove
            members from groups and, vote
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            7. Conclusion
          </h2>
          <p className="mb-2">Summarize the key points of the document.</p>
          <p className="mb-2">
            Reiterate the importance of addressing the identified issues and
            improvements for better user experience and security.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            8. Author
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