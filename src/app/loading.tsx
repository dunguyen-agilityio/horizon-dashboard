import { Progress } from '@nextui-org/progress';

const Loading = () => (
  <div className="flex w-full h-screen items-center justify-center">
    <div className="w-[300px]">
      <Progress isIndeterminate color="primary" />
    </div>
  </div>
);

export default Loading;
