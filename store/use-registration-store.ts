import { create } from 'zustand';

interface RegistrationState {
  step: number;
  eventId?: string;
  teamName?: string;
  setStep: (step: number) => void;
  patch: (data: Partial<RegistrationState>) => void;
}

export const useRegistrationStore = create<RegistrationState>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),
  patch: (data) => set((state) => ({ ...state, ...data }))
}));
