import "./index.css";
import { UserCard } from "./UserCard";

export const Users = ({ users = [] }) =>
  users.length === 0 ? (
    <div data-testid="no-users" className="no-users">
      No users present.
    </div>
  ) : (
    <div>
      <div className="title" data-testid="title">
        Your Users
      </div>
      <div data-testid="users" className="users">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
