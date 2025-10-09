# Texiguat Website

A modern, responsive website showcasing the rich history, beautiful murals, and natural beauty of Texiguat, Honduras. Built with React, TypeScript, and styled-components, featuring full internationalization support for English and Spanish.

## Features

- 🌍 **Bilingual Support**: English and Spanish language switching
- 📱 **Responsive Design**: Mobile-first approach with modern UI
- 🎨 **Styled Components**: CSS-in-JS with beautiful animations
- 🚀 **Modern React**: Built with React 18 and TypeScript
- 📝 **Contact Form**: Interactive contact form with validation
- 🎯 **Smooth Scrolling**: Seamless navigation between sections
- 🏛️ **Rich History**: Comprehensive coverage of Texiguat's historical significance
- 🎨 **Murals Showcase**: Detailed information about all the town's beautiful murals
- 🌿 **Natural Beauty**: Highlighting the town's natural attractions and tourist locations

## About Texiguat

Texiguat is located in southern Honduras, about 2 hours south of Tegucigalpa. The town has a rich historical significance in Honduras' independence movement and features numerous beautiful murals that tell the story of:

- **Francisco Morazán**: Central American independence leader and former president
- **San Francisco de Asís Church**: Nearly 200-year-old church with fascinating history
- **Independence Murals**: Commemorating the arrival of independence documents
- **Original Families**: The founding families that populated Texiguat
- **Natural Beauty**: Rolling hills, rivers, and stunning mountain views

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd honduras-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.tsx  # Navigation bar with language switcher
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About Texiguat section
│   ├── History.tsx     # Historical information
│   ├── Murals.tsx      # Murals showcase
│   ├── NaturalBeauty.tsx # Natural beauty and tourist locations
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer section
│   └── LanguageSwitcher.tsx # Language toggle
├── locales/            # Translation files
│   ├── en.json         # English translations
│   └── es.json         # Spanish translations
├── i18n.ts            # Internationalization configuration
├── App.tsx            # Main application component
└── index.tsx          # Application entry point
```

## Content Sections

### History
- Original families of Texiguat
- Francisco Morazán's legacy
- San Francisco de Asís Church history

### Murals
- 1st of October Independence Mural
- Porceres and Chicken Mural
- Heroes Mural (Valle, Reyes, Lempira, Morazán)
- Morazán Chess Mural
- Devil and Church Mural
- Last Names Mural
- Indigenous Life Mural
- Mythical and Music Mural

### Natural Beauty
- Rolling hills and lush foliage
- Nueva Armenia stopover
- River and bridge views
- Mountain vistas
- Water treatment facility views

## Customization

### Adding New Languages

1. Create a new translation file in `src/locales/` (e.g., `fr.json`)
2. Add the language to the `resources` object in `src/locales/i18n.ts`
3. Update the `LanguageSwitcher` component to include the new language

### Modifying Content

- **Text Content**: Update the translation files in `src/locales/`
- **Styling**: Modify the styled-components in each component
- **Layout**: Adjust the component structure and CSS Grid/Flexbox properties

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to the main `App.tsx`
3. Update the navigation links
4. Add translations for the new content

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Styled Components** - CSS-in-JS styling
- **React i18next** - Internationalization
- **Create React App** - Project scaffolding

## Deployment

### Build for Production

```bash
npm run build
```

The build folder will contain the production-ready files.

### Deploy to Various Platforms

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder to an S3 bucket

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or support, please open an issue in the GitHub repository.

---

**Note**: This website showcases the rich history and culture of Texiguat, Honduras. The content is based on historical research and local knowledge, highlighting the town's significant role in Central American independence and its beautiful natural surroundings.
