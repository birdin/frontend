import { render, fireEvent, screen } from '@testing-library/react'
import ShowPassword from './ShowPassword'

describe('ShowPassword', () => {
  it('should render correctly', () => {
    render(<ShowPassword state={true} toggle={()=>{}} />)
  })

  it('should call onClick', async () => {
    const mockOnClick = jest.fn()

    const { getByRole } = render(
      <ShowPassword state={true} toggle={()=>{}} action={mockOnClick} />
    )

    fireEvent.click(getByRole('button'))
    expect(mockOnClick).toHaveBeenCalled()
  })

  it('change state', () => {
    const { getByRole } = render(
      <ShowPassword state={true} toggle={()=>{}} />
    )
    fireEvent.click(getByRole('button'))
    expect(getByRole('button')).toHaveClass('active')
  })

  it('should render icon', () => {
    const {getAllByTestId} = render(
      <ShowPassword state={false} toggle={()=>{}} />
    )
		const icon = getAllByTestId('off')
    expect(icon).toBeTruthy();
  })
})
