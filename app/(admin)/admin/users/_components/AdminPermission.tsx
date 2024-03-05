"use client";

import { updateAdminPermission } from "@/actions/user";
import { Admin, User } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface Props extends User {
  users: User[];
}
export const permissionOptions = ["Admin", "User", "Superadmin"];

const AdminPermission = ({ users, id: currentUserId, admin }: Props) => {
  const router = useRouter();
  const [permission, setPermission] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPermission((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      for (const id in permission) {
        if (id && permission[id]) {
          await updateAdminPermission({ id, admin: permission[id] as Admin });
        }
      }
      router.push("/admin/events");
      return;
    } catch (err) {
      console.error(err);
    }
  };

  if (admin !== Admin.Superadmin)
    return (
      <h1>
        You&apos;re not super admin
        <Link href="/" className="prose">
          Go back to home
        </Link>
      </h1>
    );

  return (
    <div>
      <form onSubmit={onSubmit}>
        {users
          .filter((user) => user.id !== currentUserId)
          .map(({ username, admin, id }) => {
            return (
              <div key={id}>
                <h2> {username}</h2>
                <select
                  name={id}
                  onChange={handleChange}
                  value={permission[id] || admin}
                >
                  {permissionOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AdminPermission;
