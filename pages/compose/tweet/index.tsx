import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
import Button from '../../../components/Button/Button';
import useUser from '../../../hooks/useUser';

export default function Tweet() {
  const user = useUser();
  const [message, setMessage] = useState<string>('');

  const handleOnChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="¿Qué está pasando?"
          className=" w-full border-0 text-lg p-4 resize-none outline-0 min-h-200"
          value={message}
          onChange={handleOnChangeText}
        ></textarea>
        <div className="p-4">
          <Button disabled={message.length === 0 ? true : false}>
            Twittear
          </Button>
        </div>
      </form>
    </>
  );
}
