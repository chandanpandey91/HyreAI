"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobRole, setJobRole] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [experience, setExperience] = useState('');

  const handleConfirm = () => {
    // Handle submission logic here
    console.log('Job Role:', jobRole);
    console.log('Job Description:', jobDescription);
    console.log('Experience:', experience);
    setOpenDialog(false); // Close the dialog after submission
  };

  return (
    <div>
      {/* Button to open the dialog */}
      <div
        className="p-6 border rounded-lg bg-secondary hover:scale-105 
        hover:shadow-lg cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)} // Opens the dialog
      >
        <h2 className="text-lg text-center text-black">+ Add New Job</h2>
      </div>

      {/* Radix Dialog */}
      <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Content
            className="fixed bg-white rounded-lg p-6 w-[90%] max-w-lg top-1/2 
            left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl transition-all"
          >
            <Dialog.Title className="text-xl font-semibold text-center mb-4">
              Tell us more about the job you're interviewing.
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-700 mb-4 text-center">
              Please provide details about the job role and experience required.
            </Dialog.Description>

            <div className="space-y-4">
              {/* Job Role/Position */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Job Role/Job Position</label>
                <input
                  className="mt-2 p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  placeholder="Enter job role"
                />
              </div>

              {/* Job Description/Tech Stack */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Job Description / Tech Stack</label>
                <textarea
                  className="mt-2 p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows="4"
                  placeholder="Describe the job role or tech stack required"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                <input
                  className="mt-2 p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  type="number"
                  placeholder="Enter years of experience"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="px-6 py-2 bg-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-400 transition"
                onClick={() => setOpenDialog(false)} // Close the dialog
              >
                Cancel
              </button>
              <button
                className="px-6 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600 transition"
                onClick={handleConfirm} // Confirm the action
              >
                Confirm
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default AddNewInterview;
