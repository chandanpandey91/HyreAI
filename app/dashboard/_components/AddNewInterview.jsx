"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      {/* Button to open the dialog */}
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 
        hover:shadow-md cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)} // Opens the dialog
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>

      {/* Radix Dialog */}
      <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Content
            className="fixed bg-white rounded-lg p-4 w-[90%] max-w-md top-1/2 
            left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
          >
            <Dialog.Title className="text-lg font-bold">
            Tell us more about Job you are interviewing
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500">
              <div>
                <h2 className="font-bold text-2xl"></h2>
                <h2>Add details about your job position/role, Job Description and years of experience</h2>
              </div>
            </Dialog.Description>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded-md"
                onClick={() => setOpenDialog(false)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-md">
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
