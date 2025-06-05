# REM Waste Management React Challenge

This repository contains my solution to the REM Waste Management React assessment, focusing on a complete redesign of the "Select Skip" page. My approach began with a detailed analysis of the provided instructions and the job listing to ensure alignment with core requirements. The primary goal was to create a visually distinct and accessible web page.

## Technology Stack

The following technologies were chosen to build a modern, efficient, and maintainable application:

- **Frontend:** React.js, HTML5, CSS3, JavaScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Design & Prototyping:** Figma

## Design Process

### Phase 1: Discovery & Research

My initial phase involved a deep dive into the existing REM Waste website and a broader exploration of similar industry platforms. This research helped me understand the current user flow, extract key brand elements (logo, color scheme), and inform typography choices for readability and theme fit.

**Completion Date:** June 3, 2025

### Phase 2: Visual Design & Prototyping

On the basis of these insights, I developed the visual design in Figma, creating mockups for both mobile and desktop. This ensured a fully responsive and intuitive user experience, delivering a clean, modern interface that departs from the original page while preserving core functionality.

**Completion Date:** June 3, 2025

## Phase 3: Development

This phase was where I translated the visual designs into a functional React application, bringing the "Select Skip" page to life.

### Core Development Principles

- **Modern JavaScript:** I ensured the use of the latest ES syntax throughout the codebase, aiming for clean, efficient, and modern JavaScript.
- **Utility-First Styling:** My choice for styling was Tailwind CSS, which allowed me to build the UI rapidly and maintain a consistent design language with highly customizable components.
- **Semantic HTML:** I prioritized proper semantic HTML tags from the outset, understanding its importance for accessibility, maintainability, and SEO.
- **Mobile-First Approach:** Mobile-First Approach was adopted from the get go, building the functionality and layout for smaller screens first, and then scaling up for larger viewports.

### Component Implementation

- **Skip Header Component:** Developed a dedicated `SkipHeader` component, which displays the brand logo and features a multi-step progress bar to clearly show users their current position in the ordering process.
- **Skip Select Component:** Implemented the core `SkipSelect` component, responsible for fetching skip data from the API, efficiently managing it within component state, and then dynamically rendering the available skip options. Also allows the user to select the skip.
- **Skip Footer Component:** I also built the `SkipFooter` component, which dynamically displays the selected skip's details (size, price) and houses the primary navigation buttons ("Back" and "Continue").
- **Under Development Page:** To gracefully handle sections not yet in scope for development, I created a placeholder `UnderDevelopmentPage` that serves as a temporary destination for features still in progress.

### Data Handling & Dynamic Assets

- **Dynamic Skip Imagery:** A key challenge I faced was the absence of direct image URLs in the provided API. Through network activity analysis of the `wewantwaste` application, I discovered the Supabase storage URL for skip images. I then successfully integrated this to enable dynamic image loading for each skip. I also implemented error handling for dynamic skip images. This ensures that a pre-defined backup image is displayed gracefully should the primary image URL fail or be unavailable. 
- **API State Icons:** Incorporated clear visual icons (checkmarks for positive states, warning symbols for inverse states) to intuitively represent various API-driven skip features, such as "Allowed on Road" and "Can be used for Heavy Waste." I also made sure to include proper attribution for all external image assets.

### User Experience & Accessibility Enhancements

- **Comprehensive Responsiveness:** After building the initial mobile-friendly version, I dedicated effort to adapting and optimizing the layout and elements specifically for desktop screens, ensuring a seamless and visually appealing experience across all device types.
- **WCAG Compliance:** I conducted thorough checks and made necessary adjustments to color contrast ratios across the page, aiming to meet WCAG AA accessibility standards for improved readability for all users.
- **Cross-Browser Consistency:** I identified and mitigated a subtle color rendering inconsistency between Chromium-based browsers and Firefox by replacing hex color values with RGB. This decision helped ensure consistent visual appearance across different browsers.
- **Placeholder Navigation:** Given that the project scope was primarily focused on the skip selection page redesign, I configured the "Back" and "Continue" buttons to navigate to a "Page Under Development" placeholder route. This clearly indicates that further sections of the application are not yet live.
- **Quality Assurance:** I thoroughly tested the developed page across various devices to confirm its responsiveness and meticulously checked for any general application errors to ensure stability. 

**Completion Date:** June 5, 2025
