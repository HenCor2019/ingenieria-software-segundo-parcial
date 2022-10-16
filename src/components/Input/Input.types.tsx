import React from 'react';

export type DuitInputType = {
  validateDuiInput: (value: string) => void;
  value: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
