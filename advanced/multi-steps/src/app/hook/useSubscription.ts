import { create } from "zustand";

interface Subscription {
  name: string;
  email: string;
  phone: string;
  plan?: string;
  recurrence?: number;
  online?: boolean;
  storage?: boolean;
  customize?: boolean;
}

interface SubscriptionState {
  subscription: Subscription;
  updateSubscription: (subscription: Subscription) => void;
}

const useSubscription = create<SubscriptionState>((set) => ({
  subscription: {} as Subscription,
  updateSubscription: (subscription: Subscription) => set({ subscription }),
}));

export default useSubscription;
