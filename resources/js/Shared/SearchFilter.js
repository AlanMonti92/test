import React, { useState, useEffect, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import { usePrevious } from 'react-use';
import pickBy from 'lodash/pickBy';

export default () => {
  const currentURL = window.location.href.split('?')[0]
  const { filters } = usePage().props;
  const [opened, setOpened] = useState(false);

  const [values, setValues] = useState({
    search: filters || ''
  });

  const prevValues = usePrevious(values);

  function reset() {
    setValues({
      search: '',
    });
    Inertia.get(currentURL);
  }

  useEffect(() => {
    // https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
    if (prevValues) {
      const query = Object.keys(pickBy(values)).length
        ? pickBy(values)
        : { remember: 'forget' };
      Inertia.get(currentURL, query, {
        replace: true,
        preserveState: true
      });
    }
  }, [values]);

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setValues(values => ({
      ...values,
      [key]: value
    }));

    if (opened) setOpened(false);
  }

  return (
    <div className="flex items-center w-full max-w-md mr-4">
      <div className="relative flex w-full bg-white rounded shadow">
        <input
          className="relative w-full px-6 py-3 rounded-r focus:outline-none focus:ring-2 focus:ring-indigo-400"
          autoComplete="off"
          type="text"
          name="search"
          value={values.search}
          onChange={handleChange}
          placeholder="Search…"
        />
      </div>
      <button
        onClick={reset}
        className="ml-3 text-sm text-gray-600 hover:text-gray-700 focus:text-indigo-700 focus:outline-none"
        type="button"
      >
        Reset
      </button>
    </div>
  );
};
