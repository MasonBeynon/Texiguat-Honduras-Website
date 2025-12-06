# Deployment Guide for Texiguat Website

This guide will help you deploy the Texiguat website to GitHub Pages with a custom domain (www.Texiguat.com).

## Prerequisites

1. **GitHub Account**: You need a GitHub account
2. **Domain Name**: You need to purchase `texiguat.com` from a domain registrar (like Namecheap, GoDaddy, Google Domains, etc.)
3. **Git**: Make sure Git is installed on your computer

## Step 1: Push Your Code to GitHub

1. Create a new repository on GitHub (or use an existing one)
2. If you haven't already, initialize Git in your project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Add your GitHub repository as remote and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. Click **Save**

## Step 3: Deploy to GitHub Pages

Run the deployment command:

```bash
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Push the built files to GitHub Pages

**Note**: The first time you run this, you may need to authenticate with GitHub.

## Step 4: Set Up Custom Domain (www.Texiguat.com)

### 4.1: Configure DNS at Your Domain Registrar

You need to add DNS records at your domain registrar (where you bought texiguat.com):

1. **Add A Records** (for root domain):
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   TTL: 3600
   
   Type: A
   Name: @
   Value: 185.199.109.153
   TTL: 3600
   
   Type: A
   Name: @
   Value: 185.199.110.153
   TTL: 3600
   
   Type: A
   Name: @
   Value: 185.199.111.153
   TTL: 3600
   ```

2. **Add CNAME Record** (for www subdomain):
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   TTL: 3600
   ```

   Replace `YOUR_USERNAME` with your GitHub username.

### 4.2: Verify CNAME File

The `public/CNAME` file has been created with `www.texiguat.com`. This tells GitHub Pages to use your custom domain.

### 4.3: Enable Custom Domain in GitHub

1. Go to your repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `www.texiguat.com`
3. Check **Enforce HTTPS** (this may take a few minutes to become available)
4. Click **Save**

### 4.4: Wait for DNS Propagation

DNS changes can take 24-48 hours to propagate, though it's often faster (usually within a few hours).

You can check if DNS is working by:
- Visiting `www.texiguat.com` in your browser
- Using a DNS checker tool like [whatsmydns.net](https://www.whatsmydns.net)

## Step 5: Verify Everything Works

1. Visit `https://www.texiguat.com` (should redirect to HTTPS automatically)
2. Test all pages and functionality
3. Check that images load correctly

## Troubleshooting

### Site Not Loading

- **Check DNS**: Make sure DNS records are correct and propagated
- **Check GitHub Pages**: Go to repository Settings → Pages to see if there are any errors
- **Check CNAME**: Make sure `public/CNAME` file exists and has the correct domain

### HTTPS Not Working

- Wait a few hours after enabling custom domain
- Make sure "Enforce HTTPS" is checked in GitHub Pages settings
- Clear your browser cache

### Images Not Loading

- Make sure all image paths use relative paths (they should start with `/images/`)
- Verify images are in the `public/images/` folder
- Check browser console for 404 errors

### Updating the Site

After making changes to your code:

1. Commit your changes:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. Deploy again:
   ```bash
   npm run deploy
   ```

The changes should be live within a few minutes.

## Alternative: Using Root Domain (texiguat.com)

If you want to use `texiguat.com` (without www) instead:

1. Update `public/CNAME` to contain just `texiguat.com`
2. In GitHub Pages settings, set custom domain to `texiguat.com`
3. Update DNS records accordingly

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Configuration Help](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

---

**Note**: Make sure to keep your domain registration active and renew it annually to avoid losing the domain.

