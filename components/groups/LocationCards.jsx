import Card from "@/components/card/card";
import DroppableItem from "@/components/dragAndDrop/DroppableItem";
import EmptyContent from "@/components/empty/EmptyContent";
import Slide from "../slide/Slide";
import StarVoted from "../voting/StarVoted";

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
            <div
              data-itemid={location.id}
              key={location.id}
              className="flex gap-2"
            >
              <DroppableItem
                key={location.id}
                id={location.id}
                name={location.name}
              >
                <Card key={index} location={location} small />
              </DroppableItem>
              <div className="h-16">
                {group.voting[location.id]?.map((vote, index) => (
                  <div key={vote.username}>
                    <span>{vote.username}</span>
                    <div className="flex">
                      {vote.votes <= 0 ? (
                        <StarVoted key={vote.name} filled={false} />
                      ) : (
                        Array.from({ length: vote.votes }).map(
                          (_, starIndex) => <StarVoted key={starIndex} />
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
