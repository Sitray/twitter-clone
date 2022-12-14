import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { onAuthState } from '../firebase/client';

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const [user, setUser] = useState<null | undefined>(USER_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    onAuthState(setUser);
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push('/');
  }, [user]);

  return user;
}
