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
  },

  events: [
    {
      id: '1',
      name: 'preliminary',
      rounds: [
        { 
          id:'1',
          name: 'round 1',
          type: 'text'
        },
        { 
          id:'2',
          name: 'round 2',
          type: 'number'
        }
      ],
      scores: [
        { id:'1', playerId: '1', roundId: '1', score: 'good enough'},
        { id:'2', playerId: '1', roundId: '2', score: 80 },
        { id:'3', playerId: '2', roundId: '2', score: 89 }
      ]
    },

    {
      id: '2',
      name: 'main',
      rounds: [
        { 
          id:'1',
          name: 'round 1',
          type: 'text'
        },
        { 
          id:'2',
          name: 'round 2',
          type: 'number'
        }
      ],
      scores: [
        { id:'1', playerId: '1', roundId: '1', score: 'horrible'},
        { id:'2', playerId: '2', roundId: '2', score: 99 }
      ]
    },

  ],
  addEvent: (id, name, rounds) => {
    id = id.trim()
    name = name.trim()
    const isExist = get().events.find(event=>event.id === id)
    if (isExist === undefined) {
      set((state) => ({ events: [...state.events, {id, name, rounds}] }))
    } else{
      alert('id Already Exist')
    }
  },
  deleteEvent: (id) => {
    set(state=> ({ events: state.events.filter(event=> event.id !== id) }))
    alert('Deleted')
  },
}))

export default useMainStore