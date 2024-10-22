import React from 'react';
import styles from '../style';
import Button from './Button';

// InfoCard Component
const InfoCard = ({ title, description, algorithms, link }) => {
  return (
    <div className="w-1/4 border border-gray-300 rounded-lg p-5 m-5 bg-black shadow-md transition-transform duration-200 transform hover:scale-105">
      <h2 className="text-white font-semibold mb-2">{title}</h2>
      <p className="text-white mb-4">{description}</p>
      <ul className="list-none p-0 mb-4">
        {algorithms.map((algo, index) => (
          <li key={index} className="text-white">
            {index + 1}. {algo}
          </li>
        ))}
      </ul>
      {/* Explore Button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Explore
      </a>
    </div>
  );
};

// Main App Component
const App = () => {
  const sortingAlgorithms = [
    'Quick Sort',
    'Merge Sort',
    'Bubble Sort',
    'Insertion Sort',
    'Selection Sort',
  ];

  const searchingAlgorithms = [
    'Binary Search',
    'Linear Search',
    'Jump Search',
    'Exponential Search',
    'Interpolation Search',
  ];

  const pathfindingAlgorithms = [
    "Dijkstra's Algorithm",
    'A* Search Algorithm',
    'Breadth-First Search (BFS)',
    'Depth-First Search (DFS)',
    'Greedy Best-First Search',
  ];

  return (
    <div className="flex flex-row justify-center flex-wrap">
      <InfoCard
        title="Searching Algorithms"
        description="Searching algorithms are techniques for finding specific data within a structure, such as an array or list."
        algorithms={searchingAlgorithms}
        link="https://pramit-sr.github.io/main/" // External link for Searching Algorithms
      />
      <InfoCard
        title="Sorting Algorithms"
        description="Sorting algorithms are methods for rearranging a list of items in a specific order, typically ascending or descending."
        algorithms={sortingAlgorithms}
        link="https://shubhrajitbiswas.github.io/main/" // External link for Sorting Algorithms
      />
      <InfoCard
        title="Pathfinding Algorithms"
        description="Pathfinding algorithms are used to determine the best path from one point to another within a graph or grid."
        algorithms={pathfindingAlgorithms}
        link="https://shubhrajitbiswas.github.io/Pathfinding/" // External link for Pathfinding Algorithms
      />
    </div>
  );
};

export default App;