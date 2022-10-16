import React from 'react';
import { DuitInputType } from './Input.types';

export default function Input({ validateDuiInput, value, onInputChange }: DuitInputType) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateDuiInput(value);
  };

  return (
    <div className="relative bg-slate-300 w-full min-h-screen flex items-center justify-center flex-col">
      <div className="w-full max-w-lg text-center flex flex-col gap-16">
        <h1 className="text-5xl font-bold">Mi DUI es valido?</h1>
        <form
          className="flex flex-col gap-5 items-center"
          onSubmit={onSubmit}
        >
          <input
            placeholder="000000000"
            className="rounded p-2 w-full"
            value={value}
            onChange={onInputChange}
          />
          <button
            type="submit"
            className="bg-blue-700 text-white w-auto py-2 px-3 rounded"
          >
            Validar
          </button>
        </form>
      </div>
    </div>
  );
}
