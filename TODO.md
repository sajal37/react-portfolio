- Replace `src/data/siteData.js` name, tagline, bio, email, and social URLs
- Replace `src/assets/profile.jpg` with your profile image
- Update `src/data/siteData.js` projects array with your real projects and links
- Update `package.json` `homepage` field to `https://<your-username>.github.io/<repo>/`
- Run `npm install` then `npm run build` and `npm run deploy` to publish

Notes:
- To replace the placeholder profile photo with your real image, run in PowerShell (adjust source path):
```
Copy-Item -Path "C:\Users\HP\Downloads\your-photo.jpg" -Destination "C:\Users\HP\Documents\react-portfolio\react-portfolio\src\assets\profile.jpg" -Force
```
