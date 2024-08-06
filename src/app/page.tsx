import Navbar from '@/layouts/Navbar';
import { Button } from '@nextui-org/button';

const Homepage = () => {
  return (
    <main className="container mx-auto">
      <h1 className="text-lg font-semibold">This is homepage</h1>
      <Button>Click me!</Button>
      <Navbar />
    </main>
  );
};

export default Homepage;
