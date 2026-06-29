const check = async () => {
  const formData = new FormData();
  formData.append('text', '\\documentclass{article}\\begin{document}hello\\end{document}');
  formData.append('command', 'pdflatex');
  try {
    const res = await fetch('https://latexonline.cc/compile', { method: 'POST', body: formData, redirect: 'manual' });
    console.log('latexonline.cc POST:', res.status, res.headers.get('location'));
  } catch(e) { console.error(e) }
}
check();
