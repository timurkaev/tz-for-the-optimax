import {cleanup, render} from '@testing-library/react';
import CartForm from './CartForm';

describe('form test', () => {
  let props: any;
  beforeEach(() => {
    props = {
      addToCart: jest.fn()
    };
  });
  afterEach(cleanup);

  test('should be mount', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const {getByTestId} = render(<CartForm {...props} />);
    expect(getByTestId('form')).toBeInTheDocument();
  });

  test('test input values', () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const {getByTestId} = render(<CartForm {...props} />);

    const nameInput = getByTestId('name-input');
    const priceInput = getByTestId('price-input');
    const amountInput = getByTestId('amount-input');

    expect(nameInput).toHaveValue('');
    expect(priceInput).toHaveValue(null);
    expect(amountInput).toHaveValue(1);
  });
});
