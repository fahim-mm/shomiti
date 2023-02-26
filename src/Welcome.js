import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="w-screen h-screen  ">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('com.png')" }}
      >
        <div className="w-full h-full flex flex-row-reverse">
          <h1 className=" text-red-900 w-[22%] h-[10%] text-4xl font-bold border-2  bg-indigo-300 rounded-full mt-60 mr-64 p-2 ">
            আমাদের আগামী
          </h1>
          <div className="w-[20%] h-full flex flex-col mr-96 p-8 ">
            <button className=" hover:bg-blue-400 text-xl mr-10  border-4  bg-orange-600 rounded-sm font-bold h-[10%]">
              <Link to="/porichiti">সমিতির পরিচিতি ও পরিচালনা বিধি </Link>
            </button>
            <br></br>
            <button className=" hover:bg-blue-400 text-xl mr-10  border-4 bg-orange-600 rounded-sm font-bold  h-[10%]">
              সমিতির কার্যক্রম
            </button>
            <button className=" hover:bg-blue-400 text-xl mr-10 border-4 bg-orange-600 rounded-sm font-bold h-[10%]">
              সমিতির সদস্যবৃন্দ
            </button>
            <br></br>
            <button className=" hover:bg-blue-400 text-xl mr-10  border-4 bg-orange-600 rounded-sm font-bold h-[10%]">
              সাইন ইন
            </button>
            <br></br>
            <button className=" hover:bg-blue-400 text-xl mr-10  border-4 bg-orange-600 rounded-sm font-bold h-[10%]">
              <Link to="/signup"> সাইন আপ</Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
