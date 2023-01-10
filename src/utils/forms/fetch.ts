import fs from 'fs';

export const updateData = async (form: HTMLElement) => {
  const URL = form?.getAttribute('action') as string;
  const formData = new FormData(form as HTMLFormElement);

  const fetchOptions: RequestInit = {
    method: 'PUT',
    body: formData
  };
  const response = await fetch(URL, fetchOptions);

  return await response.json();
};
