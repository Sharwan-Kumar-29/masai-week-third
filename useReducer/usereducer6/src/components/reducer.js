export const initialState = { theme: 'light' };

export function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
}
