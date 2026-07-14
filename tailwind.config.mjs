/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:      '#0D4F5C',
          secondary:    '#1B3A47',
          accent:       '#06B6D4',
          'accent-lt':  '#22D3EE',
          dark:         '#0A2E38',
        },
        navy: {
          deep:     '#0C1A2A',
          DEFAULT:  '#111827',
          steel:    '#1E293B',
          light:    '#334155',
        },
        surface: {
          50:  '#F7F6F3',
          100: '#F0EEEA',
          200: '#E8E4DF',
          300: '#D4CFC8',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        concrete: {
          DEFAULT: '#E8E4DF',
          dark:    '#D4CFC8',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs':  ['0.625rem', { lineHeight: '0.875rem' }],
        'xs':   ['0.75rem',  { lineHeight: '1rem'     }],
        'sm':   ['0.875rem', { lineHeight: '1.25rem'  }],
        'base': ['1rem',     { lineHeight: '1.5rem'   }],
        'lg':   ['1.125rem', { lineHeight: '1.75rem'  }],
        'xl':   ['1.25rem',  { lineHeight: '1.75rem'  }],
        '2xl':  ['1.5rem',   { lineHeight: '2rem'     }],
        '3xl':  ['1.875rem', { lineHeight: '2.25rem'  }],
        '4xl':  ['2.25rem',  { lineHeight: '2.5rem'   }],
        '5xl':  ['3rem',     { lineHeight: '1.1'      }],
        '6xl':  ['3.75rem',  { lineHeight: '1.05'     }],
        '7xl':  ['4.5rem',   { lineHeight: '1'        }],
        '8xl':  ['6rem',     { lineHeight: '1'        }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(15,23,42,0.06)',
        'soft':    '0 4px 16px rgba(15,23,42,0.08)',
        'soft-md': '0 8px 32px rgba(15,23,42,0.10)',
        'soft-lg': '0 16px 48px rgba(15,23,42,0.12)',
        'soft-xl': '0 24px 64px rgba(15,23,42,0.14)',
        'glow':    '0 0 40px rgba(6,182,212,0.2)',
        'glow-lg': '0 0 80px rgba(6,182,212,0.25)',
      },
      animation: {
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)'      },
          '50%':      { transform: 'translateY(-12px)'   },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        'xs':  '375px',
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
