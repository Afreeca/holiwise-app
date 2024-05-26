import Star from "@/components/voting/Star";

const UserCards = ({ group, handleOnDrag }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">Users</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {group.users.map((user, index) => (
          <div key={index} className="p-4 border rounded-md">
            <p>{user.name}</p>
            {Array.from({ length: 1 }).map((_, starIndex) => (
              <Star
                key={starIndex}
                username={user.name}
                onDragStart={handleOnDrag}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCards;
