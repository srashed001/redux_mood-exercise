const INITIAL_STATE = {mood: 'ʅ(́◡◝)ʃ'}

const moodReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case 'HAPPY':
            return {...state, mood: 'ʘ‿ʘ' }
        case 'SAD':
            return {...state, mood: '⊙︿⊙' }
        case 'ANGRY':
            return {...state, mood: 'ಠ╭╮ಠ' }
        case 'CONFUSED':
            return {...state, mood: '(@_@)' }
        default: 
        return state
    }
}

const store = Redux.createStore(moodReducer)