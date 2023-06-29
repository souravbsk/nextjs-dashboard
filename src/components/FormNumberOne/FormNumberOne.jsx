import React from "react";
import Flag1 from "@/assets/Country/Flag.png";
import Flag2 from "@/assets/Country/Flag-1.png";
import Image from "next/image";
const FormNumberOne = () => {
  return (
    <div className="bg-white p-8 rounded-xl mt-12">
      <h2 className="font-semibold text-2xl ">Form title</h2>
      <p className="font-light">
        Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue
        enim.
      </p>
      <div className="flex py-8 items-center gap-3">
        <button className="flex items-center gap-1 p-1 bg-amber-200 border-2 border-amber-600 rounded-md">
          <Image src={Flag1} width={25} alt="flag1"></Image> English
        </button>
        <button className="flex items-center gap-1 p-1 bg-transparent border-2 border-neutral-300 rounded-md">
          <Image src={Flag2} width={25} alt="flag2"></Image> Turkish
        </button>
      </div>
      <form className="card-body p-0">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Lable title</span>
          </label>
          <input
            type="text"
            placeholder="Placeholder content"
            className="input border-2 input-bordered"
          />
        </div>
        <div className="flex   flex-col md:flex-row  items-center justify-between gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Lable title</span>
            </label>
            <select defaultValue="chose" className="select border-2 w-full">
              <option value="chose" disabled >
                Chose
              </option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Lable title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder content"
              className="input border-2 input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Lable title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder content"
              className="input border-2 input-bordered"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Lable title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder content"
              className="input border-2 input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Lable title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder content"
              className="input border-2 input-bordered"
            />
          </div>
        </div>
        <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Lable title</span>
            </label>
            <input
              type="text"
              placeholder="Placeholder content"
              className="input border-2 input-bordered"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Lable title</span>
            </label>
            <textarea
              type="text"
              placeholder="Placeholder content"
              className="input border-2 p-5 h-44 input-bordered"
            ></textarea>
          </div>
      </form>
    </div>
  );
};

export default FormNumberOne;
