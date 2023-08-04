import { render } from '@redwoodjs/testing/web'

import SubmitApplication from './SubmitApplication'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SubmitApplication', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubmitApplication />)
    }).not.toThrow()
  })
})
