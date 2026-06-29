// Variables
const kneeboardWidth = 1280
const kneeboardHeight = kneeboardWidth * 1.5

// Export button click event
document.getElementById('btn-export').addEventListener('click', async () => {

	// Temporarily change css to export mode
	document.querySelector("#kneeboard").classList.add("export")


	window.htmlToImage.toPng(document.getElementById('kneeboard'), {
		width: kneeboardWidth,
		height: kneeboardHeight,
		pixelRatio: 1,
		cacheBust: true
	}).then((dataUrl) => {
		// dataUrl is a base64 encoded PNG image
		const link = document.createElement('a')
		link.href = dataUrl
		link.download = kneeboardFilename
		// link.download = `kneeboard-${Date.now()}.png`
		link.click()
	}).catch((error) => {
		console.error('PNG export failed:', error)
	}).finally(() => {
		// Restore preview mode css
		document.querySelector("#kneeboard").classList.remove("export")
	})
})