const check = async () => {
  const formData = new URLSearchParams();
  formData.append('text', '\\documentclass{article}\\begin{document}hello\\end{document}');
  formData.append('command', 'pdflatex');
  const res = await fetch('https://latexonline.cc/compile', {
    method: 'POST',
    body: formData,
  });
  console.log('latexonline post URL encoded:', res.status);
}
check();
