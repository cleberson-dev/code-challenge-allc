import {useEffect} from 'react';
import {RecoilState, useRecoilValue} from 'recoil';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: RecoilState<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: RecoilState<any>) => void;
};

export const RecoilObserver = (props: Props) => {
  const value = useRecoilValue(props.node);
  useEffect(() => props.onChange(value), [props.onChange, value]);
  return null;
};
