export const reducer = (state, action) => {
  switch (action.type) {
    case "drawerFlag":
      return {
        ...state,
        isOpenDraver: !state.isOpenDraver,
      };
    case "closeDrawer":
      return {
        ...state,
        isOpenDraver: false,
      };
    case "changeTheme":
      return {
        ...state,
        theme: !state.theme,
      };

    default:
      return { ...state, isOpenDraver: "wrong" };
  }
};
