function requestClipboardPermission() {
  return navigator.permissions.query({ name: 'clipboard-read' });
}

async function getClipboardText() {
  try {
    const permissionStatus = await requestClipboardPermission();
    if (permissionStatus.state === 'granted' || permissionStatus.state === 'prompt') {
      return navigator.clipboard.readText();
    } else {
      throw new Error('Clipboard permission denied.');
    }
  } catch (error) {
    console.error('Error reading clipboard:', error);
  }
}

async function writeToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text successfully written to clipboard.');
  } catch (error) {
    console.error('Error writing to clipboard:', error);
  }
}

function removeLineBreaks(text) {
  return text.replace(/\r?\n|\r/g, '');
}
async function processClipboardText() {
  const clipboardText = await getClipboardText();
  if (clipboardText) {
    const modifiedText = removeLineBreaks(clipboardText);
    writeToClipboard(modifiedText);
  }
}

// Call the function to start the process
processClipboardText();
