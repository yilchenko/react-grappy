import type { Meta, StoryObj } from '@storybook/react'

import  { Grappy }  from './Grappy'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Grappy',
  component: Grappy,
  tags: ['autodocs'],
  argTypes: {
    link: { control: 'string' },
    width: { control: 'number' },
    height: { control: 'number' }
  },
} satisfies Meta<typeof Grappy>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    link: '123',
    width: 400,
    height: 400
  },
}

export const WithInitialCount: Story = {
  args: {
    link: '123',
    width: 400,
    height: 400
  },
}
