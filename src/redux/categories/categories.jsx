const CHECK_STATUS = 'CHECK_STATUS';

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const checkStatusReducer = (state = [], action) => {
  if (action.type === CHECK_STATUS) {
    return 'Under construction';
  } return state;
};

export default checkStatusReducer;
export { checkStatus };
