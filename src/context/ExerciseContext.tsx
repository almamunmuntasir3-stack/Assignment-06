"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { IExercise } from "@/components/type/exercise";

interface ExerciseContextType {
  planList: IExercise[];
  savedList: IExercise[];
  addToPlan: (exercise: IExercise) => void;
  addToSaved: (exercise: IExercise) => void;
}

const ExerciseContext = createContext<ExerciseContextType | undefined>(
  undefined,
);

export const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [planList, setPlanList] = useState<IExercise[]>([]);
  const [savedList, setSavedList] = useState<IExercise[]>([]);

  const addToPlan = (exercise: IExercise) => {
    setPlanList((prev) => {
      if (prev.some((item) => item.id === exercise.id)) return prev;
      return [...prev, exercise];
    });
  };

  const addToSaved = (exercise: IExercise) => {
    setSavedList((prev) => {
      if (prev.some((item) => item.id === exercise.id)) return prev;
      return [...prev, exercise];
    });
  };

  return (
    <ExerciseContext.Provider
      value={{ planList, savedList, addToPlan, addToSaved }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export const useExercise = () => {
  const context = useContext(ExerciseContext);
  if (!context) {
    throw new Error("useExercise must be used within an ExerciseProvider");
  }
  return context;
};
