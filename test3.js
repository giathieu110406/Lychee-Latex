const check = async () => {
  const res = await fetch('https://texlive.net/cgi-bin/latexcgi');
  console.log(res.status, res.headers.get('location'));
}
check();
