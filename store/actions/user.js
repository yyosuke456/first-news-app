export const addClip = ({ clip }) => {
  return {
    type: "ADD_CLIP",
    clip,
  };
};

export const deleteClip = ({}) => {
  return {
    type: "DELETE_CLIP",
    clip,
  };
};
