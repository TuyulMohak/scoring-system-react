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
      players: [
        { 
          id: '1',
          scores:[
            { roundId: '1', score: 'good enough'},
            { roundId: '2', score: 80 }
          ],
        },
        { 
          id: '2',
          scores:[
            { roundId: '1', score: null },
            { roundId: '2', score: 80 }
          ]
        }
      ]
    },

    {
      id: '2',
      name: 'Main',
      rounds: [
        { 
          id:'1',
          name: 'step 1',
          type: 'text'
        },
        { 
          id:'2',
          name: 'step 2',
          type: 'number'
        }
      ],
      players: [
        { 
          id: '1',
          scores:[
            { roundId: '1', score: 'horrible'},
            { roundId: '2', score: 90 }
          ],
        },
        { 
          id: '2',
          scores:[
            { roundId: '1', score: 'shee' },
            { roundId: '2', score: null }
          ]
        }
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

  updateScore: (eventId, playerId, scoreRow) => {
    const events = get().events
    console.log(eventId, playerId, scoreRow)
    events.map(event => {
      if(event.id === eventId){
        // check if the player exist on the event, if no, make it
        const isExist = event.players.findIndex(player => player.id === playerId)
        console.log(isExist)
        if(isExist !== -1){
          event.players.map(player=>{
          if(player.id === playerId){
            player.scores = scoreRow
          }
        })
        }
        else{
          event.players.push({
            id: playerId,
            scores: scoreRow
          })  
        }

      }
    })
    alert('Update Success')
  }
}))

export default useMainStore