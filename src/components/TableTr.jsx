import axios from 'axios';
import React from 'react';

const TableTr = ({application,index}) => {
    const handleDelete=(_id)=>{
        axios.delete(`http://localhost:3000/applications/${_id}`)
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <>
              {/* row 1 */}
      <tr>
        <th>
          <label>
           {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={application?.company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{application?.company}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button  onClick={()=>handleDelete(application?._id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
        </>
    );
};

export default TableTr;