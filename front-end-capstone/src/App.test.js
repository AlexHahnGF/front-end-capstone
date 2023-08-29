import { render, screen } from '@testing-library/react';
import App from './App';

const mockedUsedNavigate = jest.fn();


const texts = [
  "Contact Information",
  "Reservation Date and Time",
  "Number of people",
  "Please notice that...",
];


const expectedAction = [
  '17:00', '17:30',
  '18:00', '18:30',
  '19:30', '20:30',
  '21:00', '21:30',
  '22:00', '22:30',
  '23:00', '23:30'
]

test('Verify if text is in booking form.', () => {
    render(<BookingPage />);
    texts.forEach( text => {
        const elem = screen.getByText(text);
        expect(elem).toBeInTheDocument();
    })
})


test('Verify initialized times.', () => {
  render(<BookingPage />)
  initializeTimes().forEach((time) => {
    const element = screen.getByText(time);
    expect(element).toBeInTheDocument();
  })
})