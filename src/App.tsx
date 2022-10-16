import React, { useState } from 'react';

import { Input } from './components/Input';
import { isValidDui } from './helpers';

function App() {
  const [value, setValue] = useState('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target.value);
  };

  const onSubmit = (inputToValidate: string) => {
    if (isValidDui(inputToValidate)) {
      console.log('es true');
      return true;
    }

    console.log('no es true');
    return false;
  };

  return (
    <Input
      value={value}
      onInputChange={onInputChange}
      validateDuiInput={onSubmit}
    />
  );
}

export default App;
