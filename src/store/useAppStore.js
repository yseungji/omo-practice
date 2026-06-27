import { create } from 'zustand'

const useAppStore = create((set) => ({
  myCity: null,
  compareList: [],
  activePurpose: null,
  selectedCountry: null,
  briefingData: null,
  user: null,

  setMyCity: (city) => set({ myCity: city }),
  setCompareList: (list) => set({ compareList: list }),
  setActivePurpose: (purpose) => set({ activePurpose: purpose }),
  setSelectedCountry: (country) => set({ selectedCountry: country }),
  setBriefingData: (data) => set({ briefingData: data }),
  setUser: (user) => set({ user: user }),
}))

export default useAppStore