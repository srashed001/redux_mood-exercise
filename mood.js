const h1 = document.querySelector("#mood");
h1.innerText = store.getState().mood;

const btns = document.querySelector('.buttons')

btns.addEventListener('click', function(e){
    const mood = e.target.id.toUpperCase()
    store.dispatch({type: mood})
    const state = store.getState();
    h1.innerText = state.mood
})

