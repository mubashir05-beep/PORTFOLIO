'use client';
import React, { useEffect, useState } from 'react';
import { categories } from '../../sanity/sanity-utils';

interface Category {
  tech_stack: string;
}

const AllProjects: React.FC = () => {
  const [categoriesProjects, setCategoriesProjects] = useState<Category[] | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories: Category[] = await categories();
        setCategoriesProjects(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Handle the error here (e.g., show an error message to the user).
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex gap-4 flex-wrap text-sm">
    {categoriesProjects && categoriesProjects.map((category) => (
      <div
        key={category.tech_stack}
        className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-gray-800 dark:text-gray-200"
      >
        {category.tech_stack}
      </div>
    ))}
  </div>
  
  );
};

export default AllProjects;
