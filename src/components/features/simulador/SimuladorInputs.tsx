import React from 'react';

interface SimuladorInputsProps {
  extintores: number;
  setExtintores: (value: number) => void;
  recargas: number;
  setRecargas: (value: number) => void;
  inspecao: number;
  setInspecao: (value: number) => void;
}

export default function SimuladorInputs({
  extintores,
  setExtintores,
  recargas,
  setRecargas,
  inspecao,
  setInspecao
}: SimuladorInputsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <label>
        Extintores que possui?
        <input
          type="number"
          value={recargas}
          min={0}
          onChange={(e) => setRecargas(Number(e.target.value))}
          className="block border rounded p-1 w-full"
        />
      </label>

      <label>
        Extintores que pretende comprar?
        <input
          type="number"
          value={extintores}
          min={0}
          onChange={(e) => setExtintores(Number(e.target.value))}
          className="block border rounded p-1 w-full"
        />
      </label>

      <label>
        Edificios diferentes?
        <input
          type="number"
          value={inspecao}
          min={1}
          onChange={(e) => setInspecao(Number(e.target.value))}
          className="block border rounded p-1 w-full"
        />
      </label>
    </div>
  );
}