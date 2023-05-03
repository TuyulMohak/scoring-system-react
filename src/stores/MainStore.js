import { create } from 'zustand'

const useMainStore = create((set, get) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

  players: [
    { id:'1', name:'Joko First' },
    { id:'2', name:'Andi Second' }
  ],  
  addPlayer: (id, name) => {
    id = id.trim()
    name = name.trim()
    const isExist = get().players.find(player=>player.id === id)
    // console.log(isExist)
    if (isExist === undefined) {
      set((state) => ({ players: [...state.players, {id, name}] }))
    } else{
      alert('id Already Exist')
    }
  },
  deletePlayer: (id) => {
    set(state=> ({ players: state.players.filter(player=> player.id !== id) }))
    alert('Deleted')
  }
}))

export default useMainStore