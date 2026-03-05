# Personal Website

A super techy, vibey personal website with a dark theme and cool graphics.

## Features

- 🎨 Dark theme with neon accents
- ✨ Animated background with particles and gradient orbs
- 💫 Smooth scroll animations
- 📱 Fully responsive design
- 🎯 Typewriter effect for dynamic text
- 🔗 Social media integration (LinkedIn, Instagram, X, Email)
- 📄 Resume section
- 📧 Contact form

## Quick Start

1. Open `index.html` in your web browser
2. That's it! No build process required.

## Customization

### Update Your Personal Information

#### 1. Social Media Links

Edit the `socialLinks` object in `script.js` (around line 200):

```javascript
const socialLinks = {
    email: {
        link: '#',
        handle: 'your.email@example.com'  // Update this
    },
    linkedin: {
        link: 'https://linkedin.com/in/yourprofile',  // Update this
        handle: 'linkedin.com/in/yourprofile'  // Update this
    },
    instagram: {
        link: 'https://instagram.com/yourusername',  // Update this
        handle: '@yourusername'  // Update this
    },
    x: {
        link: 'https://x.com/yourusername',  // Update this
        handle: '@yourusername'  // Update this
    }
};
```

#### 2. Name and Title

Update the hero section in `index.html`:

```html
<span class="name glitch" data-text="Soren Skarsgard">Soren Skarsgard</span>
```

#### 3. Typewriter Text

Edit the `typewriterTexts` array in `script.js` (around line 3):

```javascript
const typewriterTexts = [
    'Full Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
    // Add your own titles here
];
```

#### 4. About Section

Update the about text in `index.html` (around line 120):

```html
<p>
    Your personal description here...
</p>
```

#### 5. Tech Stack

Update the tech stack items in `index.html` (around line 130):

```html
<span class="tech-item">Your Technology</span>
```

#### 6. Resume

You have three options for the resume:

1. **Upload a PDF**: Place your resume PDF in the project folder and update the resume download link in `script.js`:
   ```javascript
   const resumeUrl = 'path/to/your/resume.pdf';
   ```

2. **Embed PDF**: Add an iframe to display your resume:
   ```html
   <div class="resume-iframe-container active">
       <iframe id="resume-iframe" src="path/to/your/resume.pdf"></iframe>
   </div>
   ```

3. **External Link**: Update the download button to link to an external resume:
   ```javascript
   const resumeUrl = 'https://your-resume-url.com';
   ```

### Color Scheme

The color scheme is defined in CSS variables at the top of `styles.css`. You can customize:

```css
:root {
    --accent-primary: #00d9ff;    /* Main accent color */
    --accent-secondary: #7c3aed;  /* Secondary accent */
    --accent-tertiary: #ec4899;   /* Tertiary accent */
    --bg-primary: #0a0a0f;        /* Main background */
    --text-primary: #e4e4e7;      /* Main text color */
}
```

## File Structure

```
Personal Website/
├── index.html      # Main HTML file
├── styles.css      # All styles and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips

- Replace the placeholder image in the About section with your actual photo
- Customize the code window content in the hero section to reflect your skills
- Add your own projects section if desired
- Consider adding a blog section or portfolio showcase

## License

Feel free to use this template for your personal website!
