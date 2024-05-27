import Card from "@/components/card/card";
import EmptyContent from "@/components/empty/EmptyContent";
import Slide from "../slide/Slide";
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
      <div className="flex flex-row flex-wrap gap-16">
        <Slide>
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
                small
              />
              <div className="h-16">
                {group.voting[location.id]?.map((vote, index) => (
                  <div key={index}>
                    <span>{vote.username}</span>
                    <div className="flex">
                      {vote.votes <= 0 ? (
                        <Star username={vote.username} filled={false} />
                      ) : (
                        Array.from({ length: vote.votes }).map(
                          (_, starIndex) => (
                            <Star key={starIndex} username={vote.username} />
                          )
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default LocationCards;
