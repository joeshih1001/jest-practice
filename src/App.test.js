import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and update with click", () => {
  render(<App />);

  //find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  //click button
  fireEvent.click(colorButton);

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  //expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial condition", () => {
  render(<App />);
  //check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", {name:'Disabled button'});
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox')
  const button = screen.getByRole('button')
 //test disabled
 fireEvent.click(checkbox)
 expect(button).toBeDisabled()
 expect(button).toHaveStyle({backgroundColor:'grey'})

 //test enabled
 fireEvent.click(checkbox)
 expect(button).toBeEnabled()
 expect(button).toHaveStyle({backgroundColor:'red'})

})
test('button click and checkbox disables button on first click and enables on second click', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox')
  const button = screen.getByRole('button')

  //click button
  fireEvent.click(button)
 //test disabled
 fireEvent.click(checkbox)
 expect(button).toBeDisabled()
 expect(button).toHaveStyle({backgroundColor:'grey'})

 //test enabled
 fireEvent.click(checkbox)
 expect(button).toBeEnabled()
 expect(button).toHaveStyle({backgroundColor:'blue'})

})
