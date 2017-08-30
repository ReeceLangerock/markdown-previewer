export var setMarkdownText = text => {
  return {
    type: "SET_MARKDOWN_TEXT",
    text
  };
};

export var resetMarkdownText = () => {
  return {
    type: "RESET_MARKDOWN_TEXT"
  };
};

export var saveMarkdownText = () => {
  return {
    type: "SAVE_MARKDOWN_TEXT"
  };
};

export var saveText = () => {
  return {
    type: "SAVE_TEXT"
  };
};
