const check = async () => {
  const res = await fetch('https://texlive.net/cgi-bin/latexcgi', { method: 'POST', redirect: 'manual' });
  console.log(res.status, res.headers.get('location'));
}
check();
