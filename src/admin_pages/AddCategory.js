import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addCategory = async () => {
    console.log("addCategory function...");
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/createCategory",
        { name },
        {
          headers: {
            token: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      );
      setLoading(false);
      response.data.success
        ? navigate("/admin/dashboard/categories", { replace: true })
        : alert("something went wrong!!!");
    } catch (err) {
      setLoading(false);
      alert(err.response.message);
    }
  };

  return (
    <div className="relative">
      <div className="left-[0px] absolute top-[150px] sm:absolute sm:h-[calc(100vh-70px)]  sm:top-[70px] sm:w-[calc(100vw-300px)]  overflow-y-auto overflow-hidden">
        <div className="flex flex-col p-9">
          <div className="text-lg text-center sm:text-2xl mb-10 font-medium uppercase underline">
            <h1>Add Category Form</h1>
          </div>

          <div className="mb-10">
            <div>
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category Name
              </label>
              <input
                type="text"
                id="small-input"
                class="block w-full p-4 text-gray-900 border border-blue-900 rounded-lg bg-gray-800 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-red-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Category Name..."
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-red-700 p-3 mx-auto rounded-md hover:bg-red-800 ease-in-out duration-150 disabled:opacity-50"
            disabled={loading ? true : false}
            onClick={addCategory}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
