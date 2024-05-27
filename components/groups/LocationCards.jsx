import Card from "@/components/card/card";
import DroppableItem from "@/components/dragAndDrop/DroppableItem";
import EmptyContent from "@/components/empty/EmptyContent";
import Slide from "../slide/Slide";
import Star from "../voting/Star";

const LocationCards = ({ group }) => {
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
            <DroppableItem key={location.id} id={location.id}>
              <div
                data-itemid={location.id}
                key={location.id}
                className="flex gap-2"
              >
                <Card key={index} location={location} small />
                <div className="h-16">
                  {group.voting[location.id]?.map((vote) => (
                    <div key={vote.username}>
                      <span>{vote.username}</span>
                      <div className="flex">
                        {vote.votes <= 0 ? (
                          <Star
                            key={vote.username}
                            username={vote.username}
                            filled={false}
                          />
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
            </DroppableItem>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default LocationCards;
