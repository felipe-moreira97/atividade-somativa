import React from 'react';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

it('should render Login page', () => {
  render(<App />);
  expect(screen.getByText("Login")).toBeInTheDocument()
});

it('should return error message', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: 'chuck' },
  })
  fireEvent.change(screen.getByLabelText(/Senha/i), {
    target: { value: 'norris' },
  })
  fireEvent.click(screen.getByText(/Acessar/i))
  expect(screen.getByText(/Usuário ou senha incorretos!/i)).toBeInTheDocument()
})

it('should return success message', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: 'eduardo.lino@pucpr.br' },
  })
  fireEvent.change(screen.getByLabelText(/Senha/i), {
    target: { value: '123456' },
  })
  fireEvent.click(screen.getByText(/Acessar/i))
  expect(screen.getByText(/Acessado com sucesso!/i)).toBeInTheDocument()
})

it('should unmount succsess message after reset', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: 'eduardo.lino@pucpr.br' },
  })
  fireEvent.change(screen.getByLabelText(/Senha/i), {
    target: { value: '123456' },
  })
  fireEvent.click(screen.getByText(/Acessar/i))
  expect(screen.getByText(/Acessado com sucesso!/i)).toBeInTheDocument()

  fireEvent.click(screen.getByText(/Redefinir/i))
  expect(screen.queryByText(/Acessado com sucesso!/i)).not.toBeInTheDocument()
})

it('should unmount error message after reset', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: 'eduardo.lino@pucpr.br' },
  })
  fireEvent.change(screen.getByLabelText(/Senha/i), {
    target: { value: '123123' },
  })
  fireEvent.click(screen.getByText(/Acessar/i))
  expect(screen.getByText(/Usuário ou senha incorretos!/i)).toBeInTheDocument()

  fireEvent.click(screen.getByText(/Redefinir/i))
  expect(screen.queryByText(/Usuário ou senha incorretos!/i)).not.toBeInTheDocument()
})