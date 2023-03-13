import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ArrowBackIcon } from '@chakra-ui/icons';
const BackBtn = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()}>
      <ArrowBackIcon />
    </Button>
  );
};

export default BackBtn;
