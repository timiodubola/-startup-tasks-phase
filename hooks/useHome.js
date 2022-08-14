import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

export const useHome = () => {
  const userId = 1;
  const { data, error, mutate } = useSWR(`/api/phase/${userId}`, fetcher);
  const [loading, setLoading] = useState(false);

  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    if (data?.startUpPhases[data.startUpPhases.length - 1].isCompleted) {
      setLoading(true);

      fetch('https://uselessfacts.jsph.pl/random.json')
        .then((data) => data.json())
        .then((data) => {
          setRandomFact(data.text);
          setLoading(false);
        });
    } else {
      setRandomFact('');
    }
  }, [data]);

  const handleChange = async (checked, phaseId, taskId) => {
    try {
      setLoading(true);
      await fetch(`/api/phase/${userId}`, {
        method: 'PATCH',
        body: JSON.stringify({ phaseId, taskId, isChecked: checked }),
      });

      mutate();
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return { data, error, handleChange, randomFact, loading };
};
