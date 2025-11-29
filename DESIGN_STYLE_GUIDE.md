# AIMORELOGY - Design Style Guide

This document outlines the visual language and design principles for the AIMORELOGY website. The design philosophy is "Enterprise Industrial" — clean, sharp, professional, and technology-focused, heavily inspired by the NVIDIA corporate aesthetic.

## 1. Color Palette

### Primary Brand Color
*   **Deep Purple**: `#4f4398`
    *   Usage: Primary Buttons, Links, Accents, Hover States, Active Tabs.

### Secondary Accents
*   **Tech Green**: `#76b900`
    *   Usage: Active navigation borders (NVIDIA style), subtle highlights.
*   **Clean White**: `#ffffff`
    *   Usage: Backgrounds, Text on Dark.

### Neutrals
*   **Black / Jet**: `#111111` or `gray-900`
    *   Usage: Footer background, Hero section backgrounds.
*   **Dark Gray**: `gray-600`
    *   Usage: Body text.
*   **Light Gray**: `gray-50` / `gray-100`
    *   Usage: Section backgrounds, Card backgrounds (to create depth without borders).

## 2. Typography

*   **Font Family**: `Roboto` or `Montserrat` (Sans-serif).
*   **Headings**: Bold (`font-bold`) or Black (`font-black`), often Uppercase (`uppercase`) for a strong, industrial feel.
*   **Body**: Readable sans-serif with generous line-height (`leading-relaxed`).

## 3. UI Elements & Components

### Buttons
*   **Style**: Sharp corners (Rounded-sm or none), Uppercase text, Bold weight.
*   **Primary**: Purple Background (`#4f4398`), White Text.
*   **Secondary**: Transparent Background, Bordered.

### Cards (Products/Blogs)
*   **Shape**: Sharp corners (no large border-radius).
*   **Interaction**: On hover, the border color changes to Primary Purple (`border-[#4f4398]`).
*   **Layout**: Image top, Content bottom. Clear hierarchy.

### Navigation (Header)
*   **Desktop**: "Mega Menu" dropdown. Full-width panel containing categorized links. Active top-level items have a green bottom border (`border-b-2 border-[#76b900]`).
*   **Mobile**: Accordion style list. Clicking a category expands the sub-list vertically.

### Carousels (Scrollable Lists)
*   **Content**: Products or News items arranged horizontally.
*   **Navigation**:
    *   **Desktop**: Arrow buttons (Left/Right).
    *   **Mobile**: Touch scroll.
*   **Indicator**: A sharp, flat progress bar line below the carousel. No rounded pill shapes. The thumb indicates the visible viewport percentage.

### Imagery
*   **Style**: High-tech, industrial, or abstract geometric.
*   **Hero Sections**: Full-width background images with dark gradient overlays to ensure text readability.
*   **Product Spotlight**: Clean product cutouts or high-quality contextual shots (e.g., flight controller on a clean surface).

## 4. Spacing & Layout
*   **Container**: Centered, max-width `1200px` (Tailwind `container mx-auto`).
*   **Padding**: Generous vertical padding (`py-20`, `py-24`) to give content room to breathe.
*   **Grid**: Standard 12-column logic, implemented via Tailwind Grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).

## 5. Mobile Responsiveness
*   **Navigation**: Collapses into a Hamburger menu.
*   **Typography**: Headings scale down but remain bold/uppercase.
*   **Layouts**: Multi-column grids collapse to single column (`grid-cols-1`).
*   **Carousels**: Remain horizontal scrollable to save vertical space.
