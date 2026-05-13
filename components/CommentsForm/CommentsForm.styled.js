import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
`;
export const Label = styled.label`
  font-family: Raleway, sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #666;
`;
export const InputField = styled.input`
  padding: 12px 16px;
  font: inherit;
  font-size: 1rem;
  border-radius: 8px;
  border: 1.5px solid #ddd;
  background: white;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #333;
  }
`;
export const SubmitButton = styled.button`
  cursor: pointer;
  background-color: #1d1d1f;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-family: Raleway, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;
export const SuccessMessage = styled.div`
  margin: 0 24px;
  padding: 12px 24px;
  border-radius: 8px;
  background: #f0faf0;
  border: 1.5px solid #a8e6a8;
  font-size: 0.85rem;
  color: #2d7a2d;
`;
