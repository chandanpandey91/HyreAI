"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobRole, setJobRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [questions, setQuestions] = useState(null); // For displaying generated questions

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      jobRole,
      jobDescription,
      experience: parseInt(experience, 10),
    };

    try {
      const response = await fetch("/api/generate-questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        setQuestions(data.questions); // Save generated questions
        setOpenDialog(false); // Close dialog
      } else {
        console.error("Failed to generate questions:", await response.text());
      }
    } catch (error) {
      console.error("Error while generating questions:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div
        className="p-6 border rounded-lg bg-secondary hover:scale-105 hover:shadow-lg cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center text-black">+ Add New Job</h2>
      </div>

      <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <Dialog.Content
            className="fixed bg-white rounded-lg p-6 w-[90%] max-w-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl transition-all"
          >
            <Dialog.Title className="text-xl font-semibold text-center mb-4">
              Job Details
            </Dialog.Title>
            <form onSubmit={onSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Job Role/Position
                  </label>
                  <input
                    className="mt-2 p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={jobRole}
                    onChange={(e) => setJobRole(e.target.value)}
                    placeholder="Enter job role"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Job Description / Tech Stack
                  </label>
                  <textarea
                    className="mt-2 p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    rows="4"
                    placeholder="Describe the job role or tech stack required"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Years of Experience
                  </label>
                  <input
                    className="mt-2 p-3 rounded-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    type="number"
                    placeholder="Enter years of experience"
                    required
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-6 py-2 bg-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-400 transition"
                  onClick={() => setOpenDialog(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600 transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Generate Questions"}
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Display generated questions */}
      {questions && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Generated Questions:</h3>
          <pre className="p-4 bg-gray-100 rounded-md">{JSON.stringify(questions, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default AddNewInterview;
