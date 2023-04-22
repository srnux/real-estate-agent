import React from 'react';
import { render } from '@testing-library/react-native';

import ImagePicker from './image-picker';

describe('ImagePicker', () => {
  it('should render successfully', () => {
    const { container } = render(<ImagePicker />);
    expect(container).toBeTruthy();
  });
});
