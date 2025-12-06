# Quick Setup for GitHub Pages (Default URL)

## Step 1: Update Homepage in package.json

1. Open `package.json`
2. Find the `"homepage"` field
3. Replace `YOUR_USERNAME` with your GitHub username
4. Replace `YOUR_REPO_NAME` with your repository name

Example:
```json
"homepage": "https://johndoe.github.io/texiguat-site"
```

## Step 2: Remove CNAME (Already Done)

The CNAME file has been removed. It will be restored when you're ready to use the custom domain.

## Step 3: Deploy

```bash
npm run deploy
```

## Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**

## Step 5: Access Your Site

Your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

(Replace with your actual username and repo name)

## When You're Ready for Custom Domain

1. Purchase `texiguat.com` domain
2. Restore the CNAME file: Copy `.github/CNAME_BACKUP` to `public/CNAME`
3. Update `package.json` homepage back to `"https://www.texiguat.com"`
4. Run `npm run deploy` again
5. Configure DNS as described in `DEPLOYMENT.md`

