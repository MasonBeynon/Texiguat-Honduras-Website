# Favicon Setup Instructions

The favicon.svg file has been created with the Honduras flag. However, browsers often cache favicons aggressively.

## To see the new favicon:

1. **Hard refresh the page**: 
   - Windows/Linux: `Ctrl + Shift + R` or `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Clear browser cache** for the site:
   - Chrome: Settings → Privacy → Clear browsing data → Cached images and files
   - Firefox: Settings → Privacy → Clear Data → Cached Web Content

3. **If still not showing**, try:
   - Visit: `https://MasonBeynon.github.io/Texiguat-Honduras-Website/favicon.svg` directly
   - This should show the Honduras flag SVG

## Alternative: Create favicon.ico

If you want a traditional .ico file, you can:
1. Convert the SVG to ICO using an online tool like:
   - https://convertio.co/svg-ico/
   - https://cloudconvert.com/svg-to-ico
2. Replace `public/favicon.ico` with the converted file
3. Rebuild and redeploy

The current setup should work, but browsers may take time to update the cached favicon.

