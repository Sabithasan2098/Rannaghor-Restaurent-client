"use client";
import React, { useEffect, useState } from "react";

interface DynamicRatingProps {
  initialRating: number; // Add prop type for initialRating
}

const DynamicRating: React.FC<DynamicRatingProps> = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating); // Set initial state from props

  // Update state if initialRating changes (in case of future updates)
  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  // Function to handle rating change
  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <div>
      <div style={{ display: "flex", cursor: "pointer" }}>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            filled={index < rating} // Determine if the star should be filled
            onClick={() => handleRatingChange(index + 1)} // Set rating on click
          />
        ))}
      </div>
    </div>
  );
};

// Star component
const Star: React.FC<{ filled: boolean; onClick: () => void }> = ({
  filled,
  onClick,
}) => {
  return (
    <span
      onClick={onClick}
      style={{ fontSize: "30px", color: filled ? "gold" : "gray" }}
    >
      ★
    </span>
  );
};

export default DynamicRating;
