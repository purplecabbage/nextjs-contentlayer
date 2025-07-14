"use client"

import { FormEventHandler, useCallback, useState } from 'react';

const ConvertkitSignupForm = ({ formId }) => {
  const emailField = 'email';
  const nameField = 'first_name';
  const [success, setSuccess] = useState<boolean | undefined>();

  const onSubmit: FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();

      const target = event.target as HTMLFormElement;
      const data = new FormData(target);
      const email = data.get(emailField);
      const firstName = data.get(nameField);

      const body = JSON.stringify({
        formId,
        email,
        firstName
      });

      const headers = new Headers({
        'Content-Type': 'application/json; charset=utf-8',
      });

      try {
        const result = await fetch(`/api/subscribe`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache', 
          headers,
          body,
        });
        const json = await result.json();
        // console.log(json);
        setSuccess(true);
      } catch {
        setSuccess(false);
      }
    },
    [formId]
  );

  if (success === false) {
    return (
      <div className='h-48'>
        <p>Apologies, an error occurred</p>
      </div>
    );
  }

  if (success) {
    return (
      <div className='h-48 p-10 text-lg'>
        <p>You&apos;re in! Thank you for subscribing. Now check your email to confirm your subscription.</p>
      </div>
    );
  }

  return (
    <>
      <div className="pt-2">
        <p className={'mt-2 text-center text-lg md:text-lg col-span-3'}>
            Never miss a beat. Subscribe to the newsletter for semi-frequent updates
        </p>
        </div>
      <form
        target="_blank"
        className={`space-around border-1 flex flex-grow justify-center items-center`}
        onSubmit={onSubmit}
      >
        <div className="space-y-2">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name={nameField}
                    id="first-name"
                    placeholder='preferred name'
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name={emailField}
                    type="email"
                    placeholder="me@mysite.com"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <p className={'mt-1 text-center text-sm md:text-xs'}>
        <i>We respect your privacy. Unsubscribe at any time.</i>
      </p>
    </>
  );
};

export default ConvertkitSignupForm;