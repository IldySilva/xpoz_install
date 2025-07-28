export default async function handler(req, res) {
  const response = await fetch("https://raw.githubusercontent.com/ildysilva/xpoz_install/main/install.sh");
  const content = await response.text();

  res.setHeader("Content-Type", "text/x-sh");
  res.setHeader("Content-Disposition", "attachment; filename=\"install.sh\"");
  res.status(200).send(content);
}