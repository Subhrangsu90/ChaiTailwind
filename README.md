# Chai Tailwind - Utility-First CSS Engine

A lightweight utility-first CSS engine that provides shorthand class names mapped to CSS properties. **16px base scale** with automatic REM conversion for responsive, accessible design.

---

## 📚 Complete Utilities Documentation

### 1. 🎨 **TYPOGRAPHY** (`typography.js`)

Text styling and font utilities. Use `chai-` prefix with any of these properties.

| Utility      | CSS Property         | Example                                                     | Usage                    |
| ------------ | -------------------- | ----------------------------------------------------------- | ------------------------ |
| `text`       | `color`              | `chai-text-[#4a362c]`                                       | Hex color in brackets    |
| `fs`         | `fontSize`           | `chai-fs-16`, `chai-fs-24`                                  | Numeric value → REM      |
| `align`      | `textAlign`          | `chai-align-center`, `chai-align-left`                      | String keyword           |
| `weight`     | `fontWeight`         | `chai-weight-bold`, `chai-weight-normal`                    | String keyword           |
| `leading`    | `lineHeight`         | `chai-leading-[1.5]`                                        | Custom value in brackets |
| `tracking`   | `letterSpacing`      | `chai-tracking-[0.05em]`                                    | Custom value in brackets |
| `uppercase`  | `textTransform`      | `chai-uppercase`                                            | Implicit value           |
| `lowercase`  | `textTransform`      | `chai-lowercase`                                            | Implicit value           |
| `capitalize` | `textTransform`      | `chai-capitalize`                                           | Implicit value           |
| `italic`     | `fontStyle`          | `chai-italic`                                               | Implicit value           |
| `decoration` | `textDecorationLine` | `chai-decoration-underline`, `chai-decoration-line-through` | String keyword           |
| `family`     | `fontFamily`         | `chai-family-[Arial]`                                       | Custom value in brackets |

**Examples:**

```html
<h2 class="chai-fs-26 chai-text-[#4a362c] chai-weight-bold">Heading</h2>
<p class="chai-fs-14 chai-text-[#815c4d] chai-align-center chai-leading-[1.6]">
	Text
</p>
<span class="chai-uppercase chai-tracking-[0.1em]">Styled Text</span>
```

**Value Format:**

- `chai-fs-16` → `fontSize: 1rem` (16 ÷ 16)
- `chai-fs-24` → `fontSize: 1.5rem` (24 ÷ 16)
- `chai-text-[#4a362c]` → `color: #4a362c` (brackets stripped)

---

### 2. 📏 **SIZING** (`sizing.js`)

Dimension utilities for width, height, and constraints.

| Utility | CSS Property | Example                                    | Usage                                        |
| ------- | ------------ | ------------------------------------------ | -------------------------------------------- |
| `w`     | `width`      | `chai-w-100`, `chai-w-50p`, `chai-w-100vh` | Numeric (→ REM), `p` (→%), or viewport units |
| `h`     | `height`     | `chai-h-100`, `chai-h-50p`, `chai-h-100vh` | Numeric (→ REM), `p` (→%), or viewport units |
| `min-w` | `minWidth`   | `chai-min-w-200`, `chai-min-w-[300px]`     | Numeric (→ REM) or brackets                  |
| `max-w` | `maxWidth`   | `chai-max-w-500`, `chai-max-w-[600px]`     | Numeric (→ REM) or brackets                  |
| `min-h` | `minHeight`  | `chai-min-h-100`, `chai-min-h-[80px]`      | Numeric (→ REM) or brackets                  |
| `max-h` | `maxHeight`  | `chai-max-h-300`, `chai-max-h-[400px]`     | Numeric (→ REM) or brackets                  |

**Examples:**

```html
<div class="chai-w-100p chai-h-100vh">Full width & viewport height</div>
<img
	class="chai-w-80 chai-h-80"
	src="image.jpg" />
<div class="chai-min-h-100 chai-max-w-600">Constrained box</div>
```

**Value Format:**

- `chai-w-100` → `width: 6.25rem` (100 ÷ 16)
- `chai-w-50p` → `width: 50%` (p suffix converts to %)
- `chai-h-100vh` → `height: 100vh` (viewport units pass through)
- `chai-min-w-[300px]` → `minWidth: 300px` (brackets pass through as-is)

---

### 3. 📐 **LAYOUT** (`layout.js`)

Display, positioning, and visibility utilities for page layout and component positioning.

| Utility      | CSS Property | Example                                          | Usage                       |
| ------------ | ------------ | ------------------------------------------------ | --------------------------- |
| `display`    | `display`    | `chai-display-flex`, `chai-display-block`        | String keyword              |
| `visible`    | `visibility` | `chai-visible`, `chai-invisible`                 | String keyword              |
| `pos`        | `position`   | `chai-pos-absolute`, `chai-pos-relative`         | String keyword              |
| `top`        | `top`        | `chai-top-0`, `chai-top-[20px]`                  | Numeric (→ REM) or brackets |
| `right`      | `right`      | `chai-right-0`, `chai-right-[15px]`              | Numeric (→ REM) or brackets |
| `bottom`     | `bottom`     | `chai-bottom-0`, `chai-bottom-[10px]`            | Numeric (→ REM) or brackets |
| `left`       | `left`       | `chai-left-0`, `chai-left-[25px]`                | Numeric (→ REM) or brackets |
| `z`          | `zIndex`     | `chai-z-10`, `chai-z-50`, `chai-z-[999]`         | Numeric or brackets         |
| `overflow`   | `overflow`   | `chai-overflow-hidden`, `chai-overflow-auto`     | String keyword              |
| `overflow-x` | `overflowX`  | `chai-overflow-x-hidden`, `chai-overflow-x-auto` | String keyword              |
| `overflow-y` | `overflowY`  | `chai-overflow-y-hidden`, `chai-overflow-y-auto` | String keyword              |
| `object`     | `objectFit`  | `chai-object-cover`, `chai-object-contain`       | String keyword              |

**Examples:**

```html
<div class="chai-display-flex chai-pos-relative">Flex container</div>
<div class="chai-pos-absolute chai-top-0 chai-left-0 chai-z-10">
	Positioned absolutely
</div>
<div class="chai-overflow-hidden chai-overflow-x-auto">Overflow control</div>
```

**Value Format:**

- `chai-top-0` → `top: 0` (string "0" passed through)
- `chai-top-16` → `top: 1rem` (16 ÷ 16)
- `chai-top-[20px]` → `top: 20px` (brackets pass through)
- `chai-display-flex` → `display: flex` (string keyword)

---

### 4. 📦 **SPACING** (`spacing.js`)

Padding and margin utilities with directional control.

#### Padding (`p*`)

| Utility | CSS Property         | Example                  | Usage           |
| ------- | -------------------- | ------------------------ | --------------- |
| `p`     | `padding`            | `chai-p-16`, `chai-p-32` | Numeric (→ REM) |
| `pt`    | `paddingBlockStart`  | `chai-pt-8`              | Numeric (→ REM) |
| `pb`    | `paddingBlockEnd`    | `chai-pb-8`              | Numeric (→ REM) |
| `pl`    | `paddingInlineStart` | `chai-pl-12`             | Numeric (→ REM) |
| `pr`    | `paddingInlineEnd`   | `chai-pr-12`             | Numeric (→ REM) |
| `px`    | `paddingInline`      | `chai-px-16`             | Numeric (→ REM) |
| `py`    | `paddingBlock`       | `chai-py-12`             | Numeric (→ REM) |

#### Margin (`m*`)

| Utility | CSS Property        | Example                    | Usage                     |
| ------- | ------------------- | -------------------------- | ------------------------- |
| `m`     | `margin`            | `chai-m-16`, `chai-m-auto` | Numeric (→ REM) or string |
| `mt`    | `marginBlockStart`  | `chai-mt-8`                | Numeric (→ REM)           |
| `mb`    | `marginBlockEnd`    | `chai-mb-8`                | Numeric (→ REM)           |
| `ml`    | `marginInlineStart` | `chai-ml-12`               | Numeric (→ REM)           |
| `mr`    | `marginInlineEnd`   | `chai-mr-12`               | Numeric (→ REM)           |
| `mx`    | `marginInline`      | `chai-mx-auto`             | Numeric (→ REM) or string |
| `my`    | `marginBlock`       | `chai-my-16`               | Numeric (→ REM)           |

**Examples:**

```html
<div class="chai-p-32">All sides padding: 2rem (32px)</div>
<div class="chai-py-16 chai-px-24">Vertical 1rem, Horizontal 1.5rem</div>
<div class="chai-m-auto">Centered with auto margin</div>
<div class="chai-mt-8 chai-mb-16">Top 0.5rem, Bottom 1rem</div>
```

**Value Format:**

- `chai-p-32` → `padding: 2rem` (32 ÷ 16)
- `chai-m-auto` → `margin: auto` (string keyword)
- `chai-mx-auto` → `marginInline: auto` (string keyword)

---

### 5. 🎨 **BACKGROUND** (`background.js`)

Background color utilities with hex color support.

| Utility | CSS Property      | Example             | Usage                  |
| ------- | ----------------- | ------------------- | ---------------------- |
| `bg`    | `backgroundColor` | `chai-bg-[#f5f1e9]` | Hex colors in brackets |

**Examples:**

```html
<div class="chai-bg-[#f5f1e9]">Cream background</div>
<div class="chai-bg-[#815c4d]">Brown background</div>
<div class="chai-bg-[#ffffff]">White background</div>
```

**Value Format:**

- `chai-bg-[#f5f1e9]` → `backgroundColor: #f5f1e9` (brackets stripped)

---

### 6. 🔲 **BORDER** (`border.js`)

Border styling utilities for width, color, style, and radius.

| Utility   | CSS Property   | Example                              | Usage                       |
| --------- | -------------- | ------------------------------------ | --------------------------- |
| `bw`      | `borderWidth`  | `chai-bw-1`, `chai-bw-2`             | Numeric (→ REM)             |
| `bc`      | `borderColor`  | `chai-bc-[#ccc]`                     | Hex color in brackets       |
| `bs`      | `borderStyle`  | `chai-bs-solid`, `chai-bs-dashed`    | String keyword              |
| `rounded` | `borderRadius` | `chai-rounded-8`, `chai-rounded-50p` | Numeric (→ REM) or `p` (→%) |

**Examples:**

```html
<div class="chai-bw-1 chai-bc-[#ccc] chai-bs-solid chai-rounded-8">
	Bordered box
</div>
<div class="chai-rounded-50p">Circle - 50% radius</div>
<button class="chai-bw-2 chai-bc-[#4a362c] chai-rounded-12">Button</button>
```

**Value Format:**

- `chai-bw-1` → `borderWidth: 0.0625rem` (1 ÷ 16)
- `chai-bc-[#ccc]` → `borderColor: #ccc` (brackets stripped)
- `chai-rounded-8` → `borderRadius: 0.5rem` (8 ÷ 16)
- `chai-rounded-50p` → `borderRadius: 50%` (p suffix converts to %)

---

### 7. 🔄 **FLEXBOX** (`flex_grid.js`)

Flex layout utilities for alignment, direction, sizing, and spacing.

#### Direction & Wrapping

| Utility    | CSS Property    | Example                              | Usage                   |
| ---------- | --------------- | ------------------------------------ | ----------------------- |
| `flex-row` | `flexDirection` | `chai-flex-row`                      | Row direction (default) |
| `flex-col` | `flexDirection` | `chai-flex-col`                      | Column direction        |
| `wrap`     | `flexWrap`      | `chai-wrap-wrap`, `chai-wrap-nowrap` | Wrapping behavior       |

#### Alignment

| Utility   | CSS Property     | Example                                       | Usage                     |
| --------- | ---------------- | --------------------------------------------- | ------------------------- |
| `justify` | `justifyContent` | `chai-justify-center`, `chai-justify-between` | Horizontal alignment      |
| `items`   | `alignItems`     | `chai-items-center`, `chai-items-start`       | Vertical alignment        |
| `self`    | `alignSelf`      | `chai-self-end`, `chai-self-center`           | Individual item alignment |

#### Sizing & Spacing

| Utility  | CSS Property | Example                                    | Usage                     |
| -------- | ------------ | ------------------------------------------ | ------------------------- |
| `flex`   | `flex`       | `chai-flex-1`, `chai-flex-auto`            | Flex grow behavior        |
| `grow`   | `flexGrow`   | `chai-grow-1`, `chai-grow-0`               | Flex grow value           |
| `shrink` | `flexShrink` | `chai-shrink-0`, `chai-shrink-1`           | Flex shrink value         |
| `gap`    | `gap`        | `chai-gap-4`, `chai-gap-16`, `chai-gap-32` | Gap between items (→ REM) |

**Examples:**

```html
<!-- Flex row with centered items -->
<div
	class="chai-display-flex chai-flex-row chai-gap-16 chai-justify-center chai-items-center">
	<div class="chai-flex-1">Item 1</div>
	<div class="chai-flex-1">Item 2</div>
</div>

<!-- Flex column layout -->
<div class="chai-display-flex chai-flex-col chai-gap-8">
	<div>Header</div>
	<div>Content</div>
	<div>Footer</div>
</div>

<!-- Space-between layout -->
<div
	class="chai-display-flex chai-justify-between chai-items-center chai-gap-32">
	<span>Left</span>
	<span>Right</span>
</div>
```

**Value Format:**

- `chai-gap-16` → `gap: 1rem` (16 ÷ 16)
- `chai-gap-32` → `gap: 2rem` (32 ÷ 16)
- `chai-justify-center` → `justifyContent: center` (string keyword)
- `chai-items-center` → `alignItems: center` (string keyword)

---

## 🚀 Complete Usage Examples

### Example 1: Card Component

```html
<div
	class="chai-bg-[#fff] chai-p-32 chai-rounded-16 chai-display-flex chai-flex-col chai-gap-16 chai-bw-1 chai-bc-[#ddd] chai-bs-solid">
	<h2 class="chai-fs-24 chai-weight-bold chai-text-[#4a362c] chai-m-0">
		Card Title
	</h2>
	<p class="chai-fs-14 chai-text-[#815c4d] chai-leading-[1.6] chai-m-0">
		Card description with proper spacing and typography styling.
	</p>
	<button
		class="chai-bg-[#4a362c] chai-text-[#fff] chai-p-12 chai-rounded-12 chai-fs-16 chai-weight-bold chai-bw-0">
		Action Button
	</button>
</div>
```

**Resulting CSS:**

```css
padding: 2rem; /* chai-p-32: 32 ÷ 16 */
borderradius: 1rem; /* chai-rounded-16: 16 ÷ 16 */
gap: 1rem; /* chai-gap-16: 16 ÷ 16 */
fontsize: 1.5rem; /* chai-fs-24: 24 ÷ 16 */
backgroundcolor: #4a362c; /* chai-bg-[#4a362c] */
```

### Example 2: Two-Column Layout

```html
<div
	class="chai-display-flex chai-flex-row chai-gap-32 chai-justify-center chai-items-start">
	<div class="chai-w-350 chai-display-flex chai-flex-col chai-gap-16">
		<!-- Left column: 350px (21.875rem) -->
	</div>
	<div class="chai-w-400 chai-display-flex chai-flex-col chai-gap-16">
		<!-- Right column: 400px (25rem) -->
	</div>
</div>
```

**Resulting CSS:**

```css
width: 21.875rem; /* chai-w-350: 350 ÷ 16 */
gap: 2rem; /* chai-gap-32: 32 ÷ 16 */
justifycontent: center;
```

### Example 3: Responsive Hero Section

```html
<section
	class="chai-bg-gradient chai-h-100vh chai-w-100p chai-display-flex chai-items-center chai-justify-center chai-flex-col chai-gap-24 chai-p-32">
	<h1
		class="chai-fs-48 chai-weight-bold chai-text-[#fff] chai-align-center chai-m-0">
		Welcome to Chai Tailwind
	</h1>
	<p class="chai-fs-18 chai-text-[#f0f0f0] chai-align-center chai-max-w-600">
		Lightweight utility-first CSS engine with 16px REM scaling
	</p>
</section>
```

**Value Conversions:**

- `chai-h-100vh` → `height: 100vh` (viewport unit)
- `chai-w-100p` → `width: 100%` (percentage with p suffix)
- `chai-gap-24` → `gap: 1.5rem` (24 ÷ 16)
- `chai-max-w-600` → `maxWidth: 37.5rem` (600 ÷ 16)

---

## 🎯 Value Formatting System

The Chai engine has smart value parsing that automatically converts values based on their format:

### 🔢 **Numeric Values → REM Conversion**

Any numeric value in these properties gets converted from pixels to REM (base: 16px):

**Numeric-to-REM Properties:**

- Spacing: `p`, `m`, `pt`, `pb`, `pl`, `pr`, `px`, `py`, `mt`, `mb`, `ml`, `mr`, `my`, `mx`
- Sizing: `w`, `h`, `min-w`, `min-h`, `max-w`, `max-h`
- Typography: `fs` (fontSize)
- Border: `rounded` (borderRadius), `bw` (borderWidth)
- Flexbox: `gap`

**Conversion Formula:** `value ÷ 16 = rem`

Examples:

- `chai-p-16` → `padding: 1rem` (16 ÷ 16)
- `chai-fs-24` → `fontSize: 1.5rem` (24 ÷ 16)
- `chai-gap-32` → `gap: 2rem` (32 ÷ 16)
- `chai-w-100` → `width: 6.25rem` (100 ÷ 16)

### 📊 **Percentage Values (p suffix)**

Any value ending with `p` converts to a percentage:

Examples:

- `chai-w-50p` → `width: 50%`
- `chai-h-75p` → `height: 75%`
- `chai-rounded-50p` → `borderRadius: 50%`

### 📱 **Viewport Units (vh/vw)**

Viewport units pass through unchanged:

Examples:

- `chai-h-100vh` → `height: 100vh`
- `chai-w-50vw` → `width: 50vw`

### 🎨 **Hex Colors (brackets)**

Hex colors wrapped in brackets get brackets stripped:

Examples:

- `chai-bg-[#f5f1e9]` → `backgroundColor: #f5f1e9`
- `chai-text-[#4a362c]` → `color: #4a362c`
- `chai-bc-[#ccc]` → `borderColor: #ccc`

### 🏷️ **String Keywords**

String values pass through unchanged:

Examples:

- `chai-display-flex` → `display: flex`
- `chai-items-center` → `alignItems: center`
- `chai-justify-between` → `justifyContent: between`
- `chai-bs-solid` → `borderStyle: solid`

### 📦 **Custom Values (brackets)**

Any custom value in brackets passes through as-is:

Examples:

- `chai-min-w-[300px]` → `minWidth: 300px`
- `chai-p-[1.5em]` → `padding: 1.5em`
- `chai-top-[calc(100% - 20px)]` → `top: calc(100% - 20px)`

---

## 📊 REM Scale Reference

**16px Base Scale** - All numeric values convert to REM:

| Value | REM     | Actual | Example       |
| ----- | ------- | ------ | ------------- |
| 4     | 0.25rem | 4px    | `chai-gap-4`  |
| 8     | 0.5rem  | 8px    | `chai-p-8`    |
| 12    | 0.75rem | 12px   | `chai-pl-12`  |
| 16    | 1rem    | 16px   | `chai-fs-16`  |
| 24    | 1.5rem  | 24px   | `chai-m-24`   |
| 32    | 2rem    | 32px   | `chai-p-32`   |
| 48    | 3rem    | 48px   | `chai-gap-48` |
| 64    | 4rem    | 64px   | `chai-p-64`   |
| 80    | 5rem    | 80px   | `chai-w-80`   |
| 96    | 6rem    | 96px   | `chai-h-96`   |
| 100   | 6.25rem | 100px  | `chai-w-100`  |

---

## 🎯 Class Naming Convention

All utilities follow the pattern:

```
chai-[property]-[value]
```

Examples:

- `chai-p-24` → property: `p`, value: `24`
- `chai-text-[#4a362c]` → property: `text`, value: `[#4a362c]`
- `chai-display-flex` → property: `display`, value: `flex`
- `chai-w-100p` → property: `w`, value: `100p`

---

## ✨ Summary

### 📊 Statistics

- **Total Utilities**: 70+
- **Utility Categories**: 7
- **CSS Properties Mapped**: 40+
- **Base Scale**: 16px REM conversion
- **Value Types**: Numeric (REM), Percentage, Viewport, Hex Color, String Keyword, Custom

### 🎨 Categories

1. **Typography** (12 utilities) - Text styling, colors, decoration
2. **Sizing** (6 utilities) - Width, height, constraints
3. **Layout** (12 utilities) - Display, positioning, overflow
4. **Spacing** (14 utilities) - Padding and margin with directions
5. **Background** (1 utility) - Background colors
6. **Border** (4 utilities) - Width, color, style, radius
7. **Flexbox** (11 utilities) - Direction, alignment, gap, flex sizing

### 🚀 Key Features

- ✅ **Automatic REM Scaling** - Numeric values auto-convert with 16px base
- ✅ **Smart Value Parsing** - Percentages (p suffix), viewport units (vh/vw), custom values (brackets)
- ✅ **Hex Color Support** - Direct bracket notation for colors: `[#4a362c]`
- ✅ **Responsive-First** - Built for fluid, accessible designs
- ✅ **Lightweight** - Minimal CSS footprint, utility-first approach
- ✅ **Accessibility** - Logical properties (start/end) support RTL/LTR

Perfect for rapid, utility-driven UI development! ☕
