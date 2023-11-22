import { create } from "zustand";

interface StepState {
  step: number;
  nextStep: () => void;
  backStep: (step?: number) => void;
}

const useStep = create<StepState>((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  backStep: (step) => set((state) => ({ step: step || state.step - 1 })),
}));

export default useStep;
