import Card from "@/components/card/card";
import EmptyContent from "@/components/empty/EmptyContent";
import Star from "../voting/Star";

const LocationCards = ({
  group,
  handleOnDrag,
  handleOnDrop,
  handleDragOver,
}) => {
  if (group?.items.length <= 0) {
    return (
      <EmptyContent
        title="No Trip Locations Added"
        text="You haven't added any trip locations for others to vote on yet. Start planning your next adventure by adding some exciting destinations!"
      />
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold">Location(s) on Voting</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {group?.items.map((location, index) => (
          <div
            key={index}
            className="flex gap-2"
            onDrop={(e) => handleOnDrop(e, location.id)}
            onDragOver={handleDragOver}
          >
            <Card
              key={index}
              location={location}
              onDragStart={handleOnDrag}
              simple
            />
            <div className="h-16">
              {group.voting[location.id]?.map((vote, index) => (
                <div key={index}>
                  <span>{vote.username}</span>
                  <div className="flex">
                    {vote.votes <= 0 ? (
                      <Star username={vote.username} filled={false} />
                    ) : (
                      Array.from({ length: vote.votes }).map((_, starIndex) => (
                        <Star key={starIndex} username={vote.username} />
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCards;
