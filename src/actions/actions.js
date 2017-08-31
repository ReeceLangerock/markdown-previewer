export var setMarkdownText = text => {
  return {
    type: 'SET_MARKDOWN_TEXT',
    text
  }
}

export var resetMarkdownText = () => {
  return {
    type: 'RESET_MARKDOWN_TEXT'
  }
}

export var saveText = text => {
  var link = document.createElement('a')

  link.setAttribute('download', 'markdown.md')
  link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  return {
    type: 'SAVE_TEXT'
  }
}
