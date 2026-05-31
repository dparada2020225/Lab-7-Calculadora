import '../src/index.css'

const preview = {
  decorators: [
    (Story) => {
      const div = document.createElement('div')
      div.style.background = '#1a1a2e'
      div.style.padding = '2rem'
      div.style.minHeight = '100vh'
      return Story()
    }
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#1a1a2e' }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview