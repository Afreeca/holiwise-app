import { DOCS_DATA } from "@/utils/docsData";
import "tailwindcss/tailwind.css";

const TravelAppDocumentation = () => {
  const documentData = DOCS_DATA;

  return (
    <div className="max-w-4xl mx-auto p-8 h-full">
      <h1 className="md:text-3xl text-lg font-bold text-center mb-8">
        {documentData.title}
      </h1>

      <div className="overflow-auto h-5/6">
        {documentData.sections.map((section, index) => (
          <section key={index} className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {section.title}
            </h2>
            {section.subsections &&
              section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="mb-4">
                  {subsection.title && (
                    <h3 className="text-xl font-semibold text-gray-700 mb-1">
                      {subsection.title}
                    </h3>
                  )}
                  {subsection.content && (
                    <p
                      className="mb-2"
                      dangerouslySetInnerHTML={{ __html: subsection.content }}
                    />
                  )}
                  {subsection.contentBold && (
                    <p className="mb-2 font-semibold">
                      {subsection.contentBold}
                    </p>
                  )}
                  {subsection.listItems && (
                    <ul className="list-disc ml-6">
                      {subsection.listItems.map((item, itemIndex) =>
                        typeof item === "string" ? (
                          <li key={itemIndex}>{item}</li>
                        ) : (
                          <li key={itemIndex} className="mb-2">
                            {item.content}
                            <ul className="ml-8 list-disc">
                              {item.nestedList &&
                                item.nestedList.map(
                                  (nestedItem, nestedIndex) => (
                                    <li key={nestedIndex}>{nestedItem}</li>
                                  )
                                )}
                            </ul>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
              ))}
            {section.listItems && (
              <ul className="list-disc ml-6">
                {section.listItems.map((item, itemIndex) =>
                  typeof item === "string" ? (
                    <li key={itemIndex}>{item}</li>
                  ) : (
                    <li key={itemIndex} className="mb-2">
                      {item.content}
                      <ul className="ml-8 list-disc">
                        {item.nestedList &&
                          item.nestedList.map((nestedItem, nestedIndex) => (
                            <li key={nestedIndex}>{nestedItem}</li>
                          ))}
                      </ul>
                    </li>
                  )
                )}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default TravelAppDocumentation;
