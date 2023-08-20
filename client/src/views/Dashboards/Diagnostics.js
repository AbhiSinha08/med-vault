import React from "react";
import { Container } from "reactstrap";
export default function Dignostics() {
  return (
    <div className="flex items-center justify-center gap-6 h-screen">
                <Container className="flex justify-between gap-6 mb-8">
      <div className="flex flex-col justify-start w-[20%] gap-1 mt-[3.75rem]">
        <div className="rounded-lg bg-purple-600/50 text-center p-4 flex flex-col gap-1 items-center">
          <img
            alt=""
            className="rounded-full h-24 w-24"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToL71RqBqGcRpBJQzbZ7d45N0vTq1vh7bDKw&usqp=CAU"
          />
          <span className="font-semibold text-lg"> LabName </span>
          <span className="text-white/70"> Address</span>
          <span> Phone Number: 6969696969 </span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-6 w-[60%]">
      <div className="gap-6 w-2/5 ">
        <h1 className="text-2xl font-bold mb-4">
          Patient and Doctor Information
        </h1>
        <form className="space-y-4">
          {/* Patient Information */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Patient Information</h2>
            <input
              type="number"
              name="abha_id"
              placeholder="Abha_id"
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>

          {/* Doctor Information */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Doctor Information</h2>
            <input
              type="text"
              name="doctorName"
              placeholder="Doctor's Name"
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>

          {/* Photo Upload */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Upload Photos</h2>
            <input
              type="file"
              name="photos"
              multiple
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
      </Container>
    </div>
  );
}
