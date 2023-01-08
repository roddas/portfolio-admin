type FormDataObject = {
  [key in string]: FormDataEntryValue;
};

export const updateData = async (form: HTMLElement) => {
  const URL = form?.getAttribute('action') as string;
  const formData = new FormData(form as HTMLFormElement);
  const formDataObj: FormDataObject = {};

  formData.forEach((value: FormDataEntryValue, key: string) => {
    formDataObj[key] = value;
  });
  console.log(formDataObj);
  const response = await fetch(URL, {
    method: 'PUT',
    body: JSON.stringify(formDataObj),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await response.json();
};
