import React from "react";
import FormNumberThree from "../FormNumberThree/FormNumberThree";

const FormNumberTwo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="bg-white p-8 rounded-xl mt-12">
        <h2 className="font-semibold text-2xl ">Form title</h2>
        <p className="font-light">
          Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida
          augue enim.
        </p>
        <form className="card-body mt-8 p-0">
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
      <FormNumberThree></FormNumberThree>
    </div>
  );
};

export default FormNumberTwo;
