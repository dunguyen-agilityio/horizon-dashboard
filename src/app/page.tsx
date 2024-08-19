import { redirect } from 'next/navigation';

const Homepage = () => redirect('/dashboard'); // TODO: will handle redirect with middleware

export default Homepage;
