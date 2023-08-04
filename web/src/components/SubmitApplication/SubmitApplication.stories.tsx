// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SubmitApplication> = (args) => {
//   return <SubmitApplication {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SubmitApplication from './SubmitApplication'

export const generated = () => {
  return <SubmitApplication />
}

export default {
  title: 'Components/SubmitApplication',
  component: SubmitApplication,
} as ComponentMeta<typeof SubmitApplication>
