import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const WhatsappPage = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState("");
  const numberRef = useRef();

  const fetchNumber = async () => {
    const resp = await axios.get(
      "http://localhost:8000/api/admin/getWhatsapp",
      {
        headers: {
          token: "Bearer " + window.localStorage.getItem("token"),
        },
      }
    );
    setNumber(resp.data.data.whatsappNumber);
  };
  const updateNumber = async () => {
    setLoading(true);
    try {
      await axios.put(
        "http://localhost:8000/api/admin/update",
        { whatsappNumber },
        {
          headers: {
            token: "Bearer " + window.localStorage.getItem("token"),
          },
        }
      );
      setLoading(false);
      numberRef.current.value = "";
      fetchNumber();
    } catch (err) {
      setLoading(false);
      numberRef.current.value = "";
      alert(err.response.data.message);
    }
  };
  useEffect(() => {
    fetchNumber();
  }, []);

  return (
    <div className="flex justify-center h-screen mt-14">
      <div>
        <div className="text-lg text-center sm:text-2xl mb-10 font-medium uppercase underline">
          <h1>UPDATE WHATSAPP NUMBER</h1>
        </div>
        <h1 className="flex justify-center font-medium">{number}</h1>
        <div className="mb-10 sm:min-w-[700px]">
          <div>
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Whatsapp Number
            </label>
            <input
              type="number"
              ref={numberRef}
              min={0}
              id="small-input"
              className="block w-full p-4 text-gray-900 border border-blue-900 rounded-lg bg-gray-800 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Category Name..."
              required
              onChange={(e) => setWhatsappNumber(e.target.value)}
            />
          </div>
        </div>
        <button
          className="bg-red-700 px-5 py-3 flex justify-center mx-auto rounded-md hover:bg-red-800 ease-in-out duration-150"
          onClick={updateNumber}
        >
          {loading ? "loading" : "Update"}
        </button>
      </div>
    </div>
  );
};

export default WhatsappPage;
