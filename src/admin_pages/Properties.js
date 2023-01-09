import axios from "axios";
import React, { useState, useEffect } from "react";

const AdminProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProperties = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/admin/getAllProperties"
      );
      setProperties(response.data.data);
    } catch (err) {
      alert(err.response.message);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const deleteProperty = async (id) => {
    try {
      setLoading(true);
      await axios.delete(
        `http://localhost:8000/api/admin/deleteProperty/${id}`,
        {
          headers: {
            token: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      );
      setLoading(false);
      fetchProperties();
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="mt-10 sm:absolute mr-2">
      <h1 className="flex justify-start sm:justify-center text-xl mb-7 font-medium">
        ALL PROPERTIES
      </h1>
      <div className="relative overflow-hidden  overflow-x-auto shadow-md sm:rounded-lg  flex sm:justify-center">
        <table className="max-w-[1200px] sm:min-w-[1500px]  overflow-x-auto text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
          <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div class="flex items-center">
                  ID
                  <label for="checkbox-all-search" class="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-16 py-3">
                Profile
              </th>
              <th scope="col" className="px-16 py-3">
                Category ID
              </th>

              <th scope="col" className="px-12 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="rounded-2xl">
            {properties &&
              properties.map((element) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <span>{element._id}</span>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="flex items-center px-16 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      className="w-20 h-20 rounded-full object-cover"
                      src={element.coverImage.url}
                      alt="Jese image"
                    />
                  </th>
                  <td className="px-16 py-4">{element.category}</td>

                  <td className="px-6 py-4 pr-10 sm:pr-0">
                    <div>
                      {/* <a
                    href="#"
                    class="ml-3 font-medium border-2 hover:no-underline border-teal-700 rounded-lg p-2 hover:bg-teal-800 hover:text-white hover:ease-in-out duration-75"
                  >
                    Edit
                  </a> */}
                      <a
                        href="#"
                        className="ml-3 font-medium border-2 hover:no-underline border-red-700 rounded-lg p-2 hover:bg-red-800 hover:text-white hover:ease-in-out duration-75"
                        onClick={() => deleteProperty(element._id)}
                      >
                        {loading ? "loading" : "Delete"}
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProperties;
