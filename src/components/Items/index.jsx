import { MdRemoveRedEye } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import apple from "../../assets/apple.svg";
import realmi from "../../assets/realmi.svg";
import samsung from "../../assets/samsung.svg";
import nokia from "../../assets/nokia.svg";
import black from "../../assets/blackbarry.svg";
function Items() {
  return (
    <>
      <div className="bg-[#1f2a40] rounded-lg py-[10px] pl-3 relative pr-16 w-[1080px] mx-auto mb-4 flex justify-between items-center">
        <div className="title-img flex items-center gap-2 w-[150px]">
          <img src={apple} alt="apple" />
          <div className="title">
            <h3 className="text-white ">Apple</h3>
            <p className="text-[#6C757D]">mail@gmail.com</p>
          </div>
        </div>
        <span className="text-white absolute left-[390px]">Tecnology</span>
        <span className="text-white absolute left-[585px]">200.00$</span>
        <span className="bg-[#04D58D] absolute rounded-2xl py-1 px-2 text-white left-[735px]">
          Available
        </span>
        <span className="flex gap-4">
          <MdRemoveRedEye className="text-[#6C757D] text-xl cursor-pointer" />
          <MdModeEditOutline className="text-[#6C757D] text-xl cursor-pointer" />
          <FaRegTrashAlt className="text-[#6C757D] text-xl cursor-pointer" />
        </span>
      </div>

      <div className="bg-[#1f2a40] rounded-lg py-[10px] pl-3 relative pr-16 w-[1080px] mx-auto mb-4 flex justify-between items-center">
        <div className="title-img flex items-center gap-2 w-[150px]">
          <img src={realmi} alt="apple" />
          <div className="title">
            <h3 className="text-white ">Rrealmi</h3>
            <p className="text-[#6C757D]">mail@gmail.com</p>
          </div>
        </div>
        <span className="text-white absolute left-[390px]">Tecnology</span>
        <span className="text-white absolute left-[585px]">200.00$</span>
        <span className="bg-[#EB5757] absolute rounded-2xl py-1 px-2 text-white left-[735px]">
          No Stock
        </span>
        <span className="flex gap-4">
          <MdRemoveRedEye className="text-[#6C757D] text-xl cursor-pointer" />
          <MdModeEditOutline className="text-[#6C757D] text-xl cursor-pointer" />
          <FaRegTrashAlt className="text-[#6C757D] text-xl cursor-pointer" />
        </span>
      </div>
      <div className="bg-[#1f2a40] rounded-lg py-[10px] pl-3 relative pr-16 w-[1080px] mx-auto mb-4 flex justify-between items-center">
        <div className="title-img flex items-center gap-2 w-[150px]">
          <img src={samsung} alt="apple" />
          <div className="title">
            <h3 className="text-white ">Samsung</h3>
            <p className="text-[#6C757D]">mail@gmail.com</p>
          </div>
        </div>
        <span className="text-white absolute left-[390px]">Tecnology</span>
        <span className="text-white absolute left-[585px]">200.00$</span>
        <span className="bg-[#F2C94C] absolute rounded-2xl py-1 px-2 text-black left-[735px]">
          Flash Sale
        </span>
        <span className="flex gap-4">
          <MdRemoveRedEye className="text-[#6C757D] text-xl cursor-pointer" />
          <MdModeEditOutline className="text-[#6C757D] text-xl cursor-pointer" />
          <FaRegTrashAlt className="text-[#6C757D] text-xl cursor-pointer" />
        </span>
      </div>
      <div className="bg-[#1f2a40] rounded-lg py-[10px] pl-3 relative pr-16 w-[1080px] mx-auto mb-4 flex justify-between items-center">
        <div className="title-img flex items-center gap-2 w-[150px]">
          <img src={nokia} alt="apple" />
          <div className="title">
            <h3 className="text-white ">Nokia</h3>
            <p className="text-[#6C757D]">mail@gmail.com</p>
          </div>
        </div>
        <span className="text-white absolute left-[390px]">Tecnology</span>
        <span className="text-white absolute left-[585px]">200.00$</span>
        <span className="bg-[#04D58D] absolute rounded-2xl py-1 px-2 text-white left-[735px]">
          Available
        </span>
        <span className="flex gap-4">
          <MdRemoveRedEye className="text-[#6C757D] text-xl cursor-pointer" />
          <MdModeEditOutline className="text-[#6C757D] text-xl cursor-pointer" />
          <FaRegTrashAlt className="text-[#6C757D] text-xl cursor-pointer" />
        </span>
      </div>
      <div className="bg-[#1f2a40] rounded-lg py-[10px] pl-3 relative pr-16 w-[1080px] mx-auto mb-4 flex justify-between items-center">
        <div className="title-img flex items-center gap-2 w-[150px]">
          <img src={black} alt="apple" />
          <div className="title">
            <h3 className="text-white ">Blackberry</h3>
            <p className="text-[#6C757D]">mail@gmail.com</p>
          </div>
        </div>
        <span className="text-white absolute left-[390px]">Tecnology</span>
        <span className="text-white absolute left-[585px]">200.00$</span>
        <span className="bg-[#EB5757] absolute rounded-2xl py-1 px-2 text-white left-[735px]">
          No Stock
        </span>
        <span className="flex gap-4">
          <MdRemoveRedEye className="text-[#6C757D] text-xl cursor-pointer" />
          <MdModeEditOutline className="text-[#6C757D] text-xl cursor-pointer" />
          <FaRegTrashAlt className="text-[#6C757D] text-xl cursor-pointer" />
        </span>
      </div>
    </>
  );
}

export default Items;
