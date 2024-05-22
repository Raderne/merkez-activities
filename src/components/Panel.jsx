import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useGlobalContext } from "../utils/context";
import { useEffect } from "react";

const Panel = () => {
  const navigate = useNavigate();
  const { StorageAdminUser } = useGlobalContext();

  useEffect(() => {
    if (!StorageAdminUser) {
      navigate("/login");
    }
  }, [StorageAdminUser, navigate]);

  return (
    <>
      <Navbar />

      <div className="relative flex flex-col gap-y-4 items-center mt-8 mb-14">
        <h1 className="text-center text-4xl font-bold">Etkinlik Formu</h1>
        <div className="w-[50vw] py-8 px-10 border border-gray-400 rounded-lg shadow-lg">
          <div className="">
            <label htmlFor="title" className="block text-lg font-semibold">
              Etkinlik Ad:
            </label>
            <input
              type="text"
              id="title"
              className=" w-full p-2 border border-gray-400 rounded-lg mt-2"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="description"
              className="block text-lg font-semibold"
            >
              Açıklama:
            </label>
            <input
              type="text"
              id="description"
              className=" w-full p-2 border border-gray-400 rounded-lg mt-2"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="date" className="block text-lg font-semibold">
              Tarih:
            </label>
            <input
              type="date"
              id="date"
              className=" w-full p-2 border border-gray-400 rounded-lg mt-2"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="time" className="block text-lg font-semibold">
              Saat:
            </label>
            <input
              type="time"
              id="time"
              className=" w-full p-2 border border-gray-400 rounded-lg mt-2"
            />
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <div className="flex-1">
              <label htmlFor="quota" className="block text-lg font-semibold">
                kontenjan:
              </label>
              <input
                type="number"
                id="quota"
                className=" w-full p-2 border border-gray-400 rounded-lg mt-2"
                min={0}
              />
            </div>

            <div className="flex-1">
              <label htmlFor="salon" className="block text-lg font-semibold">
                Salonu:
              </label>
              <select
                id="salon"
                className=" w-full p-2 border border-gray-400 rounded-lg mt-2"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="image" className="block text-lg font-semibold">
              Resim:
            </label>
            <input
              type="file"
              id="image"
              className=" w-full p-2 border border-gray-400 rounded-lg mt-2"
            />
          </div>

          <button className="w-full bg-blue-500 text-white text-lg font-semibold py-2 mt-6 rounded-lg hover:bg-blue-600 transition-all duration-200">
            Ekle
          </button>
        </div>
      </div>
    </>
  );
};

export default Panel;
