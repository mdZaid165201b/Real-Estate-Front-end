import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProperty = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
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
    fetchCategories();
  });

  const addProperty = async () => {
    setLoading(true);
    try {
      let formData = new FormData();
      for (const file of files) {
        formData.append("image", file);
      }
      formData.append("category", selectedCategory);

      // for(const pair of formData.entries()){
      //   console.log(`${pair[0]}, ${pair[1]}`)
      // }
      await axios.post(
        "http://localhost:8000/api/admin/addProperty",
        formData,
        {
          headers: {
            token: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      );
      setLoading(false);
      navigate("../properties", { replace: true });
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert("something went wrong!!!");
    }
  };

  return (
    <div className="relative">
      <div className="left-[0px] absolute top-[150px] sm:absolute sm:h-[calc(100vh-70px)]  sm:top-[70px] w-[300px] sm:w-[calc(100vw-300px)]  overflow-y-auto overflow-hidden">
        <div className="flex flex-col p-9">
          <div className="text-xl text-center sm:text-2xl mb-10 font-medium uppercase underline">
            <h1>Add Property Form</h1>
          </div>
          {/* <div className="py-0 flex justify-start sm:py-4">
            <div className="ml-5 text-md sm:text-2xl font-medium tracking-wide">
              <h1 className="">{}</h1>
            </div>
          </div> */}
          <div className="flex flex-wrap mb-10 justify-center">
            <label
              class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              for="multiple_files"
            >
              Upload Images
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="multiple_files"
              type="file"
              multiple
              onChange={(e) => setFiles(Array.from(e.target.files))}
            />
          </div>
          <div className="mb-10">
            <label
              for="countries"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Category
            </label>
            <select
              id="countries"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option selected>Choose a category</option>
              {categories &&
                categories.map((element) => (
                  <option key={element._id} value={element._id}>
                    {element.name}
                  </option>
                ))}
            </select>
          </div>
          <button
            className="bg-red-700 p-3 mx-auto rounded-md hover:bg-red-800 ease-in-out duration-150 disabled:opacity-25"
            onClick={addProperty} disabled={loading ? true : false}
          >
            {loading ? "loading" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
