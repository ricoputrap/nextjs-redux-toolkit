import { addUser } from '@/redux/userReducer';
import { Inter } from 'next/font/google'
import { useDispatch } from 'react-redux'
import Button from './components/Button'
import router from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function AddUser() {
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const formDataObject: { [key: string]: any } = {};

    // Convert FormData to an object
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log('Form Data:', formDataObject);
    dispatch(addUser(formDataObject));

    // redirect to users page
    router.replace('/');
  }

  return (
    <form className={`flex flex-col gap-4 w-full ${inter.className}`} onSubmit={handleSubmit}>
      {/* name */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="name"
          className="text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="
            bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg
            focus:ring-primary-600 focus:border-primary-600
            block w-full p-2.5"
        />
      </div>

      {/* email */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-900"
        >Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="
            bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg
            focus:ring-primary-600 focus:border-primary-600
            block w-full p-2.5"
        />
      </div>

      {/* role */}
      <div className="flex flex-col">
        <label
          htmlFor="role"
          className="text-sm font-medium text-gray-900"
        >
          Role
        </label>
        <select
          name="role"
          id="role"
          className="
            bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg
            focus:ring-primary-500 focus:border-primary-500
            block w-full p-2.5"
        >
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* status */}
      <div className="flex flex-col">
        <label
          htmlFor="role"
          className="text-sm font-medium text-gray-900"
        >
          Status
        </label>
        <select
          name="status"
          id="status"
          className="
            bg-gray-50 border border-gray-300
            text-gray-900 text-sm rounded-lg
            focus:ring-primary-500 focus:border-primary-500
            block w-full p-2.5"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* submit */}
      <div className="flex justify-end">
        <Button variant='primary' type="submit">
          Add User
        </Button>
      </div>
    </form>
  )
}