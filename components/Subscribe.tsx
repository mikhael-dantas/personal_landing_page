import { useState, useRef } from 'react';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Form, FormState, Subscribers } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

export default function Subscribe() {
  // const [form, setForm] = useState<FormState>({ state: Form.Initial });
  // const inputEl = useRef(null);
  // const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  // const subscriberCount = new Number(data?.count);

  const subscribe = async (e) => {
    // e.preventDefault();
    // setForm({ state: Form.Loading });

    // const email = inputEl.current.value;
    // const res = await fetch(`/api/subscribe?email=${email}`, {
    //   method: 'POST'
    // });

    // const { error } = await res.json();
    // if (error) {
    //   setForm({
    //     state: Form.Error,
    //     message: error
    //   });
    //   return;
    // }

    // inputEl.current.value = '';
    // setForm({
    //   state: Form.Success,
    //   message: `Hooray! You're now on the list.`
    // });
  };

  return (
    <>
    {/* blank space before real content */}
    <div className="h-24"></div>
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Quickly contact me
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Here are some ways to enter in contact with me
      </p>
      
      <div className="items-start sm:items-center mt-6 text-gray-100">
        <h2 className="
        text-gray-900
        dark:text-gray-100
        font-semibold
        mt-3">
          Whatsapp me: +55 11 95994-5482
        </h2>
        <a
          href="https://wa.me/5511959945482"
          target="blank"
          className="text-blue-600 dark:text-blue-400 hover:underline ml-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
        </a>
        <br/>
        <h2 className="
        text-gray-900
        dark:text-gray-100
        font-semibold
        mt-3"
        >
          Email me: mikhael-dcs@outlook.com
        </h2>
        <a 
          href="mailto:mikhael-dcs@outlook.com"
          target="blank"
          className="text-blue-600 dark:text-blue-400 hover:underline ml-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"> <path d="M0 5.5A2.5 2.5 0 0 1 2.5 3h11A2.5 2.5 0 0 1 16 5.5v5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 10.5v-5zM2.5 4a1.5 1.5 0 0 0-1 2.664l6.5 4.33 6.5-4.33A1.5 1.5 0 0 0 13.5 4h-11z"/> <path d="M2.5 5.25a.25.25 0 0 1 .41-.192L8 9.303l5.09-3.55a.25.25 0 0 1 .41.192v5.5a.25.25 0 0 1-.25.25h-11a.25.25 0 0 1-.25-.25v-5.5z"/> </svg>
        </a>
        <br/>
        <h2 className="linkedin text-gray-900 dark:text-gray-100 font-semibold mt-3">
          Linkedin: mikhael-dantas 
        </h2>
        <a
          href="https://www.linkedin.com/in/mikhael-dantas/"
          target="blank"
          className="text-blue-600 dark:text-blue-400 hover:underline ml-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 4.5C0 3.11929 1.11929 2 2.5 2h11C14.8807 2 16 3.11929 16 4.5v7c0 1.38071-1.11929 2.5-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7zM2.5 3a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-11zM4.5 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-1 5.5h2v-4h-2v4zm3 0h2v-2.5c0-.2761.2239-.5.5-.5s.5.2239.5.5V10h2v-2.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5V10z"/> </svg>
        </a>
        <br/>
      </div>
    </div>
    {/* one more black space */}
    <div className="h-14"></div>
    </>
  );
}
