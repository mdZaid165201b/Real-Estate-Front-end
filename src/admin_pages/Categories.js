import axios from "axios";
import React, { useState, useEffect } from "react";

const AdminCategories = () => {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [editModalID, setEditModalID] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/admin/getAllCategories"
      );
      setCategories(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const modalUtilFunc = (id) => {
    setShowModal(true);
    setEditModalID(id);
  };

  const updateCategory = async () => {
    try {
      await axios.put(
        `http://localhost:8000/api/admin/updateCategory/${editModalID}`,
        { name },
        {
          headers: {
            token: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      );
      fetchCategories();
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const deleteCategory = async (id) => {
    setLoading(true);
    try {
      await axios.delete(
        `http://localhost:8000/api/admin/deleteCategory/${id}`,
        {
          headers: {
            token: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      );
      setLoading(false);
      fetchCategories();
    } catch (err) {
      setLoading(false);
      alert(err.response.data.message);
    }
  };

  return (
    <div className="mt-10 sm:absolute mr-2">
      <h1 className="flex justify-start sm:justify-center text-xl mb-7 font-medium underline">
        ALL CATEGORIES
      </h1>
      <div className="relative overflow-hidden  overflow-x-auto shadow-md sm:rounded-lg  flex sm:justify-center">
        <table className="max-w-[1200px] sm:min-w-[1500px]  overflow-x-auto text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
          <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  ID
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>

              <th scope="col" className="px-16 py-3">
                Category
              </th>

              <th scope="col" className="px-12 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="rounded-2xl">
            {categories &&
              categories.map((element, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={element._id}
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <span>{element._id}</span>
                    </div>
                  </td>

                  <td className="px-16 py-4">{element.name}</td>

                  <td className="px-6 py-4 pr-10 sm:pr-0">
                    <div>
                      <a
                        href="#"
                        className="ml-3 font-medium border-2 hover:no-underline border-teal-700 rounded-lg p-2 hover:bg-teal-800 hover:text-white hover:ease-in-out duration-75"
                        onClick={() => modalUtilFunc(element._id)}
                      >
                        Edit
                      </a>

                      <a
                        href="#"
                        className="ml-3 font-medium border-2 hover:no-underline border-red-700 rounded-lg p-2 hover:bg-red-800 hover:text-white hover:ease-in-out duration-75"
                        onClick={() => deleteCategory(element._id)}
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
      {/* test */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full sm:w-[500px] bg-black/80 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-center">
                    UPDATE CATEGORY
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-red-800 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div>
                    <label
                      for="small-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category Name
                    </label>
                    <input
                      type="text"
                      id="small-input"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Category name..."
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setEditModalID("");
                    }}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 hover:bg-emerald-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      updateCategory();
                      setShowModal(false);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default AdminCategories;
