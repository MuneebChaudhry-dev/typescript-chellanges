import { expect, it } from 'vitest';

interface ParamsI {
  first: number;
  second: number;
}
//interface is used mostly with pbjects and type with normal strings,numbers etc
export const addTwoNumbers = (params: ParamsI) => {
  return params.first + params.second;
};

it('Should add the two numbers together', () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    })
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    })
  ).toEqual(30);
});
