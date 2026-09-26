"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { IExercise } from "@/components/type/exercise";

interface ExerciseContextType {
  planList: IExercise[];
  savedList: IExercise[];

  addToPlan: (exercise: IExercise) => void;
  addToSaved: (exercise: IExercise) => void;
  removeFromPlan: (id: string | number) => void;
  removeFromSaved: (id: string | number) => void;
}

const ExerciseContext = createContext<ExerciseContextType | undefined>(
  undefined,
);

export const ExerciseProvider = ({ children }: { children: ReactNode }) => {
  const [planList, setPlanList] = useState<IExercise[]>([]);
  const [savedList, setSavedList] = useState<IExercise[]>([]);

  const addToPlan = (exercise: IExercise) => {
    setPlanList((prev) => {
      if (prev.some((item) => String(item.id) === String(exercise.id))) {
        return prev;
      }
      return [...prev, { ...exercise }];
    });
  };

  const addToSaved = (exercise: IExercise) => {
    setSavedList((prev) => {
      if (prev.some((item) => String(item.id) === String(exercise.id))) {
        return prev;
      }
      return [...prev, { ...exercise }];
    });
  };

  const removeFromPlan = (id: string | number) => {
    setPlanList((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
  };

  const removeFromSaved = (id: string | number) => {
    setSavedList((prev) =>
      prev.filter((item) => String(item.id) !== String(id)),
    );
  };

  return (
    <ExerciseContext.Provider
      value={{
        planList,
        savedList,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
      }}
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
