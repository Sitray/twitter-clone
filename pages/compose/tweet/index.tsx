import { useRouter } from 'next/router';
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';
import Button from '../../../components/Button/Button';
import { addTwit } from '../../../firebase/client';
import { COMPOSE_STATUSES } from '../../../helpers/statuses/ComposeStatus';
import useUser from '../../../hooks/useUser';

export default function Tweet() {
  const user = useUser();
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<COMPOSE_STATUSES>(
    COMPOSE_STATUSES.USER_NOT_KNOWN
  );
  const router = useRouter();

  const handleOnChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(COMPOSE_STATUSES.LOADING);
    if (user) {
      addTwit({
        //@ts-ignore
        avatar: user.avatar,
        content: message,
        //@ts-ignore
        userId: user.uid,
        //@ts-ignore
        userName: user.userName,
      }).then(() => {
        router.push('/home');
      });
    }
  };

  const isButtonDisabled =
    !message.length || status === COMPOSE_STATUSES.LOADING;

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
          <Button disabled={isButtonDisabled}>Twittear</Button>
        </div>
      </form>
    </>
  );
}
