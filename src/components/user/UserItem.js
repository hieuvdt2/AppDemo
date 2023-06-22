import React from "react";
import EyeSvg from "../svg/EyeSvg";
import Delete from '../svg/Delete'
const UserItem = ({ user, handleClickView }) => {
  return (
    <>
      <tr className="border-b">
        <td className="px-6 py-4 space-nowrap text-sm font-medium ">
          {user?.id}
        </td>
        <Field>{user?.userId}</Field>
        <Field>{user?.title}</Field>
        <Field >
          <div className='flex'>
          <span onClick={() => handleClickView(user)}><EyeSvg /></span>
          <span onClick={() => alert('delete here')}><Delete /></span>       
       </div>
    
        </Field>
      </tr>
    </>
  );
};

const Field = ({ children }) => (
  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
    {children}
  </td>
);

export default UserItem;
