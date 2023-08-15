import React from 'react'
import { useSelector } from 'react-redux';
import Button from './Button';

const UserTable: React.FC = () => {
  const users = useSelector((state: any) => state.users);

  return (
    <table className="w-full h-fit text-sm text-center text-gray-600">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          <th className="px-4 py-3">Name</th>
          <th className="px-4 py-3">Email</th>
          <th className="px-4 py-3">Role</th>
          <th className="px-4 py-3">Status</th>
          <th className="px-4 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: any) => (
          <tr key={user.id} className="bg-white">
            <td className="px-4 py-3">
              <div className="flex justify-center items-center text-sm">
                {user.name}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex justify-center items-center text-sm">
                {user.email}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex justify-center items-center text-sm">
                {user.role}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex justify-center items-center text-sm">
                {user.status}
              </div>
            </td>
            <td className="px-4 py-3">
              <div className="flex justify-center items-center text-sm gap-2">
                <Button variant="primary" onClick={() => console.log('Edit')}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => console.log('Edit')}>
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable