# TEMPLATES

__Instead of looking them up for every project, they're at my fingertips.__

Steps to create a new project using this, thanks to [this blog post](http://www.tilcode.com/fork-your-own-repo-on-github/).

1. Create a new repo on GitHub.
- Do NOT initialize with a `README`.

2. Clone the new repo locally.
- `git clone <new-repo>`

3. Add an Upstream remote (to Templates repo).
- make sure you're in your repo directory
- `git remote add upstream <templates-repo>`

4. Pull from Templates repo.
- `git pull upstream master`

5. Push to the new repo.
- `git push origin master`

You're done! You'll have a leftover `upstream` remote. I haven't figured out how to delete that, yet.
