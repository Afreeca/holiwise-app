import Card from "@/components/card/card";
import EmptyContent from "@/components/empty/EmptyContent";
import Star from "../voting/Star";

const LocationCards = ({
  group,
  handleOnDrag,
  handleOnDrop,
  handleDragOver,
}) => {
  if (group.items.length <= 0) {
    return (
      <EmptyContent
        title="No groups found"
        text="You haven't created any groups yet. Start planning your next trip by
        creating groups!"
      />
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold">Location(s) on Voting</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {group.items.map((location, index) => (
          <div
            key={index}
            className="flex gap-2"
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
          >
            <Card
              key={index}
              location={location}
              onDragStart={handleOnDrag}
              simple
            />
            <div className="h-16">
              {group.voting.map((vote, index) => (
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
