import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-black text-white flex justify-center items-center">
      <p className="font-medium animate-pulse">Login and Signup sample forms</p>
      <button
        className="text-xs md:text-lg m-2 bg-gray-600/40 py-2 px-3 rounded-lg border-[0.5px] border-white hover:bg-gray-400/40 transition duration-200"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
      <button
        className="text-xs md:text-lg m-2 bg-gray-600/40 py-2 px-3 rounded-lg border-[0.5px] border-white hover:bg-gray-400/40 transition duration-200"
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Home;
