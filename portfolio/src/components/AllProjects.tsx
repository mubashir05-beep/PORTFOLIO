'use client'
import React, { useEffect, useState } from "react";
import { categories } from "../../sanity/sanity-utils";

interface Category {
  tech_stack: string[];
}

const AllProjects: React.FC = () => {
  const [categoriesProjects, setCategoriesProjects] = useState<
    Category[] | null
  >(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories: Category[] = await categories();
        setCategoriesProjects(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        // Handle the error here (e.g., show an error message to the user).
      }
    };

    fetchCategories();
  }, []);

  const handleSelection = (stack: string): void => {
    setSelectedOption((prevSelectedOption) => {
      // Use the callback form to log the updated value immediately
      console.log(stack);
      return stack;
    });
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categoriesProjects &&
          categoriesProjects.map((tech) =>
            tech.tech_stack.map((stack) => (
              <div
                key={stack}
                className={`bg-gray-100 dark:bg-gray-800 cursor-pointer px-2 py-1 rounded ${
                  selectedOption === stack
                    ? "bg-[#323138] text-white dark:bg-gray-600"
                    : "text-gray-800 dark:text-gray-200"
                }`}
                onClick={() => handleSelection(stack)}
              >
                {stack}
              </div>
            ))
          )}
      </div>
    </div>
  );
};

export default AllProjects;
