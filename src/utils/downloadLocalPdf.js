export default function downloadLocalPDF(pdfFile, fileName = 'download.pdf') {
  const link = document.createElement('a')
  link.href = pdfFile
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
